<?php

require_once __DIR__ . '/../vendor/autoload.php';

// Boot up MODX
require_once __DIR__ . '/../config.core.php';
require_once MODX_CORE_PATH . 'model/modx/modx.class.php';
$modx = new modX();

define('MODX_ROOT_PATH', dirname(__FILE__, 2));

$modx->initialize('web');
$modx->getService('error', 'error.modError', '', '');
// Boot up any service classes or packages (models) you will need
$path = $modx->getOption('mypackage.core_path', null,
        $modx->getOption('core_path') . 'components/mypackage/') . 'model/mypackage/';
$modx->getService('mypackage', 'myPackage', $path);

// Load the modRestService class and pass it some basic configuration
$rest = $modx->getService('rest', 'rest.modRestService', '', array(
    'basePath' => dirname(__FILE__) . '/Controllers/',
    'controllerClassSeparator' => '',
    'controllerClassPrefix' => 'MyController',
    'xmlRootNode' => 'response',
));

// Prepare the request
$rest->prepare();

// Make sure the user has the proper permissions, send the user a 401 error if not
if (!$rest->checkPermissions()) {
    $rest->sendUnauthorized(true);
}

// Run the request
$rest->process();