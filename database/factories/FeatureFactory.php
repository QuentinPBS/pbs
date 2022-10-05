<?php

namespace Database\Factories;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Validation;
use Illuminate\Database\Eloquent\Factories\Factory;

class FeatureFactory extends Factory
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
            'price' => $this->faker->randomNumber(2),
            'deadline' => Carbon::now(),
            'user_id' => User::factory()->create()->id,
            'validation_id' => Validation::first()->id
        ];
    }
}
