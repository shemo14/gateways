<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GatewayController;
use App\Http\Controllers\Api\DeviceController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// ======= Gateways Routes =========
Route::get('/gateways', [GatewayController::class, 'gateways']);
Route::get('/gateway/{id}', [GatewayController::class, 'gateway']);
Route::post('/store-gateway', [GatewayController::class, 'store_gateway']);
Route::put('/update-gateway', [GatewayController::class, 'update_gateway']);
Route::delete('/delete-gateway/{id}', [GatewayController::class, 'delete_gateway']);

// ======= Devices Routes =========
Route::get('/devices', [DeviceController::class, 'devices']);
Route::post('/store-device', [DeviceController::class, 'store_device']);
Route::put('/update-device', [DeviceController::class, 'update_device']);
Route::delete('/delete-device/{id}', [DeviceController::class, 'delete_device']);
