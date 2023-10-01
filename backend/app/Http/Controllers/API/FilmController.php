<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Film;
use Illuminate\Http\Request;
use App\Http\Resources\FilmResource;
use Validator;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $films = Film::all();
        return response(['films' => FilmResource::collection($films)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|max:255',
            'description' => 'required|max:255',
            'release_date' => 'required|max:255',
            'ticket_price' => 'required|max:255',
            'country' => 'required|max:255',
            'genre' => 'required|max:255',
            'photo'=> 'max:255'

        ]);

        if($validator->fails()){
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $film = Film::create($data);

        return response(['film' => new FilmResource($film), 'message' => 'Film created successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Film $film)
    {
        return response(['film' => new FilmResource($film)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Film $film)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|max:255',
            'description' => 'required|max:255',
            'release_date' => 'required|max:255',
            'ticket_price' => 'required|max:255',
            'country' => 'required|max:255',
            'genre' => 'required|max:255',
            'photo'=> 'max:255'
        ]);

        if($validator->fails()){
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $film->update($data);

        return response(['film' => new FilmResource($film), 'message' => 'Film updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Film $film)
    {
        $film->delete();

        return response(['message' => 'Film deleted successfully']);
    }
}
