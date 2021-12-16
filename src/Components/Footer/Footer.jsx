import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom';

import Home from '../Lib/Home';
import Plus from '../Lib/plus';
import Profile from '../Lib/Profile';
import userIcon from '../../Assets/Image/group.png';
import Statistics from '../Lib/Statistics';

function Footer() {
	const navigate = useNavigate();

	return (
		<>
			<footer className='footer-bottom'>
				<div className='container'>
					<div className='btn__box'>
						<button
							className='footer__btn--plus'
							onClick={() => navigate('/post')}>
							<Plus />
						</button>
					</div>

					<div className='footer__icon'>
						<ul className='footer__list'>
							<li className='footer__item item__left'>
								<button
									className='item__btn'
									onClick={() => navigate('/Users')}>
									<img
										src={userIcon}
										alt='user Icon'
										width='24'
										height='24'
									/>
									<span className='vreminiy'>Users</span>
								</button>
							</li>
							<li className='footer__item'>
								<button
									className='item__btn'
									onClick={() => navigate('/statistics/Weekly')}>
									<Statistics />
									<span className='vreminiy'>Statistics</span>
								</button>
							</li>
						</ul>

						<ul className='footer__list'>
							<li className='footer__item item__right'>
								<button
									className='item__btn'
									onClick={() => navigate('/')}>
									<Home />
									<span className='vreminiy'>Home</span>
								</button>
							</li>
							<li className='footer__item'>
								<button
									className='item__btn'
									onClick={() => navigate('/profile')}>
									<Profile />
									<span className='vreminiy'>Profile</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
