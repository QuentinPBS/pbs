<?php

namespace Tests\Feature;

use App\Models\Feature;
use App\Models\Lead;
use App\Models\Project;
use Tests\TestCase;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FeatureTest extends TestCase
{
    use RefreshDatabase;
    public function test_success_reject_feature()
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $project = Project::factory()->create();
        $lead = Lead::factory()->create(['project_id' => $project->id]);

        $feature = Feature::factory()->create([
            'lead_id' => $lead->id
        ]);
        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->put('/api/features/validation/6/' . $feature->id, [])->assertStatus(200);
    }
}
