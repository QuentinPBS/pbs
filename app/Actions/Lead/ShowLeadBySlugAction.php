<?php

namespace App\Actions\Lead;

use App\Models\Lead;
use App\Models\Member;

class ShowLeadBySlugAction
{
    /**
     * @var Project
     */
    public function execute($slug)
    {
        // search Member owner by userId

        $lead = Lead::query()
            ->with(['project'])
            ->where(['slug' => $slug])
            ->addSelect([
                'is_owner' => Member::select('id')
                    ->whereColumn('project_id', 'leads.project_id')
                    ->where('user_id', auth()->id())
                    ->where('role_id', Member::ADMIN)
                    ->limit(1)
            ])
            ->first();


        return $lead;
    }
}
