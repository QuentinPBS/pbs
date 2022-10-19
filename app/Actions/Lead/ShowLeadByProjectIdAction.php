<?php

namespace App\Actions\Lead;

use App\Models\Lead;
use App\Models\Member;

class ShowLeadByProjectIdAction
{
    /**
     * @var Member
     */
    public function execute($projectId)
    {
        // search Member owner by userId
        return Lead::query()
            ->with(['user', 'project'])
            ->where(['project_id' => $projectId])
         
            ->get();
    }
}
