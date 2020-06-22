import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Redirect, Switch } from 'react-router-dom'
import Leftnav from './Leftnav'
import ClientContext from '../context'
import { Link } from 'react-router-dom'

var AppWindow2 = () => {
	const ct = React.useContext(ClientContext)
	const fillContext = (gender) =>
	{
		console.log("On est dans l'app window 2, dans fill context")
		console.log(ct)
		if (gender == 0)
			ct.setUser({username: ct.user, gender: "male"})
		if (gender == 1)
			ct.setUser({username: ct.user, gender: "female"})
		console.log(ct)
	}

	return (
		<Col xl={10} className="main_app">
			<Link to="/page3">
				<Button onClick={() => fillContext(0)}>Male </Button>
				<Button onClick={() => fillContext(1)}>Female </Button>
			</Link>
		</Col>

	);
}

var AppBody2 = () =>{

	return (
		<Container fluid>
		<Row>
		<Leftnav/>
		<AppWindow2/>
		</Row>
		</Container>
	);
}


export default AppBody2
