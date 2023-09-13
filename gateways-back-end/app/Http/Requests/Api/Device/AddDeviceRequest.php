<?php

namespace App\Http\Requests\Api\Device;

use App\Http\Requests\Api\BaseApiRequest;

class AddDeviceRequest extends BaseApiRequest
{
    public function rules()
    {
        return [
            'vendor' => 'required',
            'description' => 'required',
            'status' => 'required',
            'gateway_id' => 'required|exists:gateways,id',
        ];
    }
}
