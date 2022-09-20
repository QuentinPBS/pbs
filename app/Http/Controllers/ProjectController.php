<?php

namespace App\Http\Controllers;

use App\Actions\Project\ShowProjectByCreatorAction;
use App\Actions\Project\ShowProjectById;
use App\Actions\Project\ShowProjectBySlugAction;
use App\Actions\Project\ShowProjectByUserIdAction;
use App\Actions\Project\StoreAdminProjectMemberAction;
use App\Actions\Project\StoreMemberAction;
use App\Actions\Project\StoreProjectAction;
use App\Http\Requests\ProjectStoreRequest;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectStoreRequest $request, StoreProjectAction $storeProjectAction, StoreMemberAction $storeMemberAction, StoreAdminProjectMemberAction $storeAdminProjectMemberAction)
    {
        $project = $storeProjectAction->execute($request, auth()->id());
        $storeMemberAction->execute(auth()->id(), $project->id, 1);

        $storeAdminProjectMemberAction->execute($project->id);

        $response = [
            'message' => 'Project created successfully',
            'project' => $project
        ];

        return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, ShowProjectById $showProjectById)
    {
        $project = $showProjectById->execute($id);
        return response()->json($project, 200);
    }

    public function showBySlug($slug, ShowProjectBySlugAction $showProjectBySlugAction)
    {
        $project = $showProjectBySlugAction->execute($slug);
        return response()->json($project, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showByUserId($id, ShowProjectByUserIdAction $showProjectByUserIdAction)
    {
        $projects = $showProjectByUserIdAction->execute($id, 1);
        return response()->json($projects, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showByCientId($id, ShowProjectByUserIdAction $showProjectByUserIdAction)
    {
        $projects = $showProjectByUserIdAction->execute($id, 2);
        return response()->json($projects, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
