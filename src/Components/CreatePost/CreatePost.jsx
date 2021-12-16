import React from 'react';
import './CreatePost.scss';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Search from '../../Assets/Image/Search-icon.svg';
import Vector from '../../Assets/Image/create-post-vector.svg';

function CreatePost() {
	const navigate = useNavigate();
	const alert = useAlert();

	const [input, setInput] = React.useState({});

	const apiPost = async () => {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			fullname: 'Jakhongirov',
			title: input.body,
			body: input.body,
			language: 'en',
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		await fetch(process.env.REACT_APP_API_URL + '/phrases', requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	const handleChange = (evt) => {
		evt.persist();
		setInput((input) => ({
			...input,

			[evt.target.name]: evt.target.value.trim(),
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		apiPost();
		console.log(input);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='container'>
					<div className='createpost-heading'>
						<button
							className='createpost-heading__vector'
							onClick={() => navigate(-1)}>
							<img src={Vector} alt='Vector icon' />
						</button>
						<h1 className='createpost-heading__title'>Create post</h1>
					</div>
					<textarea
						className='createpost-textarea'
						placeholder='Write something...'
						name='body'
						onChange={handleChange}
					/>
					<h2 className='createpost-small__title'>Select the hashtags </h2>
					<div>
						<button className='createpost-phrase'>#Phrase</button>
						<button className='createpost-phrase__name'>
							#Phrase name
						</button>
						<button className='createpost-search'>
							<img src={Search} alt='Search icon' />
						</button>
					</div>
					<select
						className='createpost-select'
						name='hashtags'
						onChange={handleChange}>
						<option className='createpost-selected' value='1' selected>
							Everyone can reply
						</option>
						<option className='createpost-select__option' value='2'>
							Only selected
						</option>
						<option className='createpost-select__option' value='3'>
							No one can reply
						</option>
					</select>
					<button
						className='createpost-btn'
						onClick={() =>
							setTimeout(() => {
								navigate('/');
								alert.success('Created Phrases');
							}, 1500)
						}>
						Post
					</button>
				</div>
			</form>
		</>
	);
}

export default CreatePost;
