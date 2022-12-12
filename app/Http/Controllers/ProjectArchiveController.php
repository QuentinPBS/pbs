<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectArchiveController extends Controller
{
    public function handleGetArchivedProjects(Request  $request)
    {
        $projects = Project::query()
            ->whereHas('archives', fn ($q) => $q->where('user_id', auth()->id()))
            ->paginate(10);

        return response()->json([
            'projects' => $projects
        ]);
    }
    public function handleArchiveProject(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id'
        ]);

        DB::table('project_archived')->insert([
            'user_id' => $validatedData['user_id'],
            'project_id' => $validatedData['project_id']
        ]);

        return response()->json([
            'status' => true
        ], 201);
    }

    public function handleUnarchiveProject(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id'
        ]);

        $checkArchive = DB::table('project_archived')
            ->where('project_id', $validatedData['project_id'])
            ->where('user_id', $validatedData['user_id'])
            ->first();
        if (!$checkArchive) {
            return response()->json([
                'status' => false
            ], 404);
        }

        DB::table('project_archived')
            ->where('project_id', $validatedData['project_id'])
            ->where('user_id', $validatedData['user_id'])
            ->delete();

        return response()->json([
            'status' => true
        ], 200);
    }
}
