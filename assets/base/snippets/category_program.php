<?php
$query = $modx->query("SELECT * FROM `modx_site_tmplvars` WHERE name='category_program'");
$result = $query->fetch(PDO::FETCH_ASSOC);
$categories = explode('||', $result['elements']);

// foreach ($categories as $category) {
//     echo $category .PHP_EOL;
// }