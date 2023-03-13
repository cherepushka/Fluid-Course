<?php

namespace App\Enums;

// Тинькофф на 3 месяца
// Всегда.Да на 4 месяца
enum PaymentMethod: string
{

    case ONLINE = 'online';
    case INSTALLMENT = 'installment';
}