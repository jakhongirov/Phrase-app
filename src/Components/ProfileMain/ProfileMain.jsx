import React from 'react';
import './ProfileMain.scss';

import MenuItem from '../MenuItem/MenuItem.jsx';

import UsersIcon from '../Lib/UsersIcon.jsx';
import PhrasesIcon from '../Lib/PhrasesIcon.jsx';
import StatisticsIcon from '../Lib/StatisticsIcon.jsx';
import BookmarksIcon from '../Lib/BookmarksIcon.jsx';
import SettingsIcon from '../Lib/SettingsIcon.jsx';
import LogoutIcon from '../Lib/LogoutIcon.jsx';

function ProfileMain() {
	return (
		<>
			<div className='profile-main'>
				<ul className='profile-main__list'>
					<li className='profile-main__item'>
						<MenuItem icon={<UsersIcon />} text='Users' path='/' />
					</li>

					<li className='profile-main__item'>
						<MenuItem
							icon={<PhrasesIcon />}
							text='Phrases'
							path='/phrases'
						/>
					</li>

					<li className='profile-main__item'>
						<MenuItem
							icon={<StatisticsIcon />}
							text='Statistics'
							path='/statistics'
						/>
					</li>

					<li className='profile-main__item'>
						<MenuItem
							icon={<BookmarksIcon />}
							text='Bookmarks'
							path='/bookmarks'
						/>
					</li>

					<li className='profile-main__item'>
						<MenuItem
							icon={<SettingsIcon />}
							text='Settings'
							path='/settings'
						/>
					</li>
				</ul>

				<MenuItem icon={<LogoutIcon />} text='Log out' path='/logout' />
			</div>
		</>
	);
}

export default ProfileMain;
