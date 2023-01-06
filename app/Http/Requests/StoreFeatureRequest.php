<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFeatureRequest extends FormRequest
{
    protected  $stopOnFirstFailure = true;

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
            'name' => 'required',
            'price' => 'bail|required|numeric|min:0',
            'deadline' => 'bail|required|date',
            'devis_id' => 'required|exists:leads,id'
        ];
    }

    public function attributes()
    {
        return [
            'name' => trans('pbs.step.name'),
            'price' => trans('pbs.step.price')
        ];
    }
}
