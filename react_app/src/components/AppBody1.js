import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import ClientContext from '../context'
import { Route, Redirect, Switch } from 'react-router-dom'
import Leftnav from './Leftnav'
import { useForm } from "react-hook-form";



class MyComponent extends React.Component {
		static contextType = ClientContext
	state = {

		redirect: false
	}  
	setRedirect = () => {
		this.setState({
			redirect: true
		})
	}
	onSubmit = (data) => {
		console.log(data)
		this.props.hf.setUser(data)
	}
	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to='/page2' />
		}
	}  
	render () {
		return (
			<div>
				{this.renderRedirect()}
				<Button type="submit" onClick={this.setRedirect}>Send</Button>
			</div>
		)
	}
}

var AppWindow1 = () => {
	const {register, handleSubmit} = useForm();
	var hookform = {register, handleSubmit}
	const ct = React.useContext(ClientContext)

	const formSubmit = (data) => {
		console.log(data)
		console.log("dans onSubmit le context")
		console.log(ct)
		ct.setUser(data.clientname)

	}

	return (
		<Col xl={10} className="main_app">
		<div className="formulaire">
		<Form onSubmit={handleSubmit(formSubmit)}>
			<Form.Label column sm={12}>
				Peux tu indiquer l'identite du patient?
			</Form.Label>
		    <Form.Control type="text" name="clientname" id="idclient" ref={register}/>
			<Link to="/page2">
				<Button type="submit">Submit</Button>
			</Link>
		</Form>

		</div>
		</Col>
	);
}

			//<MyComponent hf={ct}/>


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
