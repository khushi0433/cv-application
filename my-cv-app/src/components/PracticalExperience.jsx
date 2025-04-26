import React from 'react';

function PracticalExperience({ company, position, responsibilities, workStartDate, workEndDate, handleChange }) {
  return (
    <div className="section">
      <h2>Practical Experience</h2>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={company}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position Title"
        value={position}
        onChange={handleChange}
      />
      <input
        type="text"
        name="responsibilities"
        placeholder="Main Responsibilities"
        value={responsibilities}
        onChange={handleChange}
      />
      <input
        type="date"
        name="workStartDate"
        value={workStartDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="workEndDate"
        value={workEndDate}
        onChange={handleChange}
      />
    </div>
  );
}

export default PracticalExperience;
