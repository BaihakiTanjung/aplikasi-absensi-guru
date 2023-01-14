<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReportAttendanceRequest;
use Illuminate\Http\Request;
use App\Repositories\Attendance\AttendanceRepository;
use App\Http\Requests\StoreAttendaceRequest;

// Singleton
class AttendanceController extends Controller
{

    private $AttendanceRepository;

    public function __construct(AttendanceRepository $AttendanceRepository)
    {
        $this->AttendanceRepository = $AttendanceRepository;
    }

    public function store(StoreAttendaceRequest $request)
    {
        return $this->AttendanceRepository->store($request);
    }

    public function report(ReportAttendanceRequest $request)
    {
        return $this->AttendanceRepository->report($request);
    }
}
