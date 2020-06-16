import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';

var a = "Octavio"

function App() {
  return (
    <div className="App">
	  <Navbar fixed="top" />
	  <p> hello {a} </p>
    </div>
  );
}

export default App;
