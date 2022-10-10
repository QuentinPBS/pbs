<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use App\Models\Invitations;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class InvitationTest extends TestCase
{
    use RefreshDatabase;
    public function test_success_reject_invitation()
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $project = Project::factory()->create();
        $invitation = Invitations::factory()->create([
            'project_id' => $project->id,
            'user_id' => $user->id
        ]);


        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->delete('/api/invites/reject/' . $invitation->token)
            ->assertStatus(200);
    }
}
