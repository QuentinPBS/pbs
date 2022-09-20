<?php

namespace App\Actions\Project;

use App\Models\Member;

class StoreMemberAction
{
    /**
     * @var Member
     */
    public function execute($userId, $projectId, $roleId)
    {
        return Member::create([
            'user_id' => $userId,
            'project_id' => $projectId,
            'role_id' => $roleId,
        ]);
    }
}