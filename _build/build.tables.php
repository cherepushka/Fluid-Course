<?php

// Set API Mode
define('MODX_API_MODE', true);

// Include the index to load MODX in API Mode
@include(dirname(__FILE__, 2) . '/index.php');

/**
 * @var \MODX\Revolution\modX $modx
 *
 */

// Classes to loop through
$classes = [
    'Course\Model\courses',
    // 'ToDo\Model\tdList',
];

// Get the manager
$manager = $modx->getManager();
// echo MODX_BASE_PATH; die;

// Loop through our classes
foreach ($classes as $class) {
    // Check if the class exists
    if (class_exists($class)  ) {
        // Create the table
        echo("Creating table for class: $class".PHP_EOL);
        $manager->createObjectContainer($class);
        // var_dump('done');die; 
 }
 else {
  echo("Unable to load model class: $class".PHP_EOL);
 }
}