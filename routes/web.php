<?php

use App\Mail\SendValidationMail;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{any}', 'app')->where('any', '.*');
Route::get('test', function () {

    return Storage::disk('local')->download('files/0sEY0UdfflSMXke1Lr87Mkcg1jgMiNmPFlKP1Kom.jpg');



    Mail::to("rihaneatef@gmail.com")->send(new SendValidationMail());
    echo "done";
});
