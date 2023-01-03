<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LanguageController extends Controller
{
    public function handleSetLanguage(Request $request)
    {
        $validatedData = $request->validate([
            'lang' => 'required|in:en,fr'
        ]);
        dd($request->headers);

        App::setLocale($validatedData['lang']);
        return response()->json(['status' => true], 200);
    }
}
