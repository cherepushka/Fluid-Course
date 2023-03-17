<?php

namespace Modx\Exceptions;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use RuntimeException;

class ForbiddenPaymentMethodException extends RuntimeException{

    protected string $error_message = 'Такой метод оплаты запрещен для данного продукта';
    protected int $error_code = 400;

    public function __construct()
    {
        parent::__construct($this->error_message, $this->error_code);
    }

    public function render(Request $request): JsonResponse
    {
        return response()->json([
            'message' => $this->error_message
        ], $this->error_code);
    }

}