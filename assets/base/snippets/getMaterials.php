<?php
global $modx;

$materials = [];
$selectParent = "SELECT `id`, `pagetitle` FROM `modx_site_content` WHERE `parent` = 24";
$fetch = $modx->query($selectParent);
$response = $fetch->fetch(PDO::FETCH_ASSOC);

var_dump($response);