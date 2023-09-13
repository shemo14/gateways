<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class DeviceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'vendor' => $this->vendor,
            'description' => $this->description,
            'status' => (boolean)$this->status,
            'gateway_id' => $this->gateway_id,
            'gateway' => $this->gateway->name
        ];
    }
}
