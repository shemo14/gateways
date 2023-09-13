<?php

namespace App\Http\Requests\Api\Device;

use App\Http\Requests\Api\BaseApiRequest;

class UpdateDeviceRequest extends BaseApiRequest
{
    public function rules()
    {
        return [
            'vendor' => 'sometimes|required',
            'description' => 'sometimes|required',
            'status' => 'sometimes|required',
            'gateway_id' => 'sometimes|required|exists:gateways,id',
        ];
    }
}
