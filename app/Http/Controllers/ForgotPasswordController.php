<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $credentials = $request->validate(['email' => 'required|email']);
      
        Password::sendResetLink($credentials);

        return $this->respondWithMessage('Password reset link has been sent to your email.');
    }

    public function reset(ResetPasswordRequest $request)
    {

        $email_password_status = Password::reset($request->validated(), function ($user, $password) {
            $user->password = Hash::make($password);
            $user->save();
        });

        if ($email_password_status == Password::INVALID_TOKEN) {
            return $this->respondBadRequest(255);
        }

        return $this->respondWithMessage('Password has been reset.');
    }
}
