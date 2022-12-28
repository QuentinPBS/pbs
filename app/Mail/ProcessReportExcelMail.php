<?php

namespace App\Mail;

use Attachment;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Queue\ShouldQueue;

class ProcessReportExcelMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $filename;
    public function __construct($filename)
    {
        $this->filename = $filename;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $file = Storage::get($this->filename);
        return $this->from('test@test.fr', config('mail.from.name'))
            ->subject('Extraction de la BD')

            ->attachData($file, 'extraction.xlsx', [
                'mime' => 'application/xlsx',
            ])
            ->view('extraction.reportExportMail');
    }

    // public function attachments()
    // {
    //     return [
    //         Attachment::fromStorage($this->filename),
    //     ];
    // }
}
