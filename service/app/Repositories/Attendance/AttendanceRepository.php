<?php

namespace App\Repositories\Attendance;

use LaravelEasyRepository\Repository;

// Adapter
interface AttendanceRepository extends Repository
{
    public function store($request);
    public function report($request);
}
