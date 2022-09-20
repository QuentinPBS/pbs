<?php

namespace App\Actions\Project;

use App\Models\Member;

class StoreAdminProjectMemberAction
{
    /**
     * @var Member
     */
    public function execute($projectId)
    {
        Member::create([
            'user_id' => 1,
            'project_id' => $projectId,
            'role_id' => 2
        ]);
        return response()->json(['success' => 'User invited to project']);
    }
}