<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Lead;
use App\Models\User;
use App\Models\Feature;
use App\Models\Project;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LeadConversationTest extends TestCase
{
    use RefreshDatabase;


    public function test_store_feature_conversation_error_message()
    {

        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $project = Project::factory()->create();
        $lead = Lead::factory()->create([
            'project_id' => $project->id
        ]);
        $feature  = Feature::factory()->create(['lead_id' => $lead->id]);

        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->post('/api/lead/messages/create', [
                'message' => "",
                'user_id' => $user->id,
                'lead_id' => $lead->id
            ])

            ->assertJson([
                'errors' => [
                    'message' => [
                        'Le champ message est obligatoire.'
                    ]
                ]
            ]);
    }
    public function test_store_feature_conversation_message()
    {

        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $project = Project::factory()->create();
        $lead = Lead::factory()->create([
            'project_id' => $project->id
        ]);
        $feature  = Feature::factory()->create(['lead_id' => $lead->id]);

        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->post('/api/lead/messages/create', [
                'message' => Str::random(50),
                'user_id' => $user->id,
                'lead_id' => $lead->id
            ])->assertStatus(201);
    }


    public function test_list_lead_conversation_success()
    {

        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $project = Project::factory()->create();
        $lead = Lead::factory()->create([
            'project_id' => $project->id
        ]);
        $lead->messages()->create([
            'message' => Str::random(20),
            'user_id' => $user->id
        ]);

        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->get('/api/lead/' . $lead->slug . '/messages')

            ->assertStatus(200);
    }
}
