<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Validation extends Model
{
    use HasFactory;

    /* Get features by validation. */
    public function features()
    {
        return $this->hasMany(Feature::class);
    }

    /* Get leads by validation. */
    public function leads()
    {
        return $this->hasMany(Lead::class);
    }
}
