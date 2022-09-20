<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{
    public function register(AuthRegisterRequest $request)
    {
        User::create($request->getAttributes())->sendEmailVerificationNotification();

        return $this->respondWithMessage('User created successfully.');
    }
}
