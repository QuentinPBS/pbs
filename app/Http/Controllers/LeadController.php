<?php

namespace App\Http\Controllers;

use App\Actions\Lead\ShowLeadByProjectIdAction;
use App\Actions\Lead\ShowLeadBySlugAction;
use App\Actions\Lead\StoreLeadAction;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->middleware('auth:api');
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
    public function store(Request $request, StoreLeadAction $storeLeadAction)
    {
        $lead = $storeLeadAction->execute($request, auth()->id(), $request->project_id, 1, 1);

        $response = [
            'message' => 'Lead created successfully',
            'lead' => $lead
        ];

        return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function showByProjectId($projectId, ShowLeadByProjectIdAction $showLeadByProjectIdAction)
    {
        $leads = $showLeadByProjectIdAction->execute($projectId);
        dd($leads);
        return response()->json($leads, 200);
    }

    /**
     * Show the form for editing the specified resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showByLeadSlug($leadSlug, ShowLeadBySlugAction $showLeadBySlugAction)
    {
        $lead = $showLeadBySlugAction->execute($leadSlug);
       
        return response()->json($lead, 200);
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
