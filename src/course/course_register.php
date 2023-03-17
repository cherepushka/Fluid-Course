<?php
namespace Modx\course;

use Modx\Payments\Prodamus\Prodamus;
use Modx\Services\PaymentService;
use Modx\Services\CourseRegisterService;

class CourseRegister{
    
    private readonly PaymentService $paymentService;
    private readonly CourseRegisterService $registerService;
    
    public function __construct()
    {
        $secret_url = 'https://fluidcourse.payform.ru/';
        $secret_key = '1b1a49442fa672accdc74a2336fa7bbdf440baf987864240529e08181df31872';

        $prodamus = new Prodamus($secret_url, $secret_key);
        
        $this->paymentService = new PaymentService($prodamus);
        $this->registerService = new CourseRegisterService();
    }
    
    
 
    

}