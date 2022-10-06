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
    public function handleGetLeadConversation($slug)
    {
        $messages = LeadConversation::query()
            ->with('user')
            ->whereHas('lead', fn ($q) => $q->whereSlug($slug))
            ->get();

        return response()->json([
            'messages' => $messages
        ], 200);
    }
}
