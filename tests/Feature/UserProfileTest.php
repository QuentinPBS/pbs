<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserProfileTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_user_info()
    {
        $user = User::factory()->create();
        $this->get('/api/user/' . $user->id)
            ->assertStatus(200);
    }


    public function test_get_user_project_info()
    {
        $user = User::factory()->create();
        $this->get('/api/user/' . $user->id . '/projects')
            ->assertStatus(200);
    }
}
