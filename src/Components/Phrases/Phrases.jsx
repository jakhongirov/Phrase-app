import React from 'react';
import './Phrases.scss';
import Massage from '../../Assets/Image/massage-icon.svg';
import Bookmark from '../../Assets/Image/bookmark-icon.svg';
import Share from '../../Assets/Image/share-icon.svg';

function Phrases() {
	const [phrases, setPhrases] = React.useState([]);
	const [search, setSearch] = React.useState('i');
	const [save, setSave] = React.useState(false);

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
			process.env.REACT_APP_API_URL + `/phrases?page=1&limit=100`,
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setPhrases(result.data))
			.catch((error) => console.log('error', error));
	}, []);

	// const searchApi = async () => {
	// 	const myHeaders = new Headers();
	// 	myHeaders.append(
	// 		'Authorization',
	// 		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
	// 	);

	// 	const requestOptions = {
	// 		method: 'GET',
	// 		headers: myHeaders,
	// 		redirect: 'follow',
	// 	};

	// 	await fetch(
	// 		process.env.REACT_APP_API_URL +
	// 			`/phrases/search?q=${search}&page=1&limit=2`,
	// 		requestOptions,
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => setPhrases(...result.data))
	// 		.catch((error) => console.log('error', error));
	// };

	// React.useEffect(() => {
	// 	searchApi();
	// }, [search]);

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

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const saveId = evt.target.dataset.saveId - 0;
		saveAPI(saveId);
	};

	return (
		<>
			<main className='main phrases'>
				<div className='container'>
					<h1 className='phrases-heading'>Phrases</h1>
					<div className='phrases-page'>
						<form>
							<div className='phrases-heading__content'>
								<input
									className='phrases-heading__input '
									type='search'
									name='search'
									placeholder='Search'
									onChange={(evt) =>
										setSearch(evt.target.value.trim())
									}
									// onKeyDown={(evt) => {
									// 	if (evt.code === 'Enter') {
									// 		searchApi();
									// 	}
									// }}
								/>
								<select
									className='phrases-heading__select'
									name='select'>
									<option value='en'>Eng</option>
									<option value='uz'>Uz</option>
									<option value='ru'>Ru</option>
								</select>
							</div>
						</form>
						<ul className='phrases-list'>
							<li className='phrases-list__item'>
								<button className='phrases-list__btn-first'>
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
													{row.created_at}
												</span>
											</div>
											<p className='post__info'>{row.body}</p>
										</div>

										<div className='phrases-social__btn'>
											<form onClick={handleSubmit}>
												<button
													className='massage-btn'
													type='button'>
													<img src={Massage} alt='Massage icon' />
												</button>
												<button
													className='bookmark-btn'
													type='button'
													data-save-id={row.id}>
													<img
														src={Bookmark}
														alt='Bookmark icon'
													/>
												</button>
												<button className='share-btn' type='button'>
													<img src={Share} alt='Share icon' />
												</button>
											</form>
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
