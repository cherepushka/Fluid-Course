<?php
$query = $modx->query("SELECT * FROM `modx_site_tmplvars` WHERE name='category_program'");
$result = $query->fetch(PDO::FETCH_ASSOC);
$elements = explode('||',$result['elements']);

// echo gettype($elements);
// var_dump($elements);