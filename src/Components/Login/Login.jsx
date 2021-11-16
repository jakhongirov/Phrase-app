import React from 'react';
import './Login.scss';

function Login() {
	const [see, setSee] = React.useState(false);
	const [type, setType] = React.useState('password');
	const password = React.useRef();

	return (
		<>
			<form className='login__input-box'>
				<main className='main'>
					<section className='login'>
						<div className='container'>
							<h1 className='login__heading'>Login</h1>

							<div className='username__box'>
								<input
									className='input__username'
									type='text'
									placeholder='Username'
									required
								/>
							</div>

							<div className='password__box'>
								<input
									className='input__password'
									type={type}
									placeholder='Password'
									required
								/>

								<button
									className='password__see-btn'
									ref={password}
									onClick={(evt) => {
										setSee((prev) => !prev);
										if (see) {
											setType('text');
										} else if (!see) {
											setType('password');
										}
									}}></button>
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
