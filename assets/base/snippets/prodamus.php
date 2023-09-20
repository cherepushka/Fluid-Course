<?php
global $modx;

$page = $modx->resource->get('id');
$tvObj = $modx->getObject('modTemplateVar', array('name' => 'prodamus_link'));
$tvObj->getValue($tvObj);
var_dump($tvObj);
//header('Location: ' . $tv->get('prodamus_link'));