<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeatureDeliveryNullableRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => 'required|in:3',
            'file' => 'nullable',
            'feature_id' => 'required|exists:features,id',
            'user_id' => 'required|exists:users,id',
        ];
    }

    protected function prepareForValidation()
    {


        $this->mergeIfMissing(['feature_id' => $this->id]);
    }
}
