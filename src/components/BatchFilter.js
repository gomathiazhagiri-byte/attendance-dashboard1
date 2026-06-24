import React from "react";

function BatchFilter({ selectedBatch, setSelectedBatch }) {
  return (
    <div className="filter">
      <label>Batch:</label>

      <select
        value={selectedBatch}
        onChange={(e) => setSelectedBatch(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Batch A">Batch A</option>
        <option value="Batch B">Batch B</option>
        <option value="Batch C">Batch C</option>
      </select>
    </div>
  );
}

export default BatchFilter;