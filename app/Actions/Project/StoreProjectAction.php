<?php

namespace App\Actions\Project;

use App\Http\Requests\ProjectStoreRequest;
use App\Models\Project;

class StoreProjectAction
{
    /**
     * @var ProjectStoreRequest
     */
    public function execute(ProjectStoreRequest $request, $userID)
    {
       return Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $request->image ? $request->image : "https://paybystep.s3.eu-west-3.amazonaws.com/bg-default.png",
            'user_id' => $userID,
        ]);
    }
}