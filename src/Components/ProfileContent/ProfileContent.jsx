import React from 'react';

import ProfileHeader from '../ProfileHeader/ProfileHeader.jsx';
import ProfileMain from '../ProfileMain/ProfileMain.jsx';
import ProfileLogOutModal from '../ProfileLogOutModal/ProfileLogOutModal.jsx';

function ProfileContent() {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<ProfileHeader />

			<ProfileMain setOpen={setOpen} />

			{open && <ProfileLogOutModal setOpen={setOpen} />}
		</>
	);
}

export default ProfileContent;
