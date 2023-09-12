<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class GatewaysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gateways')->insert([
            [
                'name'             => 'David Samuel',
                'ip'               => '126.198.1.1',
            ],[
                'name'             => 'James Olivia',
                'ip'               => '225.225.225.225',
            ],[
                'name'             => 'Evelyn Henry',
                'ip'               => '140.188.0.0',
            ]
        ]);
    }
}
