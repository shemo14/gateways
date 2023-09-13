<?php

namespace App\Http\Requests\Api\Gateway;

use App\Http\Requests\Api\BaseApiRequest;

class AddGatewayRequest extends BaseApiRequest
{
    public function rules()
    {
        return [
            'name'    => 'required',
            'ip'      => 'required',
        ];
    }
}
