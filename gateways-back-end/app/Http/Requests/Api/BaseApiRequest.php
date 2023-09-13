<?php

namespace App\Http\Requests\Api;
use App\Traits\ResponseTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;


class BaseApiRequest extends FormRequest {
  use ResponseTrait;
  public function authorize() {
    return true;
  }

  protected function failedValidation(Validator $validator) {
    throw new HttpResponseException(response()->json([ 'key' => 'fail' ,'msg' => $validator->errors()->first() ], Response::HTTP_UNPROCESSABLE_ENTITY));
  }
}
