<?php

namespace App\Actions\Project;

use App\Models\Project;
use Illuminate\Support\Str;
use App\Http\Requests\ProjectStoreRequest;

class StoreProjectAction
{
    /**
     * @var ProjectStoreRequest
     */
    public function execute(ProjectStoreRequest $request, $userID)
    {
        $file = $request->image;
        $path = null;
        if ($file) {

            $filePath = time() . '_' . Str::random(5) . '.' . $file->getClientOriginalExtension();

            $file->move(public_path("storage/projects"), $filePath);
            $path = "storage/projects" . '/' . $filePath;
        }



        return Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $path,
            'user_id' => $userID,
        ]);
    }
}
