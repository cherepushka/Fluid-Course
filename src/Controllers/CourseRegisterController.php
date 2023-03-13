<?php

namespace App\Http\Controllers;

use App\Enums\PaymentMethod;
use App\Http\Requests\CourseRegistrationRequest;
use App\Http\Services\CourseRegisterService;
use App\Http\Services\PaymentService;
use App\Jobs\GrantAccessToCourseJob;
use App\Models\Course;
use App\Packages\Api\Prodamus\Prodamus;

class CourseRegisterController
{

    private readonly PaymentService $paymentService;
    private readonly CourseRegisterService $registerService;

    public function __construct(){
        $secret_key = config('services.prodamus.api_secret_key');
        $form_url = config('services.prodamus.form_link');

        $prodamus = new Prodamus($form_url, $secret_key);

        $this->paymentService = new PaymentService($prodamus);
        $this->registerService = new CourseRegisterService();
    }
    
    public function register(CourseRegistrationRequest $request, string $course_slug)
    {
        $validated = $request->validated();

        $course = Course::where('slug', $course_slug)->first();

        $validated['email'] = trim($validated['email']);
        $email = $validated['email'];
        
        $is_registerd = $this->registerService->isRegisteredOnMainSession($course, $email);
        // Есть ли уже запись с данным имейлом среди регистраций на этот курс?
        if($is_registerd !== null){
            $response = [
                'method' => 'success',
                'message' => 'Вы уже записаны на курс!'
            ];

            if($this->paymentService->registrationPaymentRequired($is_registerd)){
                $response['paylink'] = $is_registerd->payment->pay_link;
            }

            return response()->json($response);
        }

        // Если регистрация на курс закончилась, то записываем на будущее
        if($course->end_date !== null && $course->end_date < now()){

            // Есть ли уже запись с данным имейлом среди регистраций на этот курс?
            if($this->registerService->isRegisteredOnFutureSessions($course, $email)){
                return response()->json([
                    'method' => 'success',
                    'message' => 'Вы уже записаны на следующий поток курса.'
                ]);
            }

            $this->registerService->saveOnFutureSession($course, $email, $validated);

            return response()->json([
                'method' => 'success', 
                'message' => 'Регистрация на текущий поток закрыта! Вы успешно записались на следующий поток курса.'
            ]);
        }

        $responseJson = [
            'method' => 'success', 
            'message' => 'Вы успешно записались на курс!'
        ];

        $payment = null;
        $payment_required = $course->default_price !== null;

        if($payment_required){

            $paymentMethod = PaymentMethod::ONLINE;

            if (isset($validated['paymentMethod']) && PaymentMethod::tryFrom($validated['paymentMethod']) !== null){
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

        if(!$payment_required){
            GrantAccessToCourseJob::dispatch($course, $registration)
                ->delay(now()->addSecond());
        }

        return response()->json($responseJson);
    }

}
