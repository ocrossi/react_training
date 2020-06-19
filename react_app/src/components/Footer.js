import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


var Bottom_leftnav = () =>
{
	return (
		<Col sm={2} className="tow2">
			<Button size="lg" variant="info" className="left_button">Footer f1</Button>
			<Button size="lg" variant="info" className="left_button" id="last_blf">Footer f2</Button>
		</Col>
	);

}

var Bottom_main = () =>
{
	return (
		<Col sm={10} className="main_app">
			<p>hehe</p>
		</Col>

	);
}

var Footer = () =>
{
	return (
		<Container fluid>
		<Row>
			<Bottom_leftnav/>
			<Bottom_main/>
		</Row>
		</Container>

	);
}

export default Footer
