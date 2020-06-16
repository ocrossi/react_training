import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/logo.png'

function Topnav () {
	return (
	  <Container fluid>
	  <Row size="big" id="fat">
		<Col sm={4} id="test">
			<Image src={Logo} height="150px" />
		</Col>
	    <Col sm={8}>sm=8</Col>
	  </Row>
	  </Container>
	);
}

export default Topnav

