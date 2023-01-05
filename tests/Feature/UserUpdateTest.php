<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserUpdateTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_update_user_profile_success()
    {
$this->withoutExceptionHandling();
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/json'
        ])->put('/api/user/' . $user->id, [
            'status' => 'individual',
            'firstname' => Str::random(10),
            'lastname' => Str::random(100),
            'area' => null,
            'siren' => null
        ])

            ->assertStatus(200);
    }
}
