import React from "react";

function DateFilter({ selectedDate, setSelectedDate }) {
  return (
    <div className="filter">
      <label>Date:</label>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
}

export default DateFilter;