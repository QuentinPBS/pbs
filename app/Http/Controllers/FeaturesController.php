<?php

namespace App\Http\Controllers;

use App\Actions\Feature\ShowFeatureByLeadIdAction;
use App\Actions\Feature\ShowFeatureBySlugAction;
use App\Actions\Feature\StoreFeatureAction;
use App\Actions\Lead\StoreLeadAction;
use Illuminate\Http\Request;

class FeaturesController extends Controller
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
    public function store(Request $request, StoreFeatureAction $storeFeatureAction)
    {
        $feature = $storeFeatureAction->execute($request, auth()->id(), 1);

        $response = [
            'message' => 'Feature created successfully',
            'feature' => $feature
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

    public function showByLeadId($leadId, ShowFeatureByLeadIdAction $showFeatureByLeadIdAction)
    {
        $features = $showFeatureByLeadIdAction->execute($leadId);
        return response()->json($features, 200);
    }

    public function showBySlug($slug, ShowFeatureBySlugAction $showFeatureBySlugAction)
    {
        $feature = $showFeatureBySlugAction->execute($slug);

        return response()->json($feature, 200);
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
