import React from 'react';
import './ProfileHeader.scss';

import UserIcon from '../Lib/UserIcon.jsx';

function ProfileHeader() {
	return (
		<>
			<div className='profile'>
				<div className='container'>
					<h2 className='profile__heading'>Profile</h2>

					<div className='profile__user'>
						<div className='profile__user-image'>
							<UserIcon />
						</div>

						<div className='profile__user-info'>
							<h3 className='profile__user-name'>
								Robert Williams
							</h3>

							<span className='profile__user-password'>
								14****15
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileHeader;
