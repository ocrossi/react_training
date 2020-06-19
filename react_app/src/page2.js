import React from 'react';
import AppBody from './components/AppBody'
import Footer from './components/Footer'

import ClientContext from './context'

function Page2()
{
	const user = React.useContext(ClientContext)
	console.log(user)
	return(
		<AppBody/>
	);

}

export default Page2
