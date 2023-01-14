<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'time',
        'type_attendance_id',
        'user_id',
    ];

    protected $table = 'attendances';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function typeAttendance()
    {
        return $this->belongsTo(TypeAttendance::class);
    }
}
