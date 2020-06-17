import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav'
import Footer from './components/Footer'

import Page1 from './page1.js'
import Page2 from './page2.js'
import Page3 from './page3.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
	  <Router>
	  <Topnav/>
	  <Route path="/" exact component={Page1}/>
	  <Route path="/page1" exact component={Page1}/>
	  <Route path="/page2" exact component={Page2}/>
	  <Route path="/page3" exact component={Page3}/>

	  <Footer/>
	  </Router>
  );
}

export default App;
