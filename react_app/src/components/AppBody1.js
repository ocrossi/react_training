import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import ClientContext from '../context'
import Leftnav from './Leftnav'
import { useForm } from "react-hook-form";
import RightArrow from '../assets/RightArrow.png'
import Image from 'react-bootstrap/Image'


function Arrow(props) {
	console.log(props)
	if (props.val.user.id !== 0)
		return (
			<Link to="/page2">
				<Image width="100" src={RightArrow}/>
			</Link>
		);
	else
		return (<p></p>);

}

var AppWindow1 = () => {
	const {register, handleSubmit} = useForm();
	const ct = React.useContext(ClientContext)

	const formSubmit = (data) => {
		var fullname = data.clientfname + " " + data.clientlname
		ct.setUser({name: fullname})
		console.log(ct)
		console.log(data)
		ct.id = 1 

	}

	return (
		<Col xl={10} className="main_app">
		<div className="formulaire">
		<Form onSubmit={handleSubmit(formSubmit)}>
			<Form.Label column sm={12}>
				Peux tu indiquer l'identite du patient?
			</Form.Label>
			<Form.Label column sm={6}>
				Nom
		    <Form.Control type="text" name="clientfname"  ref={register}/>
			</Form.Label>
			<Form.Label column sm={6}>
				Prenom
		    <Form.Control type="text" name="clientlname"  ref={register}/>
			</Form.Label>
			<Button type="submit">Submit</Button>
		</Form>
		<Arrow val={ct}/>
		</div>
		</Col>
	);
}


function AppBody1() {
	return (
		<Container fluid>
		<Row>
		<Leftnav/>
		<AppWindow1/>
		</Row>
		</Container>
	);
}

export default AppBody1
