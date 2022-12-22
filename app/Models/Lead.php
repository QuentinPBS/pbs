<?php

namespace App\Models;

use App\Models\User;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lead extends Model
{
    use HasFactory, HasSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'content',
        'user_id',
        'project_id',
        'validation_id',
        'share_id',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => ['name']
            ]
        ];
    }

    /* Get the owner for the lead. */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /* Get trhe project for the lead. */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /* Get the features for the lead. */
    public function features()
    {
        return $this->belongsToMany(Feature::class);
    }

    /* Get share for the lead. */
    public function share()
    {
        return $this->belongsTo(Share::class);
    }

    /* Get the validation for the lead. */
    public function validation()
    {
        return $this->belongsTo(Validation::class);
    }

    /* The client that belong to the user. */
    public function clients()
    {
        return $this->belongsToMany(Client::class);
    }

    /* The member that belong to the user. */
    public function member()
    {
        return $this->belongsToMany(User::class);
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }



    public function messages()
    {
        return $this->hasMany(LeadConversation::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'lead_user');
    }
}
