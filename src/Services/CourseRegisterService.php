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
        $email_user_field_query = "SELECT * FROM `modx_user_data_fields` WHERE 'slug' = 'email' ODER BY 'id' DESC";
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
        $email_user_field = $response->fetch(PDO::FETCH_ASSOC);


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

            $new_registration_query = "SELECT * FROM `modx_course_registrations` ORDER BY `id` DESC";
            $response = $modx->query($new_registration_query);
            $new_registration = $response->fetch(PDO::FETCH_ASSOC);

            
            $courseRegistrationInputsQuery = "SELECT * FROM `modx_courses` INNER JOIN `modx_course_input_fields` ON
                                                `modx_courses.id` = `modx_courses_input_fields.course_id`";
            $response = $modx->query($courseRegistrationInputsQuery);
            $courseRegistationInputs = $response->fetchAll(PDO::FETCH_ASSOC);

            // $userDataFieldQuery = "SELECT * FROM `modx_course_input_fields` INNER JOIN `modx_user_data_fields` ON 
            //                         `modx_course_input_fields.field_id` = `modx_user_data_fields.id`";
            // $response = $modx->query($userDataFieldQuery);
            // $userDataField = $response->fetch(PDO::FETCH_ASSOC);

            foreach ($courseRegistationInputs as $registrationInput) {

                $userDataFieldQuery = "SELECT * FROM `modx_course_input_fields` INNER JOIN `modx_user_data_fields` ON 
                                        `{$registrationInput['id']}` = `modx_user_data_fields.id`";
                $response = $modx->query($userDataFieldQuery);
                $userDataField = $response->fetch(PDO::FETCH_ASSOC);
                
                $input = $userDataField;
                
                $courseRegistrationUserDataQuery = "INSERT INTO `modx_course_registration_user_data` 
                                                    (`registration_id`,`field_id`,`field_value`) VALUE (?,?,?)";
                $statement = $modx->prepare($courseRegistrationUserDataQuery);
                $statement->execute([
                    $new_registration['id'],
                    $input['id'],
                    $validated[$input['slug']] ?? null
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

            $modx->commit();

            return $new_registration;
        } catch (\Exception $e) {

            $modx->rollBack();
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
        array $course,
        string $userEmail,
        array $validated
    ): void {
        try {
            $modx->beginTransaction();


            $new_registration_query = "INSERT INTO `modx_course_future_registrations` (`course_id`)
                                        VALUE (?)";
            $statement = $modx->prepare($new_registration_query);
            $statement->execute([$course['id']]);

            $new_registration_query = "SELECT * FROM `modx_course_future_registrations` ORDER BY `id` DESC";
            $response = $modx->query($new_registration_query);
            $new_registration = $response->fetch(PDO::FETCH_ASSOC);

            
            $courseRegistrationInputsQuery = "SELECT * FROM `modx_courses` INNER JOIN `modx_course_input_fields` ON
                                                `modx_courses.id` = `modx_courses_input_fields.course_id`";
            $response = $modx->query($courseRegistrationInputsQuery);
            $courseRegistationInputs = $response->fetchAll(PDO::FETCH_ASSOC);

            foreach ($courseRegistationInputs as $registrationInput) {

                $userDataFieldQuery = "SELECT * FROM `modx_course_input_fields` INNER JOIN `modx_user_data_fields` ON 
                                        `{$registrationInput['id']}` = `modx_user_data_fields.id`";
                $response = $modx->query($userDataFieldQuery);
                $userDataField = $response->fetch(PDO::FETCH_ASSOC);
                
                $input = $userDataField;
                
                $courseFutureRegistrationUserDataQuery = "INSERT INTO `modx_course_future_registration_user_data` 
                                                    (`registration_id`,`field_id`,`field_value`) VALUE (?,?,?)";
                $statement = $modx->prepare($courseFutureRegistrationUserDataQuery);
                $statement->execute([
                    $new_registration['id'],
                    $input['id'],
                    $validated[$input['slug']] ?? null
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
