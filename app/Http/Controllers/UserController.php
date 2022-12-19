<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function handleGetUserDetails($id)
    {
        $checkUser = User::find($id);
        if (!$checkUser) {
            return response()->json(['status' => false], 404);
        }
        return response()->json(['status' => 'true', 'user' => $checkUser], 200);
    }

    public function handleGetUserProjects($id)
    {
        $projects = Project::query()
            ->whereHas('members', fn ($q) => $q->where('users.id', $id))
            ->paginate(10);

        return response()->json(['projects' => $projects], 200);
    }
}
