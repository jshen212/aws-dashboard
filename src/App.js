import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/dashboard/dashboard';

class App extends Component {

  render() {
    return (
      <div class="dashboard_div-container">
        <Dashboard />
      </div>
    );
  }
}

export default App;
