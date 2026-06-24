import React from "react";

function AttendanceForm({ students, attendance, markAttendance }) {
  return (
    <div className="card">
      <h2>Mark Attendance</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.batch}</td>
              <td>
                <select
                  value={attendance[student.id] || "Absent"}
                  onChange={(e) =>
                    markAttendance(student.id, e.target.value)
                  }
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceForm;