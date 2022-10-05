<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLeadConversationRequest;
use App\Models\LeadConversation;
use Illuminate\Http\Request;

class LeadConversationController extends Controller
{
    public function handleStoreMessage(StoreLeadConversationRequest $request)
    {
        $validatedData = $request->validated();

        LeadConversation::create($validatedData);
        return response()->json([
            'status' => true
        ], 201);
    }
}
