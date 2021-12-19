import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import date from '../../Context/date';
import useToken from '../../Hooks/useToken';

import backIcon from '../../Assets/Image/arrow-left-back.svg';

function UserSave() {
	const [token] = useToken();
	const [save, setSave] = React.useState([]);
	const [user, setUser] = React.useState([]);
	const navigate = useNavigate();
	const { id } = useParams();

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', token.data.token);

		const raw = '';

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL +
				`/saveds/${id}/search?q=api&page=1&limit=20`,
			requestOptions,
		)
			.then((response) => response.text())
			.then((result) => setSave(result.data))
			.catch((error) => console.log('error', error));
	}, [token, id]);

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
		<>
			<main className='main'>
				<section className='bookmarks'>
					<div className='container'>
						<div className='bookmarks__box-top'>
							<button
								className='bookmarks__back-btn'
								onClick={() => navigate(-1)}>
								<img
									src={backIcon}
									alt='arrow left back icon'
									width='24'
									height='24'
								/>
							</button>
							<h1 className='bookmarks__heading'>Bookmarks</h1>
							<p className='bookmarks__nums'>{save.length}</p>
						</div>

						<div className='user'>
							<img
								className='user__profile'
								src='https://via.placeholder.com/80'
								alt='templete img'
								width='80'
								height='80'
							/>
							<h2 className='user__name'>{user.fullname}</h2>
							<p className='user__info'>Author</p>
						</div>

						<ul className='post__list'>
							{save.length > 0 &&
								save.map((row) => (
									<li className='post__item' key={row.id}>
										<div className='post__item-box'>
											<img
												className='user__profile user__profile--margin'
												src='https://via.placeholder.com/45'
												alt='templete img'
												width='45'
												height='45'
											/>
											<div className='post__item-box2'>
												<strong className='user__name user__name--font'>
													{row.fullname}
												</strong>
												<span className='user__info user__info--font'>
													14***15
												</span>
											</div>
											<span className='date'>
												{date(row.created_at)}
											</span>
										</div>
										<p className='post__info'>{row.body}</p>
									</li>
								))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}

export default UserSave;
