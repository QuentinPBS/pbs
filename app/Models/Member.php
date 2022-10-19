<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    const ADMIN = 1;
    const MEMBER = 2;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'project_id',
        'role_id'
    ];

    /* Get the project for the member. */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /* Get the user for the member. */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /* Get the user for the member. */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
