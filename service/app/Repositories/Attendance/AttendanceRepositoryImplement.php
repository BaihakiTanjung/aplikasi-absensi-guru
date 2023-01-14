<?php

namespace App\Repositories\Attendance;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Attendance;
use App\Http\Helpers\ResponseHelpers;
use Excel;
use App\Exports\AttendanceExport;

// Builder
class AttendanceRepositoryImplement extends Eloquent implements AttendanceRepository
{

    /**
     * Model class to be used in this repository for the common methods inside Eloquent
     * Don't remove or change $this->model variable name
     * @property Model|mixed $model;
     */
    protected $model;

    public function __construct(Attendance $model)
    {
        $this->model = $model;
    }

    public function store($request)
    {
        $attendance = $this->model;
        $attendance->date = date('Y-m-d');
        $attendance->time = date('H:i:s');
        $attendance->type_attendance_id = $request->type_attendance_id;
        $attendance->user_id = auth()->user()->id;
        $attendance->save();

        return ResponseHelpers::sendSuccess('attedance created', $attendance);
    }

    public function report($request)
    {
        $attendances = $this->model->with(['user', 'typeAttendance'])->where('date', '>=', date('Y-m-d', strtotime($request->start_date)))->where('date', '<=', date('Y-m-d', strtotime($request->end_date)))->get();

        $data = [];

        foreach ($attendances as $attendance) {
            $data[] = [
                'date' => $attendance->date,
                'time' => $attendance->time,
                'type_attendance' => $attendance->typeAttendance->name,
                'user' => $attendance->user->name,
            ];
        }

        // return csv or excel

        return Excel::download(new AttendanceExport($data), 'attedance-report.xlsx');
    }
}
