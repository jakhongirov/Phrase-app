import React from 'react';
import './Login.scss';
import useToken from '../../Hooks/useToken';

function Login() {
	const [, setToken] = useToken();
	const [see, setSee] = React.useState(false);
	const [type, setType] = React.useState('password');
	const password = React.useRef();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, password } = evt.target.elements;

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			username: username.value.trim(),
			password: password.value.trim().toLowerCase(),
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		fetch(process.env.REACT_APP_API_URL + '/login', requestOptions)
			.then((response) => response.json())
			.then((data) => setToken(data))
			.catch((error) => console.log('error', error));
	};

	return (
		<>
			<form
				className='login__input-box'
				method='POST'
				onSubmit={handleSubmit}
				autoCapitalize='off'>
				<main className='main'>
					<section className='login'>
						<div className='container'>
							<h1 className='login__heading'>Login</h1>

							<div className='username__box'>
								<input
									className='input__username'
									type='text'
									placeholder='Username'
									name='username'
									required
									autoComplete='off'
									autoCapitalize='off'
								/>
							</div>

							<div className='password__box'>
								<input
									className='input__password'
									type={type}
									placeholder='Password'
									name='password'
									required
									autoComplete='off'
									autoCapitalize='off'
								/>

								<span
									className='password__see-btn'
									ref={password}
									onClick={(evt) => {
										setSee((prev) => !prev);
										if (see) {
											setType('text');
											password.current.classList.add(
												'password__see-btn--active',
											);
										} else if (!see) {
											setType('password');
											password.current.classList.remove(
												'password__see-btn--active',
											);
										}
									}}></span>
							</div>

							<div className='checkout__input-box'>
								<input className='checkout__input' type='checkbox' />
								<span className='checkout__info'>Remember me</span>
							</div>
						</div>
					</section>
				</main>

				<footer className='footer'>
					<div className='container'>
						<button className='login__btn'>Sign In</button>
					</div>
				</footer>
			</form>
		</>
	);
}

export default Login;
