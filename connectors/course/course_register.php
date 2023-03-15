<?php
require_once './connectors/payments/Prodamus.php';
require_once './connectors/payments/PaymentService.php';


$secret_url = 'https://fluidcourse.payform.ru/';
$secret_key = '1b1a49442fa672accdc74a2336fa7bbdf440baf987864240529e08181df31872';

$prodamus = new Prodamus($secret_url, $secret_key);

$paymentService = new PaymentService($prodamus);
