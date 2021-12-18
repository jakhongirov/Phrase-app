import React from 'react';
import './AddUserInputs.scss';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

function AddUserInputs() {
	const navigate = useNavigate();
	const alert = useAlert();

	const [input, setInput] = React.useState({});

	const apiPost = async () => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImZ1bGxuYW1lIjoiamFraG9uZ2lyb3YiLCJ1c2VybmFtZSI6Impha2hvbmdpcm92IiwiaXNfYWRtaW4iOnRydWUsImlzX2RlbGV0ZWQiOmZhbHNlLCJjcmVhdGVkX2F0IjoiMjAyMS0xMi0xN1QxMzozNzo1MS41MzZaIiwiaWF0IjoxNjM5ODAyNzc0fQ.gPZqOC3dKfMx2rmE1tLB_9VFv6Rtns0ZLIpQO6Qjmw8',
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
					autoCapitalize='off'
					autoComplete='off'
				/>

				<input
					className='AddUser-form__username'
					onChange={handleChange}
					type='text'
					name='username'
					placeholder='Username'
					required
					autoCapitalize='off'
					autoComplete='off'
				/>

				<input
					className='AddUser-form__password'
					onChange={handleChange}
					type='password'
					name='password'
					placeholder='Password'
					required
					autoCapitalize='off'
					autoComplete='off'
				/>

				<footer className='footer'>
					<div className='container'>
						<button
							className='login__btn'
							onClick={() =>
								setTimeout(() => {
									navigate('/users');
									alert.success('Added user');
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
