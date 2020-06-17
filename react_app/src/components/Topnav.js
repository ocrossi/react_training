import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/logo.png'


function Weblogo() {
	return (
			<Image 	height="100" src={Logo} id="logo"/>
	);
}

function Account_button() {
	return (
		<Row id="right_topnav_right">
		<Col md={10}></Col>
		<Col>
			<Button bS="btn btn-primary" variant="dark" size="lg" id="acc_bt">Mon compte</Button>
		</Col>
		</Row>
	);
}

function Topnav () {
	return (
	  <Container fluid>
	  <Row size="big" id="fat">
		<Col sm={2} id="left_topnav">
			<Weblogo />
		</Col>
	    <Col sm={10} id="right_topnav">
			<Account_button/>
		</Col>
	  </Row>
	  </Container>
	);
}

export default Topnav

