<?php

namespace App\Actions\Feature;

use App\Models\Feature;

class ShowFeatureBySlugAction
{
    /**
     * @var Feature
     */
    public function execute($slug)
    {
        // search Member owner by userId
        return Feature::where(['slug' => $slug])->with(['lead', 'validation'])->first();
    }
}