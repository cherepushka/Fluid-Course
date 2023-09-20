<?php

$path = MODX_BASE_PATH ?: $_SERVER['DOCUMENT_ROOT'];
require_once $path . '/vendor/autoload.php';

use Dotenv\Dotenv;
use Teachbase\Teachbase;

$dotenv = Dotenv::createImmutable($path);
$dotenv->load();

$publicApiKey = $_ENV['PUBLIC_API_KEY'];
$secretApiKey = $_ENV['SECRET_API_KEY'];

$teachbase = new Teachbase($publicApiKey, $secretApiKey);
$teachbase->init();

$user_email = $hook->getValue('email');

$course_id = $modx->resource->get('id');
$tvObj  = $modx->getObject('modTemplateVar', array('name' => 'teachBase_session_id'));
$tvRawValue = $tvObj->getValue($course_id);
$teachBase_session_id = (int)$tvObj->renderOutput($course_id);

$user = $teachbase->user()->create($user_email);
$teachbase->courseSessions()->registerUser($teachBase_session_id, $user->getTeachbaseId());


return true;  //<-- если вы не укажете это или вернете "ложь", ваша форма не будет проверяться