<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRegisterRequest;
use App\Jobs\EmailVerification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{
    public function register(AuthRegisterRequest $request)
    {
        $user = User::create($request->getAttributes());
        EmailVerification::dispatch($user);
        return $this->respondWithMessage('User created successfully.');
    }
}
