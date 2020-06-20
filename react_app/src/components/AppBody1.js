import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import ClientContext from '../context'
import { Route, Redirect, Switch } from 'react-router-dom'
import useForm from 'react-hook-form'




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
	}
	renderRedirect = () => {
		console.log("salut les tests");
		console.log(this.context);
		if (this.state.redirect) {
			return <Redirect to='/page2' />
		}
	}  
	render () {
		return (
			<div>
		<Form onSubmit={this.handleSubmit}>
			<Form.Label column sm={12}>
				Peux tu indiquer l'identite du patient?
			</Form.Label>
		      <Form.Control type="text" name="clientname" id="idclient" ref={this.register}/>
			{this.renderRedirect()}
			<Button type="submit" onClick={this.setRedirect}>Send</Button>
		</Form>
			</div>
		)
	}
}



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

var AppWindow1 = () => {
	const {register, handleSubmit} = useForm();

	hookform = {register, handleSubmit}
	return (
		<Col xl={10} className="main_app">
		<div className="formulaire">
		<MyComponent hf={hookform}/>
		{console.log()}
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
