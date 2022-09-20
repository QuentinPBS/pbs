<?php

namespace App\Actions\Lead;

use App\Models\Lead;

class ShowLeadBySlugAction
{
    /**
     * @var Project
     */
    public function execute($slug)
    {
        // search Member owner by userId
        return Lead::where(['slug' => $slug])->with(['project'])->first();
    }
}