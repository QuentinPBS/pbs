<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeatureDeliveryLinkRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [


            'type' => 'required|in:1',
            'link' => 'required|url',
            'feature_id' => 'required|exists:features,id',
            'user_id' => 'required|exists:users,id',

        ];
    }

    protected function prepareForValidation()
    {


        $this->mergeIfMissing(['feature_id' => $this->id]);
    }
}
