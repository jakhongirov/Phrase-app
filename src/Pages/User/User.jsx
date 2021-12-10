import React from 'react';
import './User.scss';
import { useParams } from 'react-router-dom';
import UserHeader from '../../Components/UserHeader/UserHeader';
import UserBottom from '../../Components/UserBottom/UserBottom';

function UserPage() {
	const { id } = useParams();
	const [user, setUser] = React.useState([]);
	const [phrases, setPhrases] = React.useState([]);
	const [save, setSave] = React.useState([]);

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(process.env.REACT_APP_API_URL + '/users/' + id, requestOptions)
			.then((response) => response.json())
			.then((result) => setUser(result.data))
			.catch((error) => console.log('error', error));
	}, [id]);

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);

		const raw = '';

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL +
				`/phrases/search/${id}?q=a&page=1&limit=200`,
			requestOptions,
		)
			.then((response) => response.text())
			.then((result) => setPhrases(result.data))
			.catch((error) => console.log('error', error));
	}, [id]);

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);

		const raw = '';

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL +
				`/saveds/${id}/search?q=api&page=1&limit=20`,
			requestOptions,
		)
			.then((response) => response.text())
			.then((result) => setSave(result.data))
			.catch((error) => console.log('error', error));
	}, [id]);

	return (
		<div className='user-page'>
			<UserHeader user={user} />
			<UserBottom user={user} phrases={phrases} save={save} />
		</div>
	);
}

export default UserPage;
