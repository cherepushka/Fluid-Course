<?php

namespace App\Http\Services;

use App\Mail\CourseFutureSignUp;
use App\Mail\CourseSignUp;
use App\Models\Course;
use App\Models\CourseFutureRegistration;
use App\Models\CourseFutureRegistrationUserData;
use App\Models\CourseRegistration;
use App\Models\CourseRegistrationUserData;
use App\Models\Payment;
use App\Models\UserDataField;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

final class CourseRegisterService{

    public function isRegisteredOnMainSession(Course $course, string $userEmail): ?CourseRegistration
    {
        $email_user_field = UserDataField::where('slug', 'email')->first();

        $email_registered_record = CourseRegistration::select('course_registrations.*')
            ->join('course_registration_user_data', 'course_registration_user_data.registration_id', '=', 'course_registrations.id', )
            ->where('course_registrations.course_id', $course->id)
            ->where('field_id', $email_user_field->id)
            ->where('field_value', $userEmail)
            ->first();

        return $email_registered_record;
    }

    public function isRegisteredOnFutureSessions(Course $course, string $userEmail): bool
    {
        $email_user_field = UserDataField::where('slug', 'email')->first();

        $email_registered_record = CourseFutureRegistrationUserData::select('course_future_registration_user_data.*')
            ->join('course_future_registrations', 'course_future_registrations.id', '=', 'course_future_registration_user_data.registration_id')
            ->where('course_future_registrations.course_id', $course->id)
            ->where('field_id', $email_user_field->id)
            ->where('field_value', $userEmail)
            ->first();

        return $email_registered_record !== null;
    }

    /**
     * Сохраняем в базу инфу о пользователе и отправляем имейл
     * 
     * @param Course $course - курс, на который пользователь хочет записаться
     * @param string $userEmail - имейл пользователя
     * @param array $validated - дополнительные параметры из формы для записи
     */
    public function saveOnMainCourseSession(
        Course $course, 
        string $userEmail, 
        array $validated,
        ?Payment $payment = null
    ): CourseRegistration
    {
        try{
            DB::beginTransaction();

            $new_registration = CourseRegistration::create([
                'course_id' => $course->id,
                'payment_id' => $payment !== null ? $payment->id : null
            ]);

            foreach($course->registrationInputs as $registrationInput){

                $input = $registrationInput->userDataField;

                CourseRegistrationUserData::create([
                    'registration_id' => $new_registration->id,
                    'field_id' => $input->id,
                    'field_value' => $validated[$input->slug] ?? null,
                ]);
            }

            Mail::to($userEmail)
                ->later(now()->addMinute(), new CourseSignUp(
                    $course->title,
                    $validated['name_and_surname'], 
                    $userEmail,
                    $course->title,
                    'Приглашение на курс',
                ));
                
            DB::commit();

            return $new_registration;

        } catch (\Exception $e){

            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Сохраняем в базу инфу о пользователе и отправляем имейл
     * 
     * @param Course $course - курс, на который пользователь хочет записаться
     * @param string $userEmail - имейл пользователя
     * @param array $validated - дополнительные параметры из формы для записи
     */
    public function saveOnFutureSession(
        Course $course, 
        string $userEmail, 
        array $validated
    ): void
    {
        try{
            DB::beginTransaction();
            
            $new_registration = CourseFutureRegistration::create(['course_id' => $course->id]);

            foreach($course->registrationInputs as $registrationInput){

                $input = $registrationInput->userDataField;

                CourseFutureRegistrationUserData::create([
                    'registration_id' => $new_registration->id,
                    'field_id' => $input->id,
                    'field_value' => $validated[$input->slug] ?? null,
                ]);
            }

            Mail::to($userEmail)
                ->later(now()->addMinute(), new CourseFutureSignUp(
                    $course->title,
                    $validated['name_and_surname'], 
                    $userEmail,
                    $course->title,
                    'Приглашение на курс',
                ));

            DB::commit();
            
        } catch (\Exception $e){

            DB::rollBack();
            throw $e;
        }
    }

}