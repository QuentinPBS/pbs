<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectTest extends TestCase
{
    use RefreshDatabase;

    public function test_create_project_success()
    {

        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        Storage::fake('projects');
        $file = UploadedFile::fake()->image('avatar.jpg');
        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->post('/api/projects', [
                'name' => Str::random(5),
                'description' => Str::random(10),
                'image' => $file,
            ])->assertStatus(201);
    }

    public function test_create_project_error_missing_name()
    {

        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        Storage::fake('projects');
        $file = UploadedFile::fake()->image('avatar.jpg');
        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])
            ->post('/api/projects', [
                'name' => null,
                'description' => Str::random(10),
                'image' => $file,
            ])
            ->assertJson([
                'errors' => [
                    'name' => [
                        'Le champ name est obligatoire.'
                    ]
                ]
            ]);
    }
}
