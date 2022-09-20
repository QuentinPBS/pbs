<?php

namespace App\Actions\Project;

use App\Models\Project;

class ShowProjectBySlugAction
{
    /**
     * @var Project
     */
    public function execute($slug)
    {
        // search Member owner by userId
        return Project::where(['slug' => $slug])->with(['user'])->first();
    }
}