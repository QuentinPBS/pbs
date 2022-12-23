<?php

namespace App\Exports;

use Carbon\Carbon;
use App\Models\Lead;
use App\Models\User;
use App\Models\Feature;
use App\Models\Project;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\FromCollection;

class ReportExport implements FromView
{
    public function view(): View
    {
        $currentMonth = date('m');

        $usersReport = DB::table('users')
            ->selectRaw('count(case when  exists (select * from lead_user where lead_user.user_id = users.id) then 1 end) as clients')
            ->selectRaw('count(case when exists (select * from lead_user where lead_user.user_id = users.id) and MONTH(last_login_at) =' . $currentMonth . ' then 1 end) as activeClients')
            ->selectRaw('count(case when exists (select * from projects where projects.user_id = users.id) then 1 end) as freelancers')
            ->selectRaw('count(case when exists (select * from projects where projects.user_id = users.id) and MONTH(last_login_at) =' . $currentMonth . ' then 1 end) as activeFreelancers')
            ->first();

        $projectsReport = DB::table('projects')
            ->selectRaw('count(*) as total')
            ->selectRaw('count(case when  MONTH(created_at) =' . $currentMonth . ' then 1 end) as activeProjects')
            ->first();

        $leadsReport = DB::table('leads')
            ->selectRaw('count(*) as total')
            ->selectRaw('count(case when  MONTH(created_at) =' . $currentMonth . ' then 1 end) as activeLeads')
            ->first();

        $featuresReport = DB::table('features')
            ->selectRaw('count(*) as total')
            ->selectRaw('count(case when  MONTH(created_at) =' . $currentMonth . ' then 1 end) as activeFeatures')
            ->first();

        return view('exports.reportExport', [
            'usersReport' => $usersReport,
            'projectsReport' => $projectsReport,
            'leadsReport' => $leadsReport,
            'featuresReport' => $featuresReport
        ]);
    }
}
