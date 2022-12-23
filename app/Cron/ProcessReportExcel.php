<?php

namespace App\Cron;

use App\Exports\ReportExport;

use App\Mail\ProcessReportExcelMail;

use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class ProcessReportExcel
{

    private $fileName = "reportExcel.xlsx";
    public function __invoke()
    {


        Excel::store(new ReportExport, $this->fileName);
        Mail::to("email@email.comI")->send(new ProcessReportExcelMail($this->fileName));
        Storage::delete($this->fileName);
    }
}
