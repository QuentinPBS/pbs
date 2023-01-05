<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class AuthRegisterRequest extends FormRequest
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
            'status' => 'required|string|in:individual,professional',
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'password_confirmation' => 'required|same:password',
            'area' => 'required_if:status,professional|max:100',
            'siren' => 'required_if:status,professional|max:100',
        ];
    }

    public function getAttributes()
    {
        return array_merge(
            $this->only(['firstname', 'lastname', 'email', 'siren', 'status']),
            ['password' => Hash::make($this->get('password'))]
        );
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
