<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Member;
use App\Models\Project;
use App\Models\Invitations;
use Illuminate\Support\Str;
use App\Jobs\SendInvitation;
use Illuminate\Http\Request;
use App\Mail\SendInvitationMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class InviteController extends Controller
{
    public function inviteProjectUser($projectId, $userId)
    {
        Member::create([
            'user_id' => $userId,
            'project_id' => $projectId,
            'role_id' => 2
        ]);
        return response()->json(['success' => 'User invited to project']);
    }

    public function sendInvitation($projectId, Request $request)
    {

        $validatedData = $request->validate([
            'email' => 'required',
            'userId' => 'required|exists:users,id',
            'lead_id' => 'required|exists:leads,id',
        ]);
        $project = Project::find($projectId);
        if (!$project) return response()->json(['error' => 'Project not found']);

        $invitation = $project->invitations()->where('email', $request->email)->first();
        if ($invitation) return response()->json(['error' => 'Invitation already sent']);

        $project->invitations()->create([
            'email' => $validatedData['email'],
            'token' => Str::random(60),
            'project_id' => $projectId,
            'lead_id' => $validatedData['lead_id'],
            'user_id' => $validatedData['userId']

        ]);

        $dataInvite = $project->invitations()->where('email', $request->email)->with(['project', 'user'])->first();
        // Mail::to($request->email)->send(new SendInvitationMail($dataInvite));
        SendInvitation::dispatch($request->email, $dataInvite);
        return response()->json(['success' => 'User invite user']);
    }

    /**
     * Accept invitation
     *
     * @param [type] $token
     * @return void
     */
    public function acceptInvitation($token)
    {
        $invitation = Invitations::where('token', $token)->first();
        if (!$invitation) return response()->json(['error' => 'Invitation not found']);

        $user = User::where('email', $invitation->email)->first();
        if (!$user) return response()->json(['error' => 'User not found']);

        Member::create([
            'user_id' => $user->id,
            'project_id' => $invitation->project_id,
            'role_id' => 2
        ]);
        $user->leads()->attach($invitation->lead_id);
        $invitation->delete();
        return response()->json(['success' => 'Invitation accepted']);
    }

    public function declineInvitation($token)
    {
        $invitation = Invitations::where('token', $token)->first();
        if (!$invitation) return response()->json(['error' => 'Invitation not found']);

        $invitation->delete();
        return response()->json(['success' => 'Invitation declined']);
    }

    public function getInvitations($email)
    {
        $invitations = Invitations::where('email', $email)->with(['user', 'project'])->get();
       
        if (!$invitations) return response()->json(['error' => 'No invitations']);

        return response()->json($invitations, 200);
    }

    public function handleRejectInvitation($token)
    {
        $checkInvitation = Invitations::whereToken($token)->first();
        if (!$checkInvitation) {
            return response()->json(['status' => false], 404);
        }
        $checkInvitation->delete();
        return response()->json(['status' => true], 200);
    }
}
