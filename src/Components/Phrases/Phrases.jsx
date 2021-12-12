import React from 'react';
import './Phrases.scss';
import date from '../../Context/date';

import deleteIcon from '../../Assets/Image/delete.svg';
import Bookmark from '../../Assets/Image/bookmark-icon.svg';

function Phrases() {
	const [phrases, setPhrases] = React.useState([]);
	const [search, setSearch] = React.useState('');

	const deleteAPI = async (id) => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			id: id,
		});

		const requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		await fetch(process.env.REACT_APP_API_URL + '/phrases', requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	const handleDeleted = (evt) => {
		evt.preventDefault();
		const deleteId = evt.target.dataset.saveId - 0;
		deleteAPI(deleteId);
	};

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

		fetch(
			process.env.REACT_APP_API_URL +
				`/phrases/search?q=${search}&page=1&limit=20`,
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setPhrases(result.data))
			.catch((error) => console.log('error', error));
	}, [search, handleDeleted]);
	

	const saveAPI = async (id) => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			phrase_id: id,
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		await fetch(process.env.REACT_APP_API_URL + '/saveds', requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	const handleBookmarks = (evt) => {
		evt.preventDefault();
		const saveId = evt.target.dataset.saveId - 0;
		saveAPI(saveId);
	};

	return (
		<>
			<main className='main'>
				<div className='container'>
					<h1 className='phrases-heading'>Phrases</h1>
					<div className='phrases-page'>
						<div className='phrases-heading__content'>
							<input
								className='phrases-heading__input '
								type='search'
								name='search'
								placeholder='Search'
								onChange={(evt) => setSearch(evt.target.value.trim())}
							/>
							<select className='phrases-heading__select' name='select'>
								<option value='en'>Eng</option>
								<option value='uz'>Uz</option>
								<option value='ru'>Ru</option>
							</select>
						</div>
						<ul className='phrases-list'>
							<li className='phrases-list__item'>
								<button className='phrases-list__btn'>
									#Phrase name
								</button>
							</li>
							<li className='phrases-list__item'>
								<button className='phrases-list__btn second'>
									Phrase
								</button>
							</li>
							<li className='phrases-list__item'>
								<button className='phrases-list__btn'>
									Phrase name
								</button>
							</li>
						</ul>

						<ul className='phreses-post__list'>
							{phrases.length > 0 &&
								phrases.map((row) => (
									<li className='phreses-post__item' key={row.id}>
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

										<div className='phrases-social__btn'>
											<form onClick={handleDeleted}>
												<button
													className='delete-btn'
													data-save-id={row.id}>
													<img
														src={deleteIcon}
														alt='Massage icon'
														width='17'
														height='17'
													/>
												</button>
											</form>
											<button
												onClick={handleBookmarks}
												className='bookmark-btn'
												data-save-id={row.id}>
												<img
													src={Bookmark}
													alt='Bookmark icon'
													width='12'
													height='17'
												/>
											</button>
										</div>
									</li>
								))}
						</ul>
					</div>
				</div>
			</main>
		</>
	);
}

export default Phrases;
