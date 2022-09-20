<?php

namespace App\Actions\Lead;

use App\Models\Lead;

class StoreLeadAction
{
    /**
     * @var Lead
     */
    public function execute($request, $userId, $projectId, $validationId, $shareId)
    {
        // search Member owner by userId
        return Lead::create([
            'name' => $request->name,
            'content' => $request->content,
            'user_id' => $userId,
            'project_id' => $projectId,
            'validation_id' => $validationId,
            'share_id' => $shareId,
        ]);
    }
}