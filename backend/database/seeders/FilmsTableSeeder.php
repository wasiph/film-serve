<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Film;

class FilmsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Film::create([
            'name' => 'Fast & the Furious',
            'description' => 'a car movie for FAMILY',
            'genre' => 'Action',
            'country' => 'USA',
            'ticket_price' => '125 USD',
            'release_date' => '2001-01-03',
            'photo' => 'someImage.jpeg'
        ]);
        Film::create([
            'name' => 'Childs Play',
            'description' => 'a horror doll movie',
            'genre' => 'Horror',
            'country' => 'USA',
            'ticket_price' => '125 USD',
            'release_date' => '1992-01-03',
            'photo' => 'someImage.jpeg'
        ]);
        Film::create([
            'name' => 'Mission Impossible',
            'description' => 'its an impossible mission',
            'genre' => 'Action',
            'country' => 'USA',
            'ticket_price' => '125 USD',
            'release_date' => '2000-01-03',
            'photo' => 'someImage.jpeg'
        ]);
        Film::create([
            'name' => 'Shrek',
            'description' => 'Ogres have layers',
            'genre' => 'Family',
            'country' => 'USA',
            'ticket_price' => '125 USD',
            'release_date' => '2002-01-03',
            'photo' => 'someImage.jpeg'
        ]);
    }
}
