import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Link, Redirect } from 'react-router-dom';

import { Redirect } from 'react-router-dom'

class MyComponent extends Component {
	state = {
		redirect: false
	}  
	setRedirect = () => {
		this.setState({
			redirect: true
		})
	}  
	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to='/page4' />
		}
	}  
	render () {
		return (
			<div>
			{this.renderRedirect()}
			<button onClick={this.setRedirect}>Redirect</button>
			</div>
		)
	}
}
export default MyComponent as Myredir

//class ContactForm extends Component {
//
//  submitForm (e) {
//    e.preventDefault()
//    this.props.history.push('/page2');
//  }
//
//	predir = (v) => {
//		if (v == 2)
//			return (<Redirect to="/page2"/>)
//		if (v == 3)
//			return (<Redirect to="/page2"/>)
//		if (v == 4)
//			return (<Redirect to="/page2"/>)
//
//	}
//
//  render() {
//    return (
//      <div>
//        <form onSubmit={this.submitForm.bind(this)}>
//          <button type="submit" onClick={this.predir(2)}>Submit a bois</button>
//        </form>
//      </div>
//    );
//  }
//}
//
//export default withRouter(ContactForm)
