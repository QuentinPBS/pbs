<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\FeatureDelivery;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FeatureDeliveryFileRequest;
use App\Http\Requests\FeatureDeliveryLinkRequest;
use App\Http\Requests\FeatureDeliveryNullableRequest;

class FeatureDeliveryController extends Controller
{
    public function handleImportLink($id, FeatureDeliveryLinkRequest $request)
    {
        $validatedData = $request->validated();
        $feature = Feature::find($validatedData['feature_id']);
        FeatureDelivery::create($validatedData);
        // deliver file
        $feature->update([
            'validation_id' => Feature::DELIVERED
        ]);
        return response()->json([
            'status' => true
        ], 201);
    }

    public function handleImportFile($id, FeatureDeliveryFileRequest $request)
    {
        $validatedData = $request->validated();
        $file = $validatedData['file'];

        $path = Storage::put('deliveries', $file);
        $feature = Feature::find($validatedData['feature_id']);
        FeatureDelivery::create([
            'type' => FeatureDelivery::FILE,
            'link' => $path,
            'feature_id' => $validatedData['feature_id'],
            'user_id' => $validatedData['user_id']
        ]);
        // deliver file
        $feature->update([
            'validation_id' => Feature::DELIVERED
        ]);
        return response()->json([
            'status' => true
        ], 201);
    }

    public function handleImportNullableFile($id, FeatureDeliveryNullableRequest $request)
    {
        $validatedData = $request->validated();
        $feature = Feature::find($validatedData['feature_id']);
        FeatureDelivery::create([
            'type' => $validatedData['type'],
            'link' => $validatedData['file'],
            'feature_id' => $validatedData['feature_id'],
            'user_id' => $validatedData['user_id']
        ]);
        // deliver file
        $feature->update([
            'validation_id' => Feature::DELIVERED
        ]);
        return response()->json([
            'status' => true
        ], 201);
    }

    public function handleDownloadFile($id)
    {

        $checkFeature = Feature::find($id);
        if (!$checkFeature) {
            return response()->json([
                'status' => false
            ], 404);
        }

        return Storage::download($checkFeature->delivery->link);
    }


    public function handleGetDelivery($id)
    {
        $featureDelivery = FeatureDelivery::query()
            ->where('feature_id', $id)
            ->first();
        return response()->json([
            'status' => true,
            'featureDelivery' => $featureDelivery
        ], 200);
    }
}
