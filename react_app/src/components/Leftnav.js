import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function Leftnav()
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

export default Leftnav
