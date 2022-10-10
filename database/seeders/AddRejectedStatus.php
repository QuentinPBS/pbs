<?php

namespace Database\Seeders;

use App\Models\Validation;
use Illuminate\Database\Seeder;

class AddRejectedStatus extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Validation::create([
            'name' => 'rejected',
            'description' => 'rejected by user',
            'identifier' => 'rejected'
        ]);
    }
}
