<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /*Get the projects for the client*/
    public function projects()
    {
        return $this->hasMany('App\Models\Project');
    }
}
