import React from 'react';
import './AddUser.scss';

import AddUserInputs from '../../Components/AddUserInputs/AddUserInputs';

function AddUser() {

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
		</>
	);
}

export default AddUser;
