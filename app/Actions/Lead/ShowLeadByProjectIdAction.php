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
            ->where(function ($q) use ($projectId) {
                $q->where(['project_id' => $projectId])
                    ->where('user_id', auth()->id())
                    ->OrwhereExists(function ($q) use ($projectId) {
                        $q->select("lead_user.lead_id")
                            ->from('lead_user')
                            ->where('lead_user.user_id', auth()->id())
                            ->where('lead_id', function ($query) use ($projectId) {
                                $query->select('id')
                                    ->from('leads')
                                    ->where('project_id', $projectId)
                                    ->whereRaw('lead_user.lead_id = leads.id')
                                    ->limit(1);
                            })
                            ->whereRaw('lead_user.lead_id = leads.id');
                    });
                // ->orWhereHas('users', fn ($q) => $q->where('users.lead_id', auth()->id()));
            })

            ->get();
    }
}
