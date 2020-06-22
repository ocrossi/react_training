import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftnav from './Leftnav'
import ClientContext from '../context'
import { Link } from 'react-router-dom'

var AppWindow2 = () => {
	const ct = React.useContext(ClientContext)
	const fillContext = (gender) =>
	{
		if (gender === 0)
			ct.setUser({...ct.user, gender: "male"})
		else if (gender === 1)
			ct.setUser({...ct.user, gender: "female"})
	}

	return (
		<Col xl={10} className="main_app">
			<Row size="lg" className="approw">
				<p>Peux-tu indiquer son sexe? </p>
			</Row>
			<Row className="approw">
				<Link to="/page3">
					<Button onClick={() => fillContext(0)} className="sexbutton">Homme </Button>
					<Button onClick={() => fillContext(1)} className="sexbutton">Femme </Button>
				</Link>
			</Row>
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
