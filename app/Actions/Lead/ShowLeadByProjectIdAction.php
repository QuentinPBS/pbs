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
            ->where('user_id', auth()->id())
            ->orWhereHas('users', fn ($q) => $q->where('users.id', auth()->id()))
            ->get();
    }
}
