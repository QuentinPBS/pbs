<?php

namespace App\Actions\Project;

use App\Models\Project;

class ShowProjectById
{
    /**
     * @var Project
     */
    public function execute($id)
    {
        // search project by id
        return Project::where('id', $id)->with(['user'])->first();
    }
}