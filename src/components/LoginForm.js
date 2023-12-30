// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic if needed
    console.log('Logged in!', formData);
    // Redirect to the stock market dashboard
    navigate.push('/dashboard');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
