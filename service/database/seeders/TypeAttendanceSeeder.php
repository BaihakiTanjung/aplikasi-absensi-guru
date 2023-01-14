<?php

namespace Database\Seeders;


use App\Models\TypeAttendance;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class TypeAttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('type_attendances')->truncate();
        Schema::enableForeignKeyConstraints();

        $type_attendances = [
            ['name' => 'Mengajar'],
            ['name' => 'Halaqoh'],
        ];

        collect($type_attendances)->each(function ($type_attendance) {
            TypeAttendance::create($type_attendance);
        });
    }
}
