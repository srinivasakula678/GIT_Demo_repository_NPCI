// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

//const RegistrationForm = () => {
  //const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic if needed
    console.log('Registered!', formData);
    // Redirect to the login page
    history.push('/login');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
