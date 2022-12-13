<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectArchivesTest extends TestCase
{
    use RefreshDatabase;

    public function test_list_archived_projects()
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $project = Project::factory()->create();
        $user->archives()->attach([
            'project_id' => $project->id
        ]);

        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->get('/api/user/projects/archived')
            ->assertStatus(200);
    }

    // public function test_archive_project_to_user_error()
    // {
    //     $user = User::factory()->create();
    //     $token = JWTAuth::fromUser($user);

    //     $project = Project::factory()->create();


    //     $this->withHeaders([
    //         'Authorization' => 'Bearer ' . $token,
    //         'Accept' => 'application/json'
    //     ])
    //         ->post('/api/user/project/' . $project->id . '/archive', [

    //             'user_id' => $user->id,
    //             'project_id' => INF
    //         ])->assertStatus(422);
    // }
    // public function test_archive_project_to_user_success()
    // {
    //     $user = User::factory()->create();
    //     $token = JWTAuth::fromUser($user);

    //     $project = Project::factory()->create();


    //     $this->withHeaders([
    //         'Authorization' => 'Bearer ' . $token,
    //         'Accept' => 'application/json'
    //     ])
    //         ->post('/api/user/project/' . $project->id . '/archive', [

    //             'user_id' => $user->id,
    //             'project_id' => $project->id
    //         ])->assertStatus(201);
    // }

    // public function test_unarchive_project_to_user_success()
    // {
    //     $user = User::factory()->create();
    //     $token = JWTAuth::fromUser($user);

    //     $project = Project::factory()->create();
    //     $project->archives()->attach($user->id);

    //     $this->withHeaders([
    //         'Authorization' => 'Bearer ' . $token,
    //         'Accept' => 'application/json'
    //     ])
    //         ->delete('/api/user/project/' . $project->id . '/unarchive', [

    //             'user_id' => $user->id,
    //             'project_id' => $project->id
    //         ])->assertStatus(200);
    // }
}
