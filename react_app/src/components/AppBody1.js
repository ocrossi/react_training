import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import ClientContext from '../context'
import { Route, Redirect, Switch } from 'react-router-dom'
import Leftnav from './Leftnav'
import { useForm } from "react-hook-form";
import RightArrow from '../assets/RightArrow.png'
import Image from 'react-bootstrap/Image'


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
	}i
}

function Arrow(props) {
	console.log(props)
	if (props.val.user.id != 0)
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
	var hookform = {register, handleSubmit}
	const ct = React.useContext(ClientContext)

	const formSubmit = (data) => {
		ct.setUser({name: data.clientname})
		console.log("dans onSubmit le context")
		console.log(ct)
		ct.id = 1

	}

	return (
		<Col xl={10} className="main_app">
		<div className="formulaire">
		<Form onSubmit={handleSubmit(formSubmit)}>
			<Form.Label column sm={12}>
				Peux tu indiquer l'identite du patient?
			</Form.Label>
		    <Form.Control type="text" name="clientname" id="idclient" ref={register}/>
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
