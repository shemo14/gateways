<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gateway;

class GatewayController extends Controller
{
    public function gateways(){
        return Gateway::get();
    }
}
