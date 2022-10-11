<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Lead;
use App\Models\User;
use App\Models\Feature;
use App\Models\Project;
use Illuminate\Http\UploadedFile;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FeatureDeliveryTest extends TestCase
{
    use RefreshDatabase;
    // public function test_success_feature_delivery_link_test()
    // {
    //     $user = User::factory()->create();
    //     $token = JWTAuth::fromUser($user);

    //     $project = Project::factory()->create();
    //     $lead = Lead::factory()->create(['project_id' => $project->id]);
    //     $feature = Feature::factory()->create([
    //         'lead_id' => $lead->id
    //     ]);

    //     $this->withHeaders([
    //         'Authorization' => 'Bearer ' . $token,
    //         'Accept' => 'application/json'
    //     ])
    //         ->post('/api/feature/' . $feature->id . '/link/import', [


    //             'type' => 1,
    //             'link' => 'https://www.google.com/',
    //             'user_id' => $user->id
    //         ])
    //         ->assertStatus(201);
    // }


    public function test_success_feature_delivery_file_test()
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $project = Project::factory()->create();
        $lead = Lead::factory()->create(['project_id' => $project->id]);
        $feature = Feature::factory()->create([
            'lead_id' => $lead->id
        ]);
        Storage::fake('projects');
        $file = UploadedFile::fake()->image('avatar.jpg');
        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->post('/api/feature/' . $feature->id . '/file/import', [
                'type' => 2,
                'file' => $file,
                'user_id' => $user->id
            ])
            ->assertStatus(201);
    }
}
