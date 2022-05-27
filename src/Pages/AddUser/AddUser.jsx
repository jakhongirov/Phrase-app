import React from 'react';
import { useNavigate } from 'react-router-dom';

import backIcon from '../../Assets/Image/arrow-left-back.svg';

import AddUserInputs from '../../Components/AddUserInputs/AddUserInputs';

function AddUser() {
	const navigate = useNavigate();

	return (
		<>
			<div className='AddUser'>
				<div className='container'>
					<div className='bookmarks__box-top bookmarks__box-top--content bookmarks__box-top--margin'>
						<button
							className='bookmarks__back-btn'
							onClick={() => navigate(-1)}>
							<img
								src={backIcon}
								alt='arrow left back icon'
								width='24'
								height='24'
							/>
						</button>
						<h1 className='bookmarks__heading'>Add User</h1>
					</div>

					<AddUserInputs />
				</div>
			</div>
		</>
	);
}

export default AddUser;
