<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\Payment;
use App\Models\Project;
use App\Models\Feature;
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

        if ($request->type && $request->type == 'customer') {
            $customer = $stripe->customers->create([
               'email'    =>  auth()->user()->email,
               'metadata' => [
                   'payByStepId' => auth()->id()
               ]
            ]);
            $saccount = StripeAccount::create([
                'user_id'    => auth()->id(),
                'account_id' => $customer->id,
                'status'     => 'pending',
                'type'       => request('type')
            ]);
            $session = $stripe->checkout->sessions->create([
                'payment_method_types' => ['card'],
                'mode'                 => 'setup',
                'customer'             => $customer->id,
                'locale'               => config('app.locale'),
                'metadata'             => [
                    'userId' => auth()->id(),
                    'type'   => request('type')
                ],
                'success_url'          => config('app.url') . "/stripe/callback/{$saccount->account_id}?pid={$project->id}&lid={$lead->id}&session_id={CHECKOUT_SESSION_ID}",
                'cancel_url'           => config('app.url') . "/project/{$project->slug}/{$lead->slug}"
            ]);
            DB::commit();
            return response()->json([
                'url' => $session->url
            ], 201);
        }
        else {
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
        }

        return response()->json([
            'status' => 'Error'
        ], 400);
    }

    public function validateAccount(Request $request)
    {
        $account = StripeAccount::where('account_id', request('accountId'))->where('user_id', auth()->id())->firstOrFail();
        $stripe = new \Stripe\StripeClient(config('services.stripe.secret'));

        if ($account->type == 'customer') {
            $sa = $stripe->checkout->sessions->retrieve(
                $request->sessionId,
                ['expand' => ['customer', 'setup_intent']]
            );
            $account->payment_method_id = $sa->setup_intent->payment_method;
            $account->status = 'success';
            $account->save();
            return response()->json([
                'account' => $account
            ], 200);
        }
        else {
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

    public function makePayment(Request $request)
    {
        $customerAccount = StripeAccount::where('status', 'success')->where('user_id', auth()->id())->firstOrFail();
        $feature = Feature::where('id', (int) request('feature_id'))->firstOrFail();
        $prestaAccount = StripeAccount::where('status', 'success')->where('user_id', $feature->user_id)->firstOrFail();

        $payment = Payment::create([
            'project_id'  => $feature->lead->project_id,
            'lead_id'     => $feature->lead->id,
            'feature_id'  => $feature->id,
            'owner_id'    => $feature->user_id,
            'customer_id' => auth()->id(),
            'amount'      => $feature->price,
        ]);

        $stripe = new \Stripe\StripeClient(config('services.stripe.secret'));

        try {
            $paymentIntent = $stripe->paymentIntents->create([
                'amount'                 => $feature->price * 100,
                'application_fee_amount' => ($feature->price * 0.6),
                'currency'               => 'EUR',
                'payment_method_types'   => ['card'],
                'confirm'                => true,
                'customer'               => $customerAccount->account_id,
                'on_behalf_of'           => $prestaAccount->account_id,
                'description'            => "Paiement pour {$feature->name}",
                'transfer_data'          => [
                    'destination' => $prestaAccount->account_id
                ],
                'metadata'               => [
                    'featureId' => $feature->id,
                    'leadId'    => $feature->lead_id,
                    'paymentId' => $payment->id
                ],
                'off_session'            => true,
                'payment_method'         => $customerAccount->payment_method_id
            ]);
        } catch (\Exception $e) {
            report($e);
            $payment->status = 'failed';
            $payment->save();
            return response()->json([
                'code' => 'error',
                'message' => $e->getMessage()
            ], 200);
        }

        $payment->payment_intent_id = $paymentIntent->id;
        $payment->status = 'success';
        $payment->save();

        $feature->validation_id = 7;
        $feature->save();

        return response()->json([
            'code' => 'success',
        ], 200);
    }
}
