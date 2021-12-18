import React from 'react';
import './App.scss';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import useToken from './Hooks/useToken';
import { useAlert } from 'react-alert';

function App() {
	const [token] = useToken();
	const alert = useAlert();

	if (token.status == 200) {
		alert.success('login');
		return <AuthenticatedApp />;
	} else {
		alert.error('error');
		return <UnauthenticatedApp />;
	}
}

export default App;
