import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav'
import AppBody from './components/AppBody'
import Footer from './components/Footer'



function App() {
  return (
	  <React.Fragment>
	  <Topnav/>
	  <AppBody/>
	  <Footer/>
	  </React.Fragment>
  );
}

export default App;
