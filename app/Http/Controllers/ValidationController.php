<?php

namespace App\Http\Controllers;

use App\Mail\SendValidationMail;
use App\Models\Feature;
use App\Models\Lead;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ValidationController extends Controller
{
    /**
     * update feature
     *
     * @param Request $request
     * @param [type] $featureId
     * @return void
     */
    public function updateStepTwo(Request $request, $featureId)
    {
        $feature = Feature::find($featureId);
        $lead = Lead::find($feature->lead_id);
        $members = Member::where('project_id', $lead->project_id)->with(['user'])->get();


        if (!$feature) return response()->json(['error' => 'Feature not found']);

        $feature->update([
            'validation_id' => 2,
        ]);

        foreach ($members as $member) {
            if (auth()->user()->email !== $member->user->email) Mail::to($member->user->email)->send(new SendValidationMail());
        };

        return response()->json(['success' => 'Feature updated successfully']);
    }

    public function updateStepthree(Request $request, $featureId)
    {
        $feature = Feature::find($featureId);
        $lead = Lead::find($feature->lead_id);
        $members = Member::where('project_id', $lead->project_id)->with(['user'])->get();
        if (!$feature) return response()->json(['error' => 'Feature not found']);

        $feature->update([
            'validation_id' => 4,
        ]);

        foreach ($members as $member) {
            if (auth()->user()->email !== $member->user->email) Mail::to($member->user->email)->send(new SendValidationMail());
        };

        return response()->json(['success' => 'Feature updated successfully']);
    }

    public function updateStepfour(Request $request, $featureId)
    {
        $feature = Feature::find($featureId);
        $lead = Lead::find($feature->lead_id);
        $members = Member::where('project_id', $lead->project_id)->with(['user'])->get();
        if (!$feature) return response()->json(['error' => 'Feature not found']);

        $feature->update([
            'validation_id' => 5,
        ]);

        foreach ($members as $member) {
            if (auth()->user()->email !== $member->user->email) Mail::to($member->user->email)->send(new SendValidationMail());
        };

        return response()->json(['success' => 'Feature updated successfully']);
    }

    public function downSteptwo(Request $request, $featureId)
    {
        $feature = Feature::find($featureId);
        $lead = Lead::find($feature->lead_id);
        $members = Member::where('project_id', $lead->project_id)->with(['user'])->get();
        if (!$feature) return response()->json(['error' => 'Feature not found']);

        $feature->update([
            'validation_id' => 2,
        ]);

        foreach ($members as $member) {
            if (auth()->user()->email !== $member->user->email) Mail::to($member->user->email)->send(new SendValidationMail());
        };

        return response()->json(['success' => 'Feature updated successfully']);
    }

    public function handleRejectStep($id)
    {

        $checkFeature = Feature::find($id);
        if (!$checkFeature) {
            return response()->json(['status' => false], 404);
        }
        $checkFeature->update([
            'validation_id' => 6
        ]);
        return response()->json(['status' => true], 200);
    }
}
