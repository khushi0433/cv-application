import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import './styles/style.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    company: '',
    position: '',
    responsibilities: '',
    workStartDate: '',
    workEndDate: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      <h1>CV Application</h1>

      {isSubmitted ? (
        <div className="submitted-data">
          <h2>General Information</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>

          <h2>Education Experience</h2>
          <p><strong>School:</strong> {formData.school}</p>
          <p><strong>Degree:</strong> {formData.degree}</p>
          <p><strong>Start Date:</strong> {formData.startDate}</p>
          <p><strong>End Date:</strong> {formData.endDate}</p>

          <h2>Practical Experience</h2>
          <p><strong>Company:</strong> {formData.company}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Responsibilities:</strong> {formData.responsibilities}</p>
          <p><strong>From:</strong> {formData.workStartDate} <strong>To:</strong> {formData.workEndDate}</p>

          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </div>
      ) : (
        <form className="cv-form" onSubmit={handleSubmit}>
          <GeneralInfo 
            name={formData.name}
            email={formData.email}
            phone={formData.phone}
            handleChange={handleChange}
          />
          <EducationExperience 
            school={formData.school}
            degree={formData.degree}
            startDate={formData.startDate}
            endDate={formData.endDate}
            handleChange={handleChange}
          />
          <PracticalExperience 
            company={formData.company}
            position={formData.position}
            responsibilities={formData.responsibilities}
            workStartDate={formData.workStartDate}
            workEndDate={formData.workEndDate}
            handleChange={handleChange}
          />

          <button type="submit" className="submit-cv">Submit CV</button>
        </form>
      )}
    </div>
  );
}

export default App;
