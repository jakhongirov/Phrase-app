import React from 'react';
import './UserHeader.scss';
import { useNavigate } from 'react-router-dom';
import imgUser from '../../Assets/Image/user-img.png';
import backIconWhite from '../../Assets/Image/back.svg'

function UserHeader({ user }) {
	const navigate = useNavigate();

	return (
		<div className='user-page_top'>
			<div className='container'>
				<div className='bookmarks__box-top'>
					<button
						className='bookmarks__back-btn'
						onClick={() => navigate(-1)}>
						<img
							src={backIconWhite}
							alt='back icon white'
							width='24'
							height='24'
						/>
					</button>
					<h4 className='user-page_top__title'>User</h4>
				</div>
				<div className='user-page_top__img-box'>
					<div className='user-page_top__img-box__in'>
						<img
							className='user-page_top__img'
							src={imgUser}
							alt=''
							width='70'
							height='70'
						/>
					</div>
				</div>
				<h4 className='user-page_top__name'>{user.fullname}</h4>
				<p className='user-page_top__number'>11******12</p>
			</div>{' '}
		</div>
	);
}

export default UserHeader;
