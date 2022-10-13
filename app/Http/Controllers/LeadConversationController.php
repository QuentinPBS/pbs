<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use App\Models\LeadConversation;
use App\Http\Requests\StoreLeadConversationRequest;

class LeadConversationController extends Controller
{
    public function handleStoreMessage(StoreLeadConversationRequest $request)
    {
        $validatedData = $request->validated();
        $lead = Lead::find($validatedData['lead_id']);
        $lead->update([
            'content' => $validatedData['message']
        ]);

        return response()->json([
            'status' => true
        ], 201);
    }
    public function handleGetLeadConversation($slug)
    {
        $lead = Lead::query()
            ->with('user')
            ->where('slug', $slug)
            ->first();

        return response()->json([
            'lead' => $lead
        ], 200);
    }
}
