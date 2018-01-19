import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/dashboard/dashboard';

import RaisedButton from 'material-ui/RaisedButton';

const App = () => {
    return (
      <MuiThemeProvider>
        <div className="dashboard_div-container">
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
}

export default App;
