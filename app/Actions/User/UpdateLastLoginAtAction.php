<?php

namespace App\Actions\User;

use Carbon\Carbon;
use App\Models\Feature;
use Illuminate\Support\Facades\Auth;

class UpdateLastLoginAtAction
{
    /**
     * @var Feature
     */
    public function execute()
    {

        Auth::user()->update([
            'last_login_at' => Carbon::now()
        ]);
    }
}
