<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\Project;
use App\Models\StripeAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StripeAccountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function check(Request $request, string $type)
    {
        $exists = StripeAccount::where('user_id', auth()->id())->where('type', strip_tags($type))->where('status', 'success')->exists();

        return response()->json([
            'exists' => $exists
        ], 201);
    }

    public function createAccount(Request $request)
    {
        $project = Project::findOrFail((int) request('project_id'));
        $lead    = Lead::where('project_id', $project->id)->where('id', (int) request('lead_id'))->firstOrFail();

        $stripe = new \Stripe\StripeClient(config('services.stripe.secret'));

        DB::beginTransaction();

        $account = $stripe->accounts->create([
            'type'         => 'express',
            'country'      => 'FR',
            'email'        => auth()->user()->email,
            'capabilities' => [
                'card_payments' => ['requested' => true],
                'transfers'     => ['requested' => true],
            ],
            'metadata'     => [
                'userId' => auth()->id(),
                'type'   => request('type')
            ]
        ]);

        if ($account->id) {
            StripeAccount::create([
                'user_id'    => auth()->id(),
                'account_id' => $account->id,
                'status'     => 'pending',
                'type'       => request('type')
            ]);
            $accountLinks = $stripe->accountLinks->create(
                [
                    'account'     => $account->id,
                    'refresh_url' => config('app.url') . "/project/{$project->slug}/{$lead->slug}",
                    'return_url'  => config('app.url') . "/stripe/callback/{$account->id}?pid={$project->id}&lid={$lead->id}",
                    'type'        => 'account_onboarding'
                ]
            );

            DB::commit();

            return response()->json([
                'url' => $accountLinks->url
            ], 201);
        }

        Db::rollBack();

        return response()->json([
            'status' => 'Error'
        ], 400);
    }

    public function validateAccount(Request $request)
    {
        $account = StripeAccount::where('account_id', request('accountId'))->where('user_id', auth()->id())->firstOrFail();
        $stripe = new \Stripe\StripeClient(config('services.stripe.secret'));
        $stripeAccount = $stripe->accounts->retrieve(
            $account->account_id,
            []
        );
        if ($stripeAccount->details_submitted) {
            $account->status = 'success';
            $account->save();
            return response()->json([
                'account' => $account
            ], 200);
        }
        return response()->json([
            'account' => $account
        ], 200);
    }
}
