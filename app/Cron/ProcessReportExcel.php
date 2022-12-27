<?php

namespace App\Cron;

use App\Exports\ReportExport;

use App\Mail\ProcessReportExcelMail;

use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class ProcessReportExcel
{

    public function __invoke()
    {
        $fileName = config('report.filename');
        $emailTo = config('report.email');

        Excel::store(new ReportExport, $fileName);
        Mail::to($emailTo)->send(new ProcessReportExcelMail($fileName));
        Storage::delete($fileName);
    }
}
