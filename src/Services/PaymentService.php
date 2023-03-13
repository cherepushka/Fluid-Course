<?php

namespace App\Http\Services;

use App\Enums\PaymentMethod;
use App\Exceptions\InvalidPromocodeException;
use App\Models\Course;
use App\Models\Payment;
use App\Models\PromoCode;
use App\Packages\Api\Prodamus\DTO\PayLinkRequest;
use App\Packages\Api\Prodamus\DTO\PayLinkRequestProductItem;
use App\Packages\Api\Prodamus\Prodamus;
use App\Enums\PaymentStatus;
use App\Exceptions\ForbiddenPaymentMethodException;
use App\Jobs\GrantAccessToCourseJob;
use App\Models\CourseRegistration;
use App\Models\CourseRegistrationUserData;
use App\Models\UserDataField;
use Illuminate\Support\Facades\DB;
use RuntimeException;

final class PaymentService{

    public function __construct(
        private readonly Prodamus $prodamus
    ){}

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
        Course $course, 
        string $customerEmail, 
        PaymentMethod $paymentMethod,
        ?string $promocode
    ): Payment
    {
        if(
            $promocode === null 
            && $paymentMethod === PaymentMethod::INSTALLMENT 
            && $course->installment_available == false
        ){
            throw new ForbiddenPaymentMethodException();
        }

        $price = $course->default_price;

        $promocodeObj = null;
        if (null !== $promocode){

            $promocode = mb_strtoupper($promocode);

            $promocodeObj = PromoCode::where('course_id', $course->id)
                ->where('title', $promocode)
                ->first();

            if(null === $promocodeObj){
                throw new InvalidPromocodeException();
            }

            if($paymentMethod === PaymentMethod::INSTALLMENT && $promocodeObj->installment_available == false){
                throw new ForbiddenPaymentMethodException();
            }

            $price = $promocodeObj->course_price;
        }

        $payment = Payment::create([
            'pay_link' => '',
            'type' => $paymentMethod->value,
            'status' => PaymentStatus::NEW->value,
            'price' => $price,
            'promo_code_id' => $promocodeObj ? $promocodeObj->id : null
        ]);

        $payProduct = (new PayLinkRequestProductItem())
            ->setName($course->title)
            ->setPrice($price);

        $payLinkRequest = (new PayLinkRequest())
            ->setOrderId($payment->id)
            ->setCustomerEmail($customerEmail)
            ->addProduct($payProduct)
            ->setAvailablePaymentMethods($paymentMethod)
            ->setRef($promocode ?? '');

        $paylink = $this->prodamus->generatePayLink($payLinkRequest);

        $payment->pay_link = $paylink;
        $payment->save();

        return $payment;
    }

    public function setPaidAndGrantAccessToCourse(array $postData, string $signHeader): void
    {
        $isCorrect = $this->prodamus->isPaymentResponseCorrect($postData, $signHeader);
        if(!$isCorrect){
            throw new RuntimeException('Wrong Sign header', 400);
        }

        if(!$this->prodamus->isPaid($postData)){
            return;
        }

        $payment = Payment::where('id', $this->prodamus->getPaymentId($postData))->first();
        if($payment === null){
            throw new RuntimeException('Оплата по заказу не найдена', 400);
        }

        // Если заказ уже оплачен, не обновляем статус
        if($payment->status === PaymentStatus::PAID->value){
            return;
        }

        $courseRegistration = CourseRegistration::where('payment_id', $payment->id)->first();
        if($courseRegistration === null){
            throw new RuntimeException('Регистрация к курсу не найдена по id оплаты', 400);
        }

        $course = $courseRegistration->course;

        DB::beginTransaction();

        try{
            
            GrantAccessToCourseJob::dispatch($course, $courseRegistration)
                ->delay(now()->addSecond());

            $payment->status = PaymentStatus::PAID->value;
            $payment->save();

            DB::commit();

        } catch(\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function registrationPaymentRequired(CourseRegistration $registration): bool
    {
        return 
            $registration->payment !== null 
            && $registration->payment->status !== PaymentStatus::PAID->value;
    }

}