import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


var Leftnav = () =>
{
	return (
		
		<Col sm={2} className="tow2">
			<Button size="lg" variant="warning" className="left_button">Ajouter client</Button>
			<Button size="lg" variant="info" className="left_button">Effacer client</Button>
			<Button size="lg" variant="info" className="left_button">Modifier Client</Button>
			<Button size="lg" variant="info" className="left_button" id="last_lb">Donnees Client</Button>
		</Col>
	);
}

var AppWindow = () => {
	return (
		<Col sm={10} className="tow2">
			<p>haha</p>
		</Col>
	);
}

function AppBody() {
	return (
		<Container fluid>
		<Row className="tow">
			<Leftnav/>
			<AppWindow/>
		</Row>
		</Container>

	);
}

export default AppBody
