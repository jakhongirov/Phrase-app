import React from 'react';
import './AddUser.scss';
import { useNavigate } from 'react-router-dom';
import AddUserInputs from '../../Components/AddUserInputs/AddUserInputs';

function AddUser() {
	const navigate = useNavigate();

	return (
		<>
			<div className='AddUser'>
				<div className='container'>
					<div className='AddUser-inner'>
						<h1 className='AddUser-heading'> Add User </h1>

						<AddUserInputs />
					</div>
				</div>
			</div>

			<footer className='footer'>
				<div className='container'>
					<button
						className='login__btn'
						onClick={() => navigate('/users')}>
						Add User
					</button>
				</div>
			</footer>
		</>
	);
}

export default AddUser;
