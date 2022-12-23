<table>

    <thead>

        <tr>
            <th>Nombre des clients total</th>
            <th>Nombre des clients actives</th>
            <th>Nombre des prestataires total</th>
            <th>Nombre des prestataires actives</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <td>{{ $usersReport->clients }}</td>
            <td>{{ $usersReport->activeClients }}</td>
            <td>{{ $usersReport->freelancers }}</td>
            <td>{{ $usersReport->activeFreelancers }}</td>
        </tr>

    </tbody>
</table>

<br>

<!-- Projects statistiques-->
<table>
    <thead>

        <tr>
            <th>Nombre des projets total</th>
            <th>Nombre des projets actives</th>

        </tr>
    </thead>
    <tbody>

        <tr>
            <td>{{ $projectsReport->total }}</td>
            <td>{{ $projectsReport->activeProjects }}</td>

        </tr>

    </tbody>
</table>



<br>

<!-- Devis statistiques-->
<table>
    <thead>

        <tr>
            <th>Nombre de devis total</th>
            <th>Nombre de devis actives</th>

        </tr>
    </thead>
    <tbody>

        <tr>
            <td>{{ $leadsReport->total }}</td>
            <td>{{ $leadsReport->activeLeads }}</td>

        </tr>

    </tbody>
</table>


<br>

<!-- etapes statistiques-->
<table>
    <thead>

        <tr>
            <th>Nombre des étapes total</th>
            <th>Nombre des étapes actives</th>

        </tr>
    </thead>
    <tbody>

        <tr>
            <td>{{ $featuresReport->total }}</td>
            <td>{{ $featuresReport->activeFeatures }}</td>

        </tr>

    </tbody>
</table>