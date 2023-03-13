<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseRegistration extends Model
{
    use HasFactory;

    protected $table = 'course_registrations';

    protected $fillable = [
        'course_id',
        'payment_id',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class, 'id', 'payment_id');
    }

}
