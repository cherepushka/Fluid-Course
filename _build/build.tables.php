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
 'ToDo\Model\tdList',
 'ToDo\Model\tdTask'
];

// Get the manager
$manager = $modx->getManager();

// Loop through our classes
foreach ($classes as $class) {
 // Check if the class exists
 if (class_exists($class)  ) {
  // Create the table
  echo("Creating table for class: $class".PHP_EOL);
  $manager->createObjectContainer($class);
 }
 else {
  echo("Unable to load model class: $class".PHP_EOL);
 }
}