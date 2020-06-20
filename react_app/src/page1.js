import React, {useContext} from 'react';
import AppBody1 from './components/AppBody1'
import Footer from './components/Footer'

import Button from 'react-bootstrap/Button';
import ClientContextProvider  from './context'
import ClientContext  from './context'
import { Link, Redirect } from 'react-router-dom';

//
//class MyComponent extends React.Component {
//		static contextType = ClientContext
//	state = {
//		redirect: false
//	}  
//	setRedirect = () => {
//		this.setState({
//			redirect: true
//		})
//	}  
//	renderRedirect = () => {
//		console.log("salut les tests");
//		console.log(this.context);
//		if (this.state.redirect) {
//			return <Redirect to='/page4' />
//		}
//	}  
//	render () {
//		return (
//			<div>
//		<Form>
//			<Form.Label column sm={12}>
//				Peux tu indiquer l'identite du patient?
//			</Form.Label>
//		      <Form.Control type="text" name="clientname" id="idclient"/>
//			{this.renderRedirect()}
//			<Button type="submit" onClick={this.setRedirect}>Send</Button>
//		</Form>
//			</div>
//		)
//	}
//}


function Page1()
{
	return(
		<React.Fragment>
		<AppBody1 />
		</React.Fragment>
	);
}

export default Page1
