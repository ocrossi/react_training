import React from 'react';
import AppBody1 from './components/AppBody1'
import Footer from './components/Footer'

import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Button from 'react-bootstrap/Button';
import ClientContext from './context'

function Page2()
{
	const user = React.useContext(ClientContext)
	console.log(user)
	return(
		<React.Fragment>
		<AppBody1/>
		<Button type="submit" onClick={() => <Redirect to="/page1"/>}>hehe</Button>
		</React.Fragment>
	);

}

export default Page2
