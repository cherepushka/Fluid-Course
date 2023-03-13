<?php

namespace App\Enums;

enum PaymentStatus: string
{

    case NEW = 'new';
    case PAID = 'paid';
}