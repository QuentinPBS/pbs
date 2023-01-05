<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\AuthLoginRequest;
use App\Http\Requests\AuthRegisterRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Actions\User\UpdateLastLoginAtAction;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Register a new user.
     *
     * @param AuthRegisterRequest $request
     * @return JsonResponse
     */
    public function register(AuthRegisterRequest $request): JsonResponse
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ])->sendEmailVerificationNotification();

        $response = [
            'message' => 'User created successfully',
            'user' => $user
        ];

        return response()->json($response, 201);
    }

    /**
     * Login a user.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(AuthLoginRequest $request, UpdateLastLoginAtAction $action): JsonResponse
    {
        $credentials = $request->validated();
        if (!$token = auth()->attempt($credentials)) {
            return $this->respondUnAuthenticate(251);
        }
        //update user last login
        $action->execute();
        return $this->respondWithToken($token);
    }

    public function respondWithToken($token)
    {

        return $this->respond([
            'token' => $token,
            'access_type' => 'Bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    }

    /**
     * Logout a user.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        auth()->logout();

        $response = [
            'message' => 'User logged out successfully'
        ];

        return $this->respondWithMessage('User logged out successfully');
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function me()
    {
        return $this->respond(auth()->user());
    }

    /**
     * Verify email user.
     */
    public function verify(EmailVerificationRequest $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'User already verified'
            ], 200);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        $response = [
            'message' => 'User verified successfully'
        ];

        return response()->json($response, 200);
    }

    public function updateUser(UpdateUserRequest $request)
    {
       
        $validatedData = $request->validated();
        $user = auth()->user();
        $user->update($validatedData);
        return $this->respond($user);
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        $validatedData = $request->validated();
        $user = auth()->user();
        $user->password = Hash::make($validatedData['password']);
        $user->update();
        return $this->respond($user);
    }
}
