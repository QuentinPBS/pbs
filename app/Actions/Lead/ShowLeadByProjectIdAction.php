<?php

namespace App\Actions\Lead;

use App\Models\Lead;

class ShowLeadByProjectIdAction
{
    /**
     * @var Member
     */
    public function execute($projectId)
    {
        // search Member owner by userId
        return Lead::where(['project_id' => $projectId])->with(['user', 'project'])->get();
    }
}