import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/dashboard/dashboard';

const App = () => {
  return (
    <MuiThemeProvider>
        <Dashboard />
    </MuiThemeProvider>
  );
}

export default App;
