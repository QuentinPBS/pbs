<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
    {
        $payments = Payment::where('owner_id', auth()->id())
            ->orWhere('customer_id', auth()->id())
            ->with('project', 'lead', 'feature')
            ->latest()
            ->get();

        return response()->json($payments);
    }
}
