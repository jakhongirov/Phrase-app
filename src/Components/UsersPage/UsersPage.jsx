import React from 'react';
import './UsersPage.scss';
import { useNavigate } from 'react-router-dom';
import arrowLeftBtn from '../../Assets/Image/arrow-left-back.svg';
import profilUser from '../../Assets/Image/Profile.svg';

function UsersPage() {
	const navigate = useNavigate();

	const [user, setUser] = React.useState([]);
	const [search, setSearch] = React.useState('');

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImZ1bGxuYW1lIjoiamFraG9uZ2lyb3YiLCJ1c2VybmFtZSI6Impha2hvbmdpcm92IiwiaXNfYWRtaW4iOnRydWUsImlzX2RlbGV0ZWQiOmZhbHNlLCJjcmVhdGVkX2F0IjoiMjAyMS0xMi0xN1QxMzozNzo1MS41MzZaIiwiaWF0IjoxNjM5ODAyNzc0fQ.gPZqOC3dKfMx2rmE1tLB_9VFv6Rtns0ZLIpQO6Qjmw8',
		);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL +
				`/users/search?q=${search}&page=1&limit=20`,
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setUser(result.data))
			.catch((error) => console.log('error', error));
	}, [search]);

	console.log(user);

	return (
		<>
			<main className='users-page'>
				<div className='container'>
					<div className='users-page__inner'>
						<div className='users-page__content'>
							<button
								className='users-page__inner-button'
								onClick={() => navigate(-1)}>
								<img
									className='users-page__inner-img'
									src={arrowLeftBtn}
									alt='Users arrow left button'
									width='24'
									height='24'
								/>
							</button>
							<h1 className='users-page__inner-heading'>Users</h1>
							<span className='users-page__inner-span'>
								{' '}
								{user.length}{' '}
							</span>
						</div>

						<div className='users-page__hero'>
							<input
								className='users-page__hero-input'
								type='search'
								placeholder='Search'
								name='search'
								onChange={(evt) => setSearch(evt.target.value.trim())}
							/>
						</div>

						<div className='container'>
							<ul className='users-page__main-list'>
								{user.length > 0 &&
									user.map((row) => (
										<li
											key={row.id}
											className='users-page__main-item'>
											<button
												className='users-page__main-button'
												onClick={() => navigate('/user/' + row.id)}>
												<div className='users-page__main-img'>
													<img
														src={profilUser}
														alt='Profil user name img'
														width='17'
														height='23'
													/>
												</div>

												<div className='users-page__main-inner'>
													<h3 className='users-page__main-heading'>
														{row.fullname}
													</h3>
													<span className='users-page__main-span'>
														15*****25
													</span>
												</div>
											</button>
										</li>
									))}
							</ul>

							<button
								className='add-user'
								onClick={() => navigate('/user/add')}>
								Add User
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default UsersPage;
