<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ValidationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('validations')->insert([
            'name' => 'waiting',
            'description' => 'waiting for validation',
            'identifier' => 'waiting',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('validations')->insert([
            'name' => 'validated',
            'description' => 'validated by user',
            'identifier' => 'validated',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('validations')->insert([
            'name' => 'canceled',
            'description' => 'canceled by user',
            'identifier' => 'canceled',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('validations')->insert([
            'name' => 'delivered',
            'description' => 'delivered by user',
            'identifier' => 'delivered',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('validations')->insert([
            'name' => 'success',
            'description' => 'success by user',
            'identifier' => 'success',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('validations')->insert([
            'name' => 'paid',
            'description' => 'paid by customer',
            'identifier' => 'paid',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
