<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payments';

    protected $fillable = [
        'pay_link',
        'type',
        'status',
        'payment_date',
        'price',
        'promo_code_id',
    ];
}
