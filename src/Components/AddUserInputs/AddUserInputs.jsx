import React, { useState } from 'react';
import Axios from 'axios';
import './AddUserInputs.scss';

function AddUserInputs() {
	const url = '';

	const [data, setData] = useState({
		name: '',
		password: '',
	});

	function submit(evt) {
		evt.preventDefault();
		Axios.post(url, {
			name: data.name,
			password: data.password,
		}).then((res) => {
			console.log(res.data);
		});
	}

	function handle(evt) {
		const newData = { ...data };
		newData[evt.target.id] = evt.target.value;
		setData(newData);
		console.log(newData);
	}
	return (
		<>
			<form onSubmit={(evt) => submit(evt)} className='AddUser-form'>
				<input
					className='AddUser-form__username'
					onChange={(evt) => handle(evt)}
					id='name'
					value={data.name}
					type='text'
					name='username'
					placeholder='Username'
				/>

				<input
					className='AddUser-form__password'
					onChange={(evt) => handle(evt)}
					id='password'
					value={data.password}
					type='password'
					name='password'
					placeholder='Password'
				/>

			</form>
		</>
	);
}

export default AddUserInputs;
