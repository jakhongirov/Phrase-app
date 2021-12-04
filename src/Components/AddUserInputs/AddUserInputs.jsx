import React from 'react';
import './AddUserInputs.scss';
import { useNavigate } from 'react-router-dom';

function AddUserInputs() {
	const navigate = useNavigate();

	const [input, setInput] = React.useState({});

	const apiPost = async () => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			fullname: input.fullname,
			username: input.username,
			password: input.password,
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		await fetch(process.env.REACT_APP_API_URL + '/users', requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	const handleChange = (evt) => {
		evt.persist();
		setInput((input) => ({
			...input,

			[evt.target.name]: evt.target.value.trim(),
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		apiPost();
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='AddUser-form'>
				<input
					className='AddUser-form__username'
					onChange={handleChange}
					type='text'
					name='fullname'
					placeholder='Full name'
					required
				/>

				<input
					className='AddUser-form__username'
					onChange={handleChange}
					type='text'
					name='username'
					placeholder='Username'
					required
				/>

				<input
					className='AddUser-form__password'
					onChange={handleChange}
					type='password'
					name='password'
					placeholder='Password'
					required
				/>

				<footer className='footer'>
					<div className='container'>
						<button
							className='login__btn'
							onClick={() =>
								setTimeout(() => {
									navigate('/users');
								}, 1200)
							}>
							Add User
						</button>
					</div>
				</footer>
			</form>
		</>
	);
}

export default AddUserInputs;
