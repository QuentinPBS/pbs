<?php

namespace App\Models;

use App\Models\User;
use App\Models\Feature;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FeatureDelivery extends Model
{
    const LINK = 1;
    const FILE = 2;
    use HasFactory;
    protected $guarded = ['id'];

    public function feature()
    {
        return $this->belongsTo(Feature::class, 'feature_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
