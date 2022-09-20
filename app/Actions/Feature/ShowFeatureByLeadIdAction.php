<?php

namespace App\Actions\Feature;

use App\Models\Feature;

class ShowFeatureByLeadIdAction
{
    /**
     * @var Feature
     */
    public function execute($leadId)
    {
        // search Member owner by userId
        return Feature::where(['lead_id' => $leadId])->with(['lead', 'validation'])->get();
    }
}