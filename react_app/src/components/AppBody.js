import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'

import { ClientContext } from '../context'

var Leftnav = () =>
{

	return (
		<Col sm={2} className="tow2">
		<Link to="/">
			<Button size="lg" variant="warning" className="left_button">Nouveau client</Button>
		</Link>
			<Button size="lg" variant="info" className="left_button">Fonction 1</Button>
			<Button size="lg" variant="info" className="left_button">Fonction 2</Button>
			<Button size="lg" variant="info" className="left_button" id="last_lb">Fonction 3</Button>
		</Col>
	);
}

var AppWindow = () => {
	return (
		<Col sm={10} className="main_app">
			<p>haha</p>
			<p></p>
		</Col>
	);
}

function AppBody() {
	return (
		<Container fluid>
		<Row>
			<Leftnav/>
			<AppWindow/>
		</Row>
		</Container>

	);
}

export default AppBody
