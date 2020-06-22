import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClientContext from '../context'
import Leftnav from './Leftnav'

var AppWindow3 = () => {
	const ct = React.useContext(ClientContext)
	const Result = () =>
	{
		var res = ""
		if (ct.user.gender === "male")
			res = "Monsieur " + ct.user.name
		else if (ct.user.gender === "female")
			res = "Madame " + ct.user.name
		return (<p>{res}</p>)
	}

	return (
		<Col xl={10} className="main_app">
			<Row size="lg" className="approw">
				<Result className="result"/>
			</Row>
		</Col>

	);


}

function AppBody3() {
	return (
		<Container fluid>
		<Row>
		<Leftnav/>
		<AppWindow3/>
		</Row>
		</Container>

	);
}

export default AppBody3
