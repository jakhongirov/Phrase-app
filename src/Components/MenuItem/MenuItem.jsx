import React from 'react';
import './MenuItem.scss';
import { NavLink } from 'react-router-dom';

function MenuItem({ icon, text, path }) {
	return (
		<>
			<NavLink className='menu__link' to={path}>
				<div className='menu__link-icon'>{icon}</div>

				{text}
			</NavLink>
		</>
	);
}

export default MenuItem;
