import React from "react";

function AttendanceTable({ students, attendance }) {
  return (
    <div className="card">
      <h2>Attendance Records</h2>

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
              <td>{attendance[student.id] || "Absent"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;