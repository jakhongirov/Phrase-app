import React from 'react';
import './UserBottom.scss';
import { useNavigate } from 'react-router-dom';
import { UserBtnRed, UserBtnBlue } from './../UserBtns/UserBtns';

import MenuItem from '../MenuItem/MenuItem';
import PhrasesIcon from '../Lib/PhrasesIcon';
import BookmarksIcon from '../Lib/BookmarksIcon';

function UserBottom({ user , phrases, save }) {
	const navigate = useNavigate();
	return (
		<div className='user-page_bottom'>
			<div className='container'>
				<div className='user-page_bottom-sec'>
					<button
						className='user-page_bottom-sec__phrases'
						onClick={() => navigate('/phrases/' + user.id)}>
						<MenuItem icon={<PhrasesIcon />} text='Phrases' path='/' />
						<span className='phrase__number'>{phrases.length}</span>
					</button>
					<button
						className='user-page_bottom-sec__bookmarks'
						onClick={() => navigate('/saved/' + user.id)}>
						<MenuItem
							icon={<BookmarksIcon />}
							text='Bookmarks'
							path='/'
						/>
						<span className='bookmarks__number'>{save.length}</span>
					</button>
				</div>

				<div className='user-page_bottom-btns'>
					<UserBtnRed user={user} />
					<UserBtnBlue />
				</div>
			</div>
		</div>
	);
}

export default UserBottom;
