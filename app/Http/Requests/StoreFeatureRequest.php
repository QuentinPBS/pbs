<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFeatureRequest extends FormRequest
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
            'devis_id' => 'required|exists:leads,id',
            'name'     => 'required|max:255',
            'price'    => 'required|numeric',
            'deadline' => 'nullable|date'
        ];
    }
}
