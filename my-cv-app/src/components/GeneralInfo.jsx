import React from 'react';

function GeneralInfo({ name, email, phone, handleChange }) {
  return (
    <div className="section">
      <h2>General Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Enter Your Phone Number"
        value={phone}
        onChange={handleChange}
      />
    </div>
  );
}

export default GeneralInfo;
