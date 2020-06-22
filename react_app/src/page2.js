import React from 'react';
import AppBody2 from './components/AppBody2'
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
		<AppBody2/>
	);

}

export default Page2
