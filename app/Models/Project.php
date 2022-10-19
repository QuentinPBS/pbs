<?php

namespace App\Models;

use App\Models\User;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory, HasSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [
        'id',

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

    /* Get the owner for the project. */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    /* Get invitations for the project. */
    public function invitations()
    {
        return $this->hasMany(Invitations::class);
    }
    /* Get members for the project. */
    public function members()
    {
        return $this->belongsToMany(User::class, 'members');
    }
    /* Get features for the project. */
    public function features()
    {
        return $this->hasManyThrough(Feature::class, Lead::class);
    }

    public function getImageAttribute()
    {

        return $this->attributes['image'] ? Storage::url($this->attributes['image']) : null;
    }
}
