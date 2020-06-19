import React, {useContext} from 'react';
import AppBody from './components/AppBody'
import Footer from './components/Footer'

import ClientContext from './context'

function Page1()
{
	const user = useContext(ClientContext)
	user.name = "michel"
	console.log(user)
	return(
		<AppBody value={user}/>
	);
}

export default Page1
