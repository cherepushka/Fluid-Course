<?php

namespace Modx\Enums;

enum PaymentStatus: string
{

    case NEW = 'new';
    case PAID = 'paid';
}