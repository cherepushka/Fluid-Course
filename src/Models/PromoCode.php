<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromoCode extends Model
{
    use HasFactory;

    protected $table = 'promo_codes';

    protected $fillable = [
        'title',
        'displayed_discount',
        'course_price',
        'course_id',
        'installment_available'
    ];
}
