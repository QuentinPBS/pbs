<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\AddRejectedStatus;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            ShareSeeder::class,
            ValidationSeeder::class,
            AddRejectedStatus::class
        ]);
    }
}
