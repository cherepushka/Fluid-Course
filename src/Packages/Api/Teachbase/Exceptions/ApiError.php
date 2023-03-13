<?php

namespace App\Packages\Api\Teachbase\Exceptions;

class ApiError extends \RuntimeException {

    public function __construct(string $message, int $code)
    {
        parent::__construct($message, $code);
    }

}