// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import StockMarketDashboard from './components/StockMarketDashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<StockMarketDashboard />} />
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
