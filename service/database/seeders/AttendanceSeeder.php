<?php

namespace Database\Seeders;

use App\Models\Attendance;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('attendances')->truncate();
        Schema::enableForeignKeyConstraints();

        $attendances = [
            ['date' => '2020-01-01', 'time' => '08:00:00', 'type_attendance_id' => 1, 'user_id' => 1],
        ];

        collect($attendances)->each(function ($attendance) {
            Attendance::create($attendance);
        });
    }
}
