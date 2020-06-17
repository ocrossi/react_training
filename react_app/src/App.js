import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav'
import AppBody from './components/AppBody'


function App() {
  return (
	  <React.Fragment>
	  <Topnav/>
	  <AppBody/>
	  </React.Fragment>
  );
}

export default App;
