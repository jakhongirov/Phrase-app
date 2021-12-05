import React from 'react';

import './UserBtns.scss';
import Modal from '../Modal/Modal';

function UserBtnRed({ user }) {
	const [show, setShow] = React.useState(false);

	return (
		<>
			<div className='btn btn--red' onClick={() => setShow(true)}>
				Delete User
			</div>

			<Modal user={user} onClose={() => setShow(false)} show={show} />
		</>
	);
}

function UserBtnBlue() {
	return <div className='btn btn--blue'>Manage User</div>;
}

export { UserBtnRed, UserBtnBlue };