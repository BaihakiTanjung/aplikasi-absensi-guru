<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('users')->truncate();
        Schema::enableForeignKeyConstraints();

        $user = User::create([
            'email' => 'admin@hydra.project',
            'password' => Hash::make('hydra'),
            'name' => 'Hydra Admin',
            'phone' => '085155070001',
            'sex' => 'L',
            'address' => 'Jln Parung Panjang 1'
        ]);
        $user->roles()->attach(Role::where('slug', 'admin')->first());

        $user = User::create([
            'email' => 'guru@hydra.project',
            'password' => Hash::make('guru'),
            'name' => 'Guru',
            'phone' => '085155070002',
            'sex' => 'L',
            'address' => 'Jln Parung Panjang 2'
        ]);
        $user->roles()->attach(Role::where('slug', 'user')->first());
    }
}
