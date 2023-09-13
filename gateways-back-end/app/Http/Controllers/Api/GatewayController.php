<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Gateway\AddGatewayRequest;
use App\Http\Requests\Api\Gateway\UpdateGatewayRequest;
use App\Models\Gateway;
use App\Traits\ResponseTrait;
use App\Http\Resources\Api\GatewayResource;

class GatewayController extends Controller
{
    use ResponseTrait;
    public function gateways(){
        return $this->response('success', '', GatewayResource::collection(Gateway::get()));
    }

    public function gateway($id){
        return $this->response('success', '', new GatewayResource(Gateway::findOrFail($id)));
    }

    public function store_gateway(AddGatewayRequest $request){
        Gateway::create($request->validated());
        return $this->response('success', 'gateway added successfully');
    }

    public function update_gateway(UpdateGatewayRequest $request){
        $gateway = Gateway::find($request->id);
        $gateway->update($request->validated());
        return $this->response('success', 'gateway updated successfully');
    }

    public function delete_gateway($id){
        $gateway = Gateway::findOrFail($id);
        $gateway->delete();
        return $this->response('success', 'gateway deleted successfully');
    }

}
