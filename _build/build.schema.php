<?php

// Set API Mode to true
define('MODX_API_MODE', true);

// Include the main index.php file to load MODX in API Mode
@include(dirname(__FILE__, 2) . '/index.php');

/**
 * @var \MODX\Revolution\modX $modx
 *
 */

// Get the manager and generator
$manager = $modx->getManager();
$generator = $manager->getGenerator();

// Define the paths needed
//{base_path}/project1/
$projectRootDir = MODX_BASE_PATH;

//{base_path}/project1/core/components/todo/
$corePath = $projectRootDir . 'core/components/todo/';

//{base_path}/project1/core/components/todo/schema/todo.mysql.schema.xml
$schemaFile = $corePath . "schema/todo.mysql.schema.xml";

if (is_file($schemaFile)) {
 echo("Parsing schema: $schemaFile".PHP_EOL);
 // Parse the schema to generate the class files
 $generator->parseSchema(
  $schemaFile,
  $corePath . 'src/',
  [
   "compile" => 0,
   "update" => 0,
   "regenerate" => 1,
   "namespacePrefix" => "ToDo\\"
  ]
 );
}
else {
 echo("Schema file path invalid: $schemaFile".PHP_EOL);
}