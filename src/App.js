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
          <Route path="/login" component={LoginForm} />
          <Route path="/dashboard" component={StockMarketDashboard} />
          <Route path="/" component={RegistrationForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
