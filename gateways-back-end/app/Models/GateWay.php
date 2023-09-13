<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gateway extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'name', 'ip'];

    public function devices(){
        return $this->hasMany(Device::class);
    }
}
