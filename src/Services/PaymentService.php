<?php

namespace Modx\Services;

use Modx\Payments\Prodamus\Prodamus;
use Modx\Payments\Prodamus\DTO\PayLinkRequestProductItem;
use Modx\Payments\Prodamus\DTO\PayLinkRequest;
use Modx\Enums\PaymentMethod;
use Modx\Enums\PaymentStatus;
use Modx\Exceptions\InvalidPromocodeException;
use Modx\Exceptions\ForbiddenPaymentMethodException;
use RuntimeException;

global $modx;
define('MODX_CORE_PATH', $_SERVER['DOCUMENT_ROOT'] . '/core/');
require_once MODX_CORE_PATH . "vendor/autoload.php";

$modx = new \MODX\Revolution\modX();



final class PaymentService
{
    
    public function __construct(
        private readonly Prodamus $prodamus
        ) {
    }

    /**
     * Формирование новой оплаты
     * 
     * @param Course $course - курс, который пользователь хочет купить
     * @param string $customerEmail - email покупателя
     * @param PaymentMethod $paymentMethod - метод оплаты
     * @param ?string $promocode - промокод
     * 
     */
    public function getNewPayment(
        array $course,
        string $customerEmail,
        PaymentMethod $paymentMethod,
        ?string $promocode
    ): array {
        if (
            $promocode === null
            && $paymentMethod === PaymentMethod::INSTALLMENT
            && $course->installment_available == false
        )
            // {
            //     throw new ForbiddenPaymentMethodException();
            // }

            $price = $course->default_price;

        $promocodeObj = null;
        if (null !== $promocode) {

            $promocode = mb_strtoupper($promocode);

            $promocodeQuery = "SELECT * FROM `modx_promo_codes` WHERE 'course_id' = ? AND 
                                                              WHERE 'title' = ? ORDER BY 'id' DESC";
            $statement = $modx->prepare($promocodeQuery);
            if ($statement->execute([
                $course['id'],
                $promocode
            ])) {
                $promocodeObj = $statement->fetch(PDO::FETCH_ASSOC);
            };

            if (null === $promocodeObj) {
                throw new InvalidPromocodeException();
            }

            if ($paymentMethod === PaymentMethod::INSTALLMENT && $promocodeObj->installment_available == false) {
                throw new ForbiddenPaymentMethodException();
            }

            $price = $promocodeObj['course_price'];
        }
        $promocodeID = $promocodeObj ? $promocodeObj['id'] : null;
        $paymentQuery = "INSERT INTO `modx_payments` (`pay_link`,`status`,`price`,`promo_code_id`,`type`)
                                VALUE (?,?,?,?,?)";

        $response = $modx->prepare($paymentQuery);
        $response->execute([
            '',
            PaymentStatus::NEW->value,
            $price,
            $promocodeID,
            $paymentMethod->value
        ]);
        $paymentQuery = "SELECT * FROM `modx_payments` ORDER BY 'id' DESC";
        $response = $modx->query($paymentQuery);
        $payment = $response->fetch(PDO::FETCH_ASSOC);

        $payProduct = (new PayLinkRequestProductItem())
            ->setName($course['title'])
            ->setPrice($price);

        $payLinkRequest = (new PayLinkRequest())
            ->setOrderId($payment['id'])
            ->setCustomerEmail($customerEmail)
            ->addProduct($payProduct)
            ->setAvailablePaymentMethods($paymentMethod)
            ->setRef($promocode ?? '');

        $paylink = $this->prodamus->generatePayLink($payLinkRequest);

        $payment['pay_link'] = $paylink;

        // $payment->save(); нужен ли? вставка прошла выше

        return $payment;
    }

    public function setPaidAndGrantAccessToCourse(array $postData, string $signHeader): void
    {
        $isCorrect = $this->prodamus->isPaymentResponseCorrect($postData, $signHeader);
        if (!$isCorrect) {
            throw new RuntimeException('Wrong Sign header', 400);
        }

        if (!$this->prodamus->isPaid($postData)) {
            return;
        }

        $paymentID = $this->prodamus->getPaymentId($postData);
        $paymentQuery = "SELECT * FROM `modx_payments` WHERE 'id' = ? ORDER BY DESC";
        $response = $modx->prepare($paymentQuery);
        if ($response->execute([$paymentID])) {
            $payment = $response->fetch(PDO::FETCH_ASSOC);
        }
        if ($payment === null) {
            throw new RuntimeException('Оплата по заказу не найдена', 400);
        }

        // Если заказ уже оплачен, не обновляем статус
        if ($payment->status === PaymentStatus::PAID->value) {
            return;
        }

        $courseRegistrationQuery = "SELECT * FROM `modx_course_registrations` WHERE 'payment_id' = ? ORDER BY DESC";
        $response = $modx->prepare($courseRegistrationQuery);
        if($response->execute([$payment['id']])) {
            $courseRegistration = $response->fetch(PDO::FETCH_ASSOC);
        }

        if ($courseRegistration === null) {
            throw new RuntimeException('Регистрация к курсу не найдена по id оплаты', 400);
        }

        $course = $courseRegistration['course'];

        $modx->beginTransaction();

        try {

            GrantAccessToCourseJob::dispatch($course, $courseRegistration)
                ->delay(now()->addSecond());


            $paymentStatus = PaymentStatus::PAID->value;
            $paymentQuery = "UPDATE `modx_payments` SET 'status' = ? WHERE 'id' = ?";
            $response = $modx->prepare($paymentQuery);
            $response->execute([
                $paymentStatus,
                $payment['id']
            ]);

            $modx->commit();
        } catch (\Exception $e) {
            $modx->rollBack();
            throw $e;
        }
    }

    public function registrationPaymentRequired(array $registration): bool
    {
        return
            $registration['payment'] !== null
            && $registration['payment']->status !== PaymentStatus::PAID->value;
    }
}
