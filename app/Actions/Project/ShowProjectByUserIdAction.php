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
        return Member::where(['user_id' => $userId, 'role_id' => $roleId])->with(['user', 'project'])->get();
       
    }
}