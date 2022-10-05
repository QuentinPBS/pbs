<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Share;
use App\Models\Validation;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'user_id' => User::factory()->create()->id,
            'validation_id' => Validation::first()->id,
            'share_id' => Share::first()->id
        ];
    }
}
