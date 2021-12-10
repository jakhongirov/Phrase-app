import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom';
import settings from '../../Assets/Image/u_setting.png';
import statistics from '../../Assets/Image/u_chart-pie-alt.png';
import home from '../../Assets/Image/u_home-alt.png';
import profile from '../../Assets/Image/u_user.png';

function Footer() {
	const navigate = useNavigate();

	return (
		<footer className='footer-component'>
			<div className='container'>
				<div className='btn__box'>
					<button className='btn__plus' onClick={() => navigate('/post')}>
						+
					</button>
				</div>

				<div className='cicle__no'></div>

				<div className='list'>
					<ul className='footer__list'>
						<li className='footer__items'>
							<button
								className='footer__items-btn'
								onClick={() => navigate('/setting')}>
								<img
									className='footer_icons'
									src={settings}
									alt='icons'
									width='20'
									height='20'
								/>
								<h3 className='footer__heading'>Settings</h3>
							</button>
						</li>

						<li className='footer__items'>
							<button
								className='footer__items-btn'
								onClick={() => navigate('/statistics')}>
								<img
									className='footer_icons'
									src={statistics}
									alt='icons'
									width='20'
									height='20'
								/>
								<h3 className='footer__heading'>Statistics</h3>
							</button>
						</li>
					</ul>

					<ul className='footer__list'>
						<li className='footer__items'>
							<button
								className='footer__items-btn'
								onClick={() => navigate('/')}>
								<img
									className='footer_icons'
									src={home}
									alt='icons'
									width='20'
									height='20'
								/>
								<h3 className='footer__heading'>Home</h3>
							</button>
						</li>

						<li className='footer__items'>
							<button
								className='footer__items-btn'
								onClick={() => navigate('/profile')}>
								<img
									className='footer_icons'
									src={profile}
									alt='icons'
									width='20'
									height='20'
								/>
								<h3 className='footer__heading'>Profile</h3>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
