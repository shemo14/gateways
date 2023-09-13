<?php

namespace App\Http\Requests\Api\Gateway;
use App\Http\Requests\Api\BaseApiRequest;

class UpdateGatewayRequest extends BaseApiRequest
{
    public function rules()
    {
        return [
            'id' => 'required|exists:gateways,id',
            'name' => 'sometimes|required',
            'ip' => 'sometimes|required'
        ];
    }
}
