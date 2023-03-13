<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $table = 'courses';

    protected $fillable = [
        'title',
        'slug',
        'link',
        'start_date',
        'end_date',
        'default_price',
        'installment_available'
    ];

    public function registrations()
    {
        return $this->hasMany(CourseRegistration::class);
    }

    public function registrationInputs()
    {
        return $this->hasMany(CourseInputField::class);
    }
}
