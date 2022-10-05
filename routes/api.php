<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeaturesController;
use App\Http\Controllers\ValidationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\InviteController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\VerificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['api'])->group(function($router) {
    Route::post('login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('refresh', [AuthController::class, 'refresh'])->name('auth.refresh');
    Route::get('me', [AuthController::class, 'me'])->name('auth.me');
    Route::post('register', [RegistrationController::class, 'register'])->name('auth.register');
    Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout');

    Route::get('email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::get('email/verify/resend', [VerificationController::class, 'resend'])->name('verification.resend');

    Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
    Route::post('password/reset', [ForgotPasswordController::class, 'reset'])->name('password.reset');

    Route::post('projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('projects/user/{id}', [ProjectController::class, 'showByUserId'])->name('projects.showByUserId');
    Route::get('projects/client/{id}', [ProjectController::class, 'showByCientId'])->name('projects.showByCientId');
    Route::get('projects/{slug}', [ProjectController::class, 'showBySlug'])->name('projects.showBySlug');
    Route::get('projects/show/{id}', [ProjectController::class, 'show'])->name('projects.show');

    Route::get('leads/project/{id}', [LeadController::class, 'showByProjectId'])->name('leads.showByProjectId');
    Route::post('leads', [LeadController::class, 'store'])->name('leads.store');
    Route::get('leads/{slug}', [LeadController::class, 'showByLeadSlug'])->name('leads.showByLeadSlug');

    Route::get('features/lead/{id}', [FeaturesController::class, 'showByLeadId'])->name('features.showByLeadId');
    Route::post('features', [FeaturesController::class, 'store'])->name('features.store');
    Route::put('features/validation/2/{id}', [ValidationController::class, 'updateStepTwo'])->name('features.updateStepTwo');
    Route::put('features/validation/3/{id}', [ValidationController::class, 'updateStepthree'])->name('features.updateStepTwo');
    Route::put('features/validation/4/{id}', [ValidationController::class, 'updateStepfour'])->name('features.updateStepfour');
    Route::put('features/unvalidation/3/{id}', [ValidationController::class, 'downSteptwo'])->name('features.downSteptwo');

    Route::post('invites/send/{projectId}', [InviteController::class, 'sendInvitation'])->name('invites.send');
    Route::get('invites/get/{email}', [InviteController::class, 'getInvitations'])->name('invites.get');
    Route::get('invites/accept/{token}', [InviteController::class, 'acceptInvitation'])->name('invites.accept');

    Route::put('user/{id}', [AuthController::class, 'updateUser'])->name('user.updateUser');
    Route::put('user/password/update', [AuthController::class, 'updatePassword'])->name('user.updatePassword');
});
Route::get('dashboard', [AuthController::class, 'dashboard'])->middleware('auth:sanctum');