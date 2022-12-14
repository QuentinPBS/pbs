<?php

namespace App\Models;

use App\Models\Project;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject, MustVerifyEmail
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'status',
        'firstname',
        'lastname',
        'email',
        'password',
        'siren',
        'area',
        'last_login_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Get the projects for the user.
     */
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    /**
     * Get the features for the user.
     */
    public function features()
    {
        return $this->hasMany(Feature::class);
    }

    /* The client that belong to the user. */
    public function clients()
    {
        return $this->belongsToMany(Client::class);
    }

    /* The client that belong to the user. */
    public function members()
    {
        return $this->belongsToMany(Project::class);
    }

    /* The member that belong to the user. */
    public function leads()
    {
        return $this->belongsToMany(Lead::class, 'lead_user');
    }

    /* Get invitations for the user. */
    public function invitations()
    {
        return $this->hasMany(Invitations::class);
    }

    /* Get deliveries for the feature. */
    public function deliveries()
    {
        return $this->hasMany(FeatureDelivery::class);
    }

    public function archives()
    {
        return $this->belongsToMany(Project::class, 'project_archived');
    }
    /* Get stripe account */
    public function stripeAccount()
    {
        return $this->hasOne(StripeAccount::class);
    }
}
