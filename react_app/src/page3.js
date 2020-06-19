import React from 'react';
import AppBody from './components/AppBody'
import Footer from './components/Footer'
import ClientContext from './context'

function Page3()
{
	const user = React.useContext(ClientContext)
	user.name = "michel"
	console.log(user)

	return(
		<AppBody/>
	);

}

export default Page3
