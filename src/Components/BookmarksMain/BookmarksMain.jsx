import React from 'react';
import './BookmarksMain.scss';
import backIcon from '../../Assets/Image/arrow-left-back.svg';

function BookmarksMain() {
	const [save, setSave] = React.useState([]);

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
			process.env.REACT_APP_API_URL + '/saveds?page=1&limit=3',
			requestOptions,
		)
			.then((response) => response.json())
			.then((result) => setSave(result.data))
			.catch((error) => console.log('error', error));
	}, []);
	return (
		<>
			<main className='main'>
				<section className='bookmarks'>
					<div className='container'>
						<div className='bookmarks__box-top'>
							<button className='bookmarks__back-btn'>
								<img
									src={backIcon}
									alt='arrow left back icon'
									width='24'
									height='24'
								/>
							</button>
							<h1 className='bookmarks__heading'>Bookmarks</h1>
							<p className='bookmarks__nums'>655</p>
						</div>

						<div className='user'>
							<img
								className='user__profile'
								src='https://via.placeholder.com/80'
								alt='templete img'
								width='80'
								height='80'
							/>
							<h2 className='user__name'>David Jones</h2>
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
													John Doe
												</strong>
												<span className='user__info user__info--font'>
													14***15
												</span>
											</div>
											<span className='date'>11.12.21</span>
										</div>
										<p className='post__info'>
											<strong>Lorem Ipsum -</strong> is simply dummy
											text of the printing and typesetting industry.
											Lorem Ipsum been industry's standard dummy.
										</p>
									</li>
								))}
						</ul>
					</div>
				</section>
			</main>

			<footer>
				<div className='container'>laijslchahcoac</div>
			</footer>
		</>
	);
}

export default BookmarksMain;
