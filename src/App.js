import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/dashboard/dashboard';

const App = () => {
    return (
      <div className="dashboard_div-container">
        <Dashboard />
      </div>
    );
}

export default App;
