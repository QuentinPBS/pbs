<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\FeatureDelivery;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FeatureDeliveryFileRequest;
use App\Http\Requests\FeatureDeliveryLinkRequest;

class FeatureDeliveryController extends Controller
{
    public function handleImportLink($id, FeatureDeliveryLinkRequest $request)
    {
        $validatedData = $request->validated();

        FeatureDelivery::create($validatedData);
        return response()->json([
            'status' => true
        ], 201);
    }

    public function handleImportFile($id, FeatureDeliveryFileRequest $request)
    {
        $validatedData = $request->validated();
        $file = $validatedData['file'];
        $fileName = time() . '_' . Str::random(5) . '.' . $file->extension();
        Storage::disk('local')->putFile('files', $file);
      
        FeatureDelivery::create([
            'type' => FeatureDelivery::FILE,
            'link' => $fileName,
            'feature_id' => $validatedData['feature_id'],
            'user_id' => $validatedData['user_id']
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
        return Storage::disk('local')->download('files/' . $checkFeature->delivery->link);
    }
}
