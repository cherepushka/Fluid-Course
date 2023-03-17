<?php

namespace Modx\Services;

global $modx;
define('MODX_CORE_PATH', $_SERVER['DOCUMENT_ROOT'] . '/core/');
require_once MODX_CORE_PATH . "vendor/autoload.php";
$modx = new \MODX\Revolution\modX();


final class CourseRegisterService
{

    public function isRegisteredOnMainSession(array $course, string $userEmail)
    {


        // $email_user_field_query = UserDataField::where('slug', 'email')->first();
        $email_user_field_query = "SELECT * FROM `modx_user_data_fields` WHERE 'slug' = 'email'";
        $response = $modx->query($email_user_field_query);
        $email_user_field = $response->fetch($response);

        $email_registered_record_query = "SELECT * FROM `modx_course_registrations` 
                                        INNER JOIN `modx_course_registration_user_data`
                                        WHERE `modx_course_registration_user_data.registration_id` = `modx_course_registrations.id`
                                        AND WHERE `modx_course_registrations.course_id` = ?
                                        AND WHERE 'field_id' = ?
                                        AND WHERE 'field_value' = ?
                                        LIMIT 1";
        $statement = $modx->prepare($email_registered_record_query);
        if ($statement->execute([
            $course['id'],
            $email_user_field['id'],
            $userEmail
        ])) {
            $email_registered_record = $statement->fetch(PDO::FETCH_ASSOC);
        }

        return $email_registered_record;
    }

    public function isRegisteredOnFutureSessions(array $course, string $userEmail): bool
    {
        // $email_user_field = UserDataField::where('slug', 'email')->first();        
        $email_user_field_query = "SELECT * FROM `modx_user_data_fields` WHERE 'slug' = 'email'";
        $response = $modx->query($email_user_field_query);
        $email_user_field = $response->fetch($response);


        $email_registered_record_query = "SELECT * FROM `modx_course_future_registration_user_data` 
                                        INNER JOIN `modx_course_future_registrations`
                                        WHERE `modx_course_future_registrations.id` = `modx_course_future_registration_user_data.registration_id`
                                        AND WHERE `modx_course_future_registrations.course_id` = ?
                                        AND WHERE 'field_id' = ?
                                        AND WHERE 'field_value' = ?
                                        LIMIT 1";
        $statement = $modx->prepare($email_registered_record_query);
        if ($statement->execute([
            $course['id'],
            $email_user_field['id'],
            $userEmail
        ])) {
            $email_registered_record = $statement->fetch(PDO::FETCH_ASSOC);
        }

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
        array $course,
        string $userEmail,
        array $validated,
        ?array $payment = null
    ) {
        try {
            $modx->beginTransaction();

            $new_registration_query = "INSERT INTO `modx_course_registrations` (`course_id`,`payment_id`)
                                        VALUE (?, ?)";
            $statement = $modx->prepare($new_registration_query);
            $payment = $payment !== null ? $payment['id'] : null;
            $statement->execute([$course['id'], $payment]);
            

            foreach ($course->registrationInputs as $registrationInput) {

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
        } catch (\Exception $e) {

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
    ): void {
        try {
            DB::beginTransaction();

            $new_registration = CourseFutureRegistration::create(['course_id' => $course->id]);

            foreach ($course->registrationInputs as $registrationInput) {

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
        } catch (\Exception $e) {

            DB::rollBack();
            throw $e;
        }
    }
}
