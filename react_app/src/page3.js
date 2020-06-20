import React from 'react';
import AppBody1 from './components/AppBody1'
import Footer from './components/Footer'
import ClientContext from './context'

function Page3()
{
	const user = React.useContext(ClientContext)
	user.name = "michel"
	console.log(user)

	return(
		<AppBody1/>
	);

}

export default Page3
