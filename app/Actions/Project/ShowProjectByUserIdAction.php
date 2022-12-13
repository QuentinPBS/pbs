<?php

namespace App\Actions\Project;

use App\Models\Member;
use App\Models\Project;

class ShowProjectByUserIdAction
{
    /**
     * @var Member
     */
    public function execute($userId, $roleId)
    {
        // search Member owner by userId
        return Member::query()
            ->with(['user', 'project'])
            ->where(['user_id' => $userId, 'role_id' => $roleId])
            ->whereDoesntHave('project.archives')
            ->get();
    }
}
