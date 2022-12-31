<?php

use App\Exports\ReportExport;
use Illuminate\Http\Response;
use App\Cron\ProcessReportExcel;
use App\Mail\SendValidationMail;
use App\Mail\ProcessReportExcelMail;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
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
