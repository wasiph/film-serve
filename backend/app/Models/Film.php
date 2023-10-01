<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Film extends Model
{
    use HasFactory, Searchable;
    protected $fillable = ['name', 'description', 'release_date','ticket_price','country','genre','photo'];

    public function toSearchableArray()
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'genre' => $this->genre,
            'country' => $this->country,
        ];
    }
}
