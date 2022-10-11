<?php

namespace App\Models;

use App\Models\FeatureDelivery;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'deadline',
        'user_id',
        'validation_id',
        'lead_id',
    ];

    /* Get owner for the feature. */
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    /* Get project for the feature. */
    public function lead()
    {
        return $this->belongsTo(Lead::class);
    }

    /* Get validation for the feature. */
    public function validation()
    {
        return $this->belongsTo(Validation::class);
    }

    /* Get delivery for the feature. */
    public function delivery()
    {
        return $this->hasOne(FeatureDelivery::class);
    }
}
