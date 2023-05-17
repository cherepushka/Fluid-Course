<?php
global $modx, $xpdo;
// require_once $_SERVER['DOCUMENT_ROOT'] . "/index.php";

define('MODX_CORE_PATH', $_SERVER['DOCUMENT_ROOT'] . '/core/');
require_once MODX_CORE_PATH . "vendor/autoload.php";

$modx = new \MODX\Revolution\modX();

// $query = "SELECT * FROM `modx_courses`";
// $response = $modx->query($query);
// $params = $response->fetchAll(PDO::FETCH_ASSOC);

// var_dump($params);

// $query = "INSERT INTO `modx_courses` (`title`,`slug`,`link`,`start_date`,`end_date`) 
//         VALUES ('{$_POST['name_and_surname']}', '{$_POST['email']}','{$_POST['phone']}',now(),now())";

$query = "INSERT INTO `modx_courses` (`title`,`slug`,`link`,`start_date`,`end_date`) 
        VALUES (?,?,?,?,?)";
$statement = $modx->prepare($query);
if ($statement->execute([
        $_POST['name_and_surname'],
        $_POST['email'],
        $_POST['phone'],
        date("Y-m-d H:i:s"),
        date("Y-m-d H:i:s")
])) {
        $response = $statement->fetchAll(PDO::FETCH_ASSOC);
}
$query = "SELECT * FROM `modx_courses`";
$response = $modx->query($query);
$params = $response->fetchAll(PDO::FETCH_ASSOC);
var_dump($params);

// $temp = $modx->newQuery('modx_courses',['title'=>'sdcd']);
// var_dump($temp);
// var_dump($params);

// var_dump($modx);die;
