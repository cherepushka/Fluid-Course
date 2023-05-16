<?php
global $modx;
var_dump($modx);
die;
// require_once $_SERVER['DOCUMENT_ROOT'] . "/index.php";
define('MODX_CORE_PATH', $_SERVER['DOCUMENT_ROOT'] . '/core/');

require_once MODX_CORE_PATH . "vendor/autoload.php";

$modx = new \MODX\Revolution\modX();

$namespace = "Course\\Model\\";

$output = "";

var_dump(method_exists($modx, 'newObject') , $namespace .'courses');

if (!is_null($_POST['name_and_surname']) and !is_null($_POST['email']) and !is_null($_POST['phone'])) {
    $newCourse = $modx->newObject($namespace .'courses');
    
    die;
    // $newCourse->set('title', 'qwe');
    // $newCourse->set('slug', 'qwe');
    // $newCourse->set('link', 'qwe');
    $newCourse->set('title', $_POST['name_and_surname']);
    $newCourse->set('slug', $_POST['email']);
    $newCourse->set('link', $_POST['phone']);

    // var_dump($newCourse);
    $newCourse->save();
}





$lists = $modx->getCollection($namespace . 'courses', []);
$listCount = 0;

if ($lists) {
    foreach ($lists as $list) {
        $output .= PHP_EOL . PHP_EOL . '(' . $list->get('id') . ') ' . $list->get('title');
    }
}
return $output;