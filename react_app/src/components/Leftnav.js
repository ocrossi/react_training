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
			<Link to="page1">
				<Button size="lg" variant="info" className="left_button"> Page 1 </Button>
			</Link>		
			<Link to="page1">
				<Button size="lg" variant="info" className="left_button"> Page 2 </Button>
			</Link>
			<Link to="page1">
				<Button size="lg" variant="info" className="left_button" id="last_lb"> Page 3 </Button>
			</Link>
		</Col>
	);
}

export default Leftnav
