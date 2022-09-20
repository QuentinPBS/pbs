<?php

namespace App\Actions\Feature;

use App\Models\Feature;

class StoreFeatureAction
{
    public function execute($request, $userId, $validationId)
    {
        return Feature::create([
            'name' => $request->name,
            'price' => $request->price,
            'deadline' => $request->deadline,
            'user_id' => $userId,
            'validation_id' => $validationId,
            'lead_id' => $request->devis_id
        ]);
    }
}