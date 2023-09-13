<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'vendor', 'description', 'status', 'gateway_id'];

    public function gateway(){
        return $this->belongsTo(Gateway::class);
    }
}
