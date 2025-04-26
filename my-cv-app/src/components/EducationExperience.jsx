import React from 'react';

function EducationExperience({ school, degree, startDate, endDate, handleChange }) {
  return (
    <div className="section">
      <h2>Education Experience</h2>
      <input
        type="text"
        name="school"
        placeholder="School Name"
        value={school}
        onChange={handleChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={degree}
        onChange={handleChange}
      />
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        value={endDate}
        onChange={handleChange}
      />
    </div>
  );
}

export default EducationExperience;
