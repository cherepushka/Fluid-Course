<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\PaymentService;
use App\Packages\Api\Prodamus\Prodamus;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Log;
use RuntimeException;

class ProdamusController extends Controller
{

    private readonly PaymentService $paymentService;

    public function __construct()
    {
        $secret_key = config('services.prodamus.api_secret_key');
        $form_url = config('services.prodamus.form_link');

        $prodamus = new Prodamus($form_url, $secret_key);
        $this->paymentService = new PaymentService($prodamus);
    }
    
    public function paymentCallback(Request $request): HttpResponse
    {
        if (!$request->header('Sign')) {
            throw new RuntimeException('Signature not found', 400);
        }

        Log::debug(print_r($request->all(), true));

        $this->paymentService->setPaidAndGrantAccessToCourse($request->all(), $request->header('Sign'));
    
        return response('', 200);
    }

}
