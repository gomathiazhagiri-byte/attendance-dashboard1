import React from "react";

function AttendanceStats({ attendance, totalStudents }) {
  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const percentage =
    totalStudents > 0
      ? ((presentCount / totalStudents) * 100).toFixed(2)
      : 0;

  return (
    <div className="card">
      <h2>Attendance Statistics</h2>

      <p>Total Students: {totalStudents}</p>
      <p>Present Students: {presentCount}</p>
      <p>Attendance Percentage: {percentage}%</p>
    </div>
  );
}

export default AttendanceStats;