<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function verify($userId, Request $request)
    {
        if (!$request->hasValidSignature()) {
            return $this->respondBadRequest(253);
        }

        $user = User::findOrFail($userId);

        if (! $user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return redirect()->to('/');
    }

    public function resend(Request $request)
    {
        if (auth()->user()->hasVerifiedEmail()) {
            return $this->respondBadRequest(254);
        }

        auth()->user()->sendEmailVerificationNotification();

        return $this->respondWithMessage('Verification email sent.');
    }
}
