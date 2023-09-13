<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Http\Requests\Api\Device\AddDeviceRequest;
use App\Http\Requests\Api\Device\UpdateDeviceRequest;
use App\Traits\ResponseTrait;
use App\Http\Resources\Api\DeviceResource;

class DeviceController extends Controller
{
    use ResponseTrait;

    public function devices(){
        return $this->response('success', '', DeviceResource::collection(Device::get()));
    }

    public function store_device(AddDeviceRequest $request){
        Device::create($request->validated());
        return $this->response('success', 'device added successfully');
    }

    public function update_device(UpdateDeviceRequest $request){
        $device = Device::find($request->id);
        $device->update($request->validated());
        return $this->successMsg('device updated successfully');
    }

    public function delete_device($id){
        $device = Device::findOrFail($id);
        $device->delete();
        return $this->successMsg('device deleted successfully');
    }
}
