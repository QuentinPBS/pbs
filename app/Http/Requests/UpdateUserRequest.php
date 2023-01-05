<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'status' => 'required|in:individual,professional',
            'lastname' => 'required|max:100',
            'firstname' => 'required|max:100',
            'area' => 'required_if:status,professional|max:100',
            'siren' => 'required_if:status,professional|max:100',
        ];
    }

    public function attributes()
    {
        return [
            'firstname' => trans('pbs.user.firstname'),
            'lastname' => trans('pbs.user.lastname'),
            'area' => trans('pbs.user.area'),
            'siren' => trans('pbs.user.siren'),
        ];
    }
}
