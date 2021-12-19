import React from 'react';
import './BookmarksMain.scss';
import { useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import date from '../../Context/date';
import SavedModal from '../SavedModal/SavedModal';

import backIcon from '../../Assets/Image/arrow-left-back.svg';
import deleteIcon from '../../Assets/Image/delete.svg';

function BookmarksMain() {
	const [token] = useToken();
	const [save, setSave] = React.useState([]);
	const navigate = useNavigate();
	const [show, setShow] = React.useState(false);

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', token?.data.token);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL + '/saveds?page=1&limit=30',
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setSave(result.data))
			.catch((error) => console.log('error', error));
	}, [token]);

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
							<h2 className='user__name'>{token.data.user.fullname}</h2>
							<p className='user__info'>Author</p>
						</div>

						<ul className='post__list'>
							{save.length > 0 &&
								save.map((row) => (
									<li className='post__item' key={row.id}>
										<div className='phreses-post__item-box'>
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
										</div>
										<div className='phrases-social__btn phrases-social__btn--width'>
											<button
												className='delete-btn'
												onClick={() => setShow((prev) => !prev)}>
												<img
													src={deleteIcon}
													alt='Massage icon'
													width={17}
													height={17}
												/>
											</button>
										</div>
										<SavedModal
											id={row.id}
											show={show}
											onClose={() => setShow(false)}
										/>
									</li>
								))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}

export default BookmarksMain;
