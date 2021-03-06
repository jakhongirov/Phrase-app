import React from 'react';
import { useAlert } from 'react-alert';
import './Phrases.scss';
import date from '../../Context/date';
import useToken from '../../Hooks/useToken';
import PhrasesModal from '../PhrasesModal/PhrasesModal';

import deleteIcon from '../../Assets/Image/delete.svg';
import Bookmark from '../../Assets/Image/bookmark-icon.svg';

function Phrases() {
	const [token] = useToken();
	const alert = useAlert();
	const [phrases, setPhrases] = React.useState([]);
	const [search, setSearch] = React.useState('');
	const [lang, setLang] = React.useState('en');
	const [show, setShow] = React.useState(false);

	//Phrases
	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', token.data.token);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL +
				`/phrases/search?q=${search}&page=1&limit=2`,
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setPhrases(result.data))
			.catch((error) => console.log('error', error));
	}, [token, search]);

	//Search languages
	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', token.data.token);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(
			process.env.REACT_APP_API_URL +
				`/phrases/search?language=${lang}&page=1&limit=2`,
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setPhrases(result.data))
			.catch((error) => console.log('error', error));
	}, [token, lang]);

	//Add Bookmarks
	const saveAPI = async (id) => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', token.data.token);
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
		const saveId = evt.currentTarget.dataset.saveId - 0;
		saveAPI(saveId);
		alert.success(`Saved Phrases`);
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
								autoComplete='off'
								autoCapitalize='off'
								onChange={(evt) => setSearch(evt.target.value.trim())}
							/>
							<select
								className='phrases-heading__select'
								value={lang}
								name='select'
								onChange={(evt) => setLang(evt.target.value)}>
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
														{row.user.fullname}
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
											<button
												className='delete-btn'
												data-save-id={row.id}
												onClick={() => setShow((prev) => !prev)}>
												<img
													src={deleteIcon}
													alt='Delete icon'
													width='17'
													height='17'
												/>
											</button>

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

										<PhrasesModal
											id={row.id}
											show={show}
											onClose={() => setShow(false)}
										/>
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
