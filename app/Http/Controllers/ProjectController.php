<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Project;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Actions\Project\ShowProjectById;
use App\Actions\Project\StoreMemberAction;
use App\Http\Requests\ProjectStoreRequest;
use App\Actions\Project\StoreProjectAction;
use App\Actions\Project\ShowProjectBySlugAction;
use App\Actions\Project\ShowProjectByUserIdAction;
use App\Actions\Project\ShowProjectByCreatorAction;
use App\Actions\Project\StoreAdminProjectMemberAction;

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
    public function store(ProjectStoreRequest $request)
    {

        $validatedData = $request->validated();

        $file = $validatedData['image'];
        $path = null;
        if ($file) {

            $path = Storage::put('files', $file, 'public');
        }

        $newProject = Project::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            'image' => $path,
            'user_id' => auth()->id(),
        ]);

        // why saving static data..
        $members = [
            [

                'user_id' => auth()->id(),
                'role_id' => 1
            ]
        ];

        $newProject->members()->sync($members);


        $response = [
            'message' => 'Project created successfully',
            'project' => $newProject
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
    public function showByCientId($id)
    {
        //list projects for clients  (devis)
        $projects =  Project::query()
            ->whereHas(
                'leads',
                fn ($qLeads) =>
                $qLeads->whereHas('users', fn ($qUsers) => $qUsers->where('users.id', auth()->id()))
            )

            ->whereDoesntHave('archives')
            ->get();

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
