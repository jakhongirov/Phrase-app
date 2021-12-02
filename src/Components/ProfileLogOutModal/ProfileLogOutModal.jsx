import React from 'react';
import './ProfileLogOutModal.scss';

import useToken from '../../Hooks/useToken';

function ProfileLogOutModal({ setOpen }) {
	const [, setToken] = useToken();

	return (
		<>
			<div className='logout-modal'>
				<div className='logout-modal__inner'>
					<h3 className='logout-modal__title'>
						Are you sure you want to log out?
					</h3>

					<label className='logout-modal__label'>
						<input className='logout-modal__checkbox' type='checkbox' />
						Remember my login info
					</label>

					<div className='logout-modal__buttons'>
						<button
							className='logout-modal__button'
							onClick={() => setOpen((prev) => !prev)}>
							Cancel
						</button>

						<button
							className='logout-modal__button'
							onClick={() => {
								setToken(false);
							}}>
							Log out
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileLogOutModal;
