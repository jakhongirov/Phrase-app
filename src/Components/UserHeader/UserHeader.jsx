import React from 'react';
import './UserHeader.scss';
import { useParams } from 'react-router-dom';
import imgUser from '../../Assets/Image/user-img.png';

function UserHeader() {
	const { id } = useParams();
	const [user, setUser] = React.useState([]);

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(process.env.REACT_APP_API_URL + '/users/' + id, requestOptions)
			.then((response) => response.json())
			.then((result) => setUser(result.data))
			.catch((error) => console.log('error', error));
	}, [id]);

	return (
		<div className='user-page_top'>
			<div className='container'>
				<h4 className='user-page_top__title'>User</h4>
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
