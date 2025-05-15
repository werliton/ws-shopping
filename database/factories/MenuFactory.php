<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Number;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menu>
 */
class MenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'active' => fake()->boolean(),
            'order' => fake()->randomDigit()
        ];
    }
}
