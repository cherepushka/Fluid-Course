<?php

namespace Modx\course;

use Modx\Payments\Prodamus\Prodamus;
use Modx\Services\PaymentService;
use Modx\Enums\PaymentMethod;
use Modx\Services\CourseRegisterService;

class CourseRegister
{

    private readonly PaymentService $paymentService;
    private readonly CourseRegisterService $registerService;

    public function __construct()
    {
        $secret_url = 'https://fluidcourse.payform.ru/';
        $secret_key = '1b1a49442fa672accdc74a2336fa7bbdf440baf987864240529e08181df31872';

        $prodamus = new Prodamus($secret_url, $secret_key);

        $this->paymentService = new PaymentService($prodamus);
        $this->registerService = new CourseRegisterService();
    }

    public function register(string $course_slug)
    {
        $validated['name_and_surname'] = $_POST['name_and_surname'];
        $validated['email'] = $_POST['email'];
        $validated['phone'] = $_POST['phone'];
        $validated['company'] = $_POST['company'];
        $validated['job'] = $_POST['job'];

        $courseQuery = "SELECT * FROM `modx_courses` WHERE `slug` = ? ORDER BY 'id' DESC";
        $response = $modx->prepare($courseQuery);
        if ($response->execute([$course_slug])) {
            $course = $response->fetch(PDO::FETCH_ASSOC);
        }
        $email = trim($validated['email']);

        $is_registerd = $this->registerService->isRegisteredOnMainSession($course, $email);
        // Есть ли уже запись с данным имейлом среди регистраций на этот курс?
        if ($is_registerd !== null) {
            $response = [
                'method' => 'success',
                'message' => 'Вы уже записаны на курс!'
            ];

            if ($this->paymentService->registrationPaymentRequired($is_registerd)) {
                $response['paylink'] = $is_registerd->payment->pay_link;
            }

            return json_encode($response);
        }

        // Если регистрация на курс закончилась, то записываем на будущее
        if ($course['end_date'] !== null && $course['end_date'] < date("Y-m-d H:i:s")) {

            // Есть ли уже запись с данным имейлом среди регистраций на этот курс?
            if ($this->registerService->isRegisteredOnFutureSessions($course, $email)) {
                return json_encode([
                    'method' => 'success',
                    'message' => 'Вы уже записаны на следующий поток курса.'
                ]);
            }

            $this->registerService->saveOnFutureSession($course, $email, $validated);

            return json_encode([
                'method' => 'success',
                'message' => 'Регистрация на текущий поток закрыта! Вы успешно записались на следующий поток курса.'
            ]);
        }

        $responseJson = [
            'method' => 'success',
            'message' => 'Вы успешно записались на курс!'
        ];

        $payment = null;
        $payment_required = $course['default_price'] !== null;

        if ($payment_required) {

            $paymentMethod = PaymentMethod::ONLINE;

            if (isset($validated['paymentMethod']) && PaymentMethod::tryFrom($validated['paymentMethod']) !== null) {
                $paymentMethod = PaymentMethod::from($validated['paymentMethod']);
            }

            $payment = $this->paymentService->getNewPayment(
                $course,
                $email,
                $paymentMethod,
                $validated['promocode'] ?? null,
            );

            $responseJson['paylink'] = $payment->pay_link;
        }

        $registration = $this->registerService->saveOnMainCourseSession($course, $email, $validated, $payment);

        if (!$payment_required) {
            GrantAccessToCourseJob::dispatch($course, $registration)
                ->delay(now()->addSecond());
        }

        return response()->json($responseJson);
    }
}
