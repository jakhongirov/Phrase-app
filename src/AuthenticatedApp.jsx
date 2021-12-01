import React from 'react';
import UsersPage from '../src/Pages/UsersPage/UsersPage';
// import Statistics from './Pages/Statistics/Statistics'
import AddUser from './Pages/AddUser/AddUser';

function AuthenticatedApp() {
	return (
		<>
			<AddUser/>
			{/* <Statistics /> */}

			<UsersPage />
		</>
	);
}

export default AuthenticatedApp;
