import React, { useState } from "react";
import "./App.css";

import studentsData from "./data/students";
import AttendanceForm from "./components/AttendanceForm";
import BatchFilter from "./components/BatchFilter";
import DateFilter from "./components/DateFilter";
import AttendanceTable from "./components/AttendanceTable";
import AttendanceStats from "./components/AttendanceStats";

function App() {
  const [attendance, setAttendance] = useState({});
  const [selectedBatch, setSelectedBatch] = useState("All");

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // Mark attendance date-wise
  const markAttendance = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [selectedDate]: {
        ...(prev[selectedDate] || {}),
        [studentId]: status,
      },
    }));
  };

  // Batch-wise filter
  const filteredStudents =
    selectedBatch === "All"
      ? studentsData
      : studentsData.filter(
          (student) => student.batch === selectedBatch
        );

  // Get attendance for selected date
  const currentAttendance =
    attendance[selectedDate] || {};

  return (
    <div className="container">
      <h1>Trainer Session Attendance Dashboard</h1>

      <div className="filters">
        <BatchFilter
          selectedBatch={selectedBatch}
          setSelectedBatch={setSelectedBatch}
        />

        <DateFilter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>

      <AttendanceForm
        students={filteredStudents}
        attendance={currentAttendance}
        markAttendance={markAttendance}
      />

      <AttendanceStats
        attendance={currentAttendance}
        totalStudents={filteredStudents.length}
      />

      <AttendanceTable
        students={filteredStudents}
        attendance={currentAttendance}
      />
    </div>
  );
}

export default App;