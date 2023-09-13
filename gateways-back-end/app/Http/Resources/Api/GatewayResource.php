<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Api\DeviceResource;

class GatewayResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'IPv4' => $this->ip,
            'devices' => DeviceResource::collection($this->devices()->get())
        ];
    }
}
