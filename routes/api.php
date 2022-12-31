<?php

use Illuminate\Http\Request;
use App\Models\FeatureDelivery;
use App\Models\FeatureConversation;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InviteController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\FeaturesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\StripeAccountController;
use App\Http\Controllers\ValidationController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ProjectArchiveController;
use App\Http\Controllers\FeatureDeliveryController;
use App\Http\Controllers\LeadConversationController;
use App\Http\Controllers\FeatureConversationController;

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

Route::middleware(['jwt.verify'])->group(function ($router) {

    Route::get('me', [AuthController::class, 'me'])->name('auth.me');
    Route::post('refresh', [AuthController::class, 'refresh'])->name('auth.refresh');







    Route::post('projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('projects/user/{id}', [ProjectController::class, 'showByUserId'])->name('projects.showByUserId');
    Route::get('projects/client/{id}', [ProjectController::class, 'showByCientId'])->name('projects.showByCientId');
    Route::get('projects/{slug}', [ProjectController::class, 'showBySlug'])->name('projects.showBySlug');
    Route::get('projects/show/{id}', [ProjectController::class, 'show'])->name('projects.show');

    Route::get('leads/project/{id}', [LeadController::class, 'showByProjectId'])->name('leads.showByProjectId');
    Route::post('leads', [LeadController::class, 'store'])->name('leads.store');
    Route::get('leads/{slug}', [LeadController::class, 'showByLeadSlug'])->name('leads.showByLeadSlug');

    //Lead conversation

    Route::post('lead/messages/create', [LeadConversationController::class, 'handleStoreMessage']);
    Route::get('lead/{slug}/messages', [LeadConversationController::class, 'handleGetLeadConversation']);


    Route::get('features/lead/{id}', [FeaturesController::class, 'showByLeadId'])->name('features.showByLeadId');
    Route::post('features', [FeaturesController::class, 'store'])->name('features.store');
    Route::put('features/validation/2/{id}', [ValidationController::class, 'updateStepTwo'])->name('features.updateStepTwo');
    Route::put('features/validation/3/{id}', [ValidationController::class, 'updateStepthree'])->name('features.updateStepTwo');
    Route::put('features/validation/4/{id}', [ValidationController::class, 'updateStepfour'])->name('features.updateStepfour');
    Route::put('features/unvalidation/3/{id}', [ValidationController::class, 'downSteptwo'])->name('features.downSteptwo');
    Route::put('features/validation/6/{id}', [ValidationController::class, 'handleRejectStep']);

    //feature delivery
    Route::post('feature/{id}/link/import', [FeatureDeliveryController::class, 'handleImportLink']);
    Route::post('feature/{id}/file/import', [FeatureDeliveryController::class, 'handleImportFile']);
    Route::post('feature/{id}/nullable/import', [FeatureDeliveryController::class, 'handleImportNullableFile']);
    Route::get('feature/{id}/delivery', [FeatureDeliveryController::class, 'handleGetDelivery']);
    Route::get('feature/{id}/file/download', [FeatureDeliveryController::class, 'handleDownloadFile']);

    Route::post('invites/send/{projectId}', [InviteController::class, 'sendInvitation'])->name('invites.send');
    Route::get('invites/get/{email}', [InviteController::class, 'getInvitations'])->name('invites.get');
    Route::get('invites/accept/{token}', [InviteController::class, 'acceptInvitation'])->name('invites.accept');
    Route::delete('invites/reject/{token}', [InviteController::class, 'handleRejectInvitation']);

    Route::put('user/{id}', [AuthController::class, 'updateUser'])->name('user.updateUser');
    Route::put('user/password/update', [AuthController::class, 'updatePassword'])->name('user.updatePassword');

    //archive
    Route::get('user/projects/archived', [ProjectArchiveController::class, 'handleGetArchivedProjects']);
    Route::post('user/project/{id}/archive', [ProjectArchiveController::class, 'handleArchiveProject']);
    Route::delete('user/project/{id}/unarchive', [ProjectArchiveController::class, 'handleUnarchiveProject']);

    // Stripe
    Route::get('stripe/check/{type}', [StripeAccountController::class, 'check'])->name('stripe.check');
    Route::post('stripe/create', [StripeAccountController::class, 'createAccount'])->name('stripe.account.create');
    Route::put('stripe/validate', [StripeAccountController::class, 'validateAccount'])->name('stripe.account.validate');
    Route::post('stripe/payment', [StripeAccountController::class, 'makePayment'])->name('stripe.account.payment');

    Route::get('payments', [PaymentController::class, 'index'])->name('payment.index');
});

Route::get('dashboard', [AuthController::class, 'dashboard'])->middleware('auth:sanctum');
Route::post('login', [AuthController::class, 'login'])->name('auth.login');
Route::post('register', [RegistrationController::class, 'register'])->name('auth.register');
Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout');
Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::post('password/reset', [ForgotPasswordController::class, 'reset'])->name('password.reset');
Route::get('email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
Route::get('email/verify/resend', [VerificationController::class, 'resend'])->name('verification.resend');
//public profile
Route::get('user/{id}', [UserController::class, 'handleGetUserDetails']);
Route::get('user/{id}/projects', [UserController::class, 'handleGetUserProjects']);
