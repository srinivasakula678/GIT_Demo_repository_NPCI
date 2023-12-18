// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import StockMarketDashboard from './components/StockMarketDashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/dashboard" component={StockMarketDashboard} />
          <Route path="/" component={RegistrationForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
