<table>
    <thead>
        <tr>
            <th colspan="4">
                Report Attendance
            </th>
        </tr>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Type Attendance</th>
            <th>User</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($data as $d)
            <tr>
                <td>{{ $d['date'] }}</td>
                <td>{{ $d['time'] }}</td>
                <td>{{ $d['type_attendance'] }}</td>
                <td>{{ $d['user'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
