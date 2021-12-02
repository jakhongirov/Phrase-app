function UserIcon() {
	return (
		<>
			<svg
				width={30}
				height={30}
				viewBox='0 0 30 30'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<mask
					id='mask0_146_424'
					style={{ maskType: 'alpha' }}
					maskUnits='userSpaceOnUse'
					x={0}
					y={0}
					width={30}
					height={30}>
					<path
						d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15V30H0V15Z'
						fill='#C4C4C4'
					/>
				</mask>
				<g mask='url(#mask0_146_424)'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M15.2135 19.4146C10.3789 19.4146 6.25037 20.1456 6.25037 23.073C6.25037 26.0004 10.3527 26.7575 15.2135 26.7575C20.048 26.7575 24.1754 26.0254 24.1754 23.0992C24.1754 20.173 20.0742 19.4146 15.2135 19.4146Z'
						stroke='#A6A7A9'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M15.2135 15.2393C18.3862 15.2393 20.9576 12.6667 20.9576 9.49405C20.9576 6.32143 18.3862 3.75 15.2135 3.75C12.0409 3.75 9.4683 6.32143 9.4683 9.49405C9.45758 12.656 12.0123 15.2286 15.1731 15.2393H15.2135Z'
						stroke='#A6A7A9'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
			</svg>
		</>
	);
}

export default UserIcon;
