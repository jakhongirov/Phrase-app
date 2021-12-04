import React from 'react';
import './Modal.scss';
import { useNavigate } from 'react-router-dom';

function Modal({ show, onClose, user }) {
	const navigate = useNavigate();

	// const [input, setInput] = React.useState({});

	const apiPost = async () => {
		var myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzNTkyNDcxMX0.-jVzkIhtVb1CHot8YBQTe7_EiQjQawqCo7Tuem1XXHo',
		);
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			id: user.id,
		});

		var requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		await fetch(process.env.REACT_APP_API_URL + '/users', requestOptions)
			.then((response) => response.json())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		apiPost();
	};

	if (!show) {
		return null;
	}
	return (
		<div className='modal' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<div className='modal-header'>
					<h4 className='modal-title'>Are you sure delete this user?</h4>
				</div>

				<div className='modal-body'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem
				</div>

				<div className='modal-footer'>
					<button
						className='modal-btn modal-btn--cancel'
						onClick={onClose}>
						Cancel
					</button>

					<form onSubmit={handleSubmit}>
						<button
							className='modal-btn modal-btn--delete'
							onClick={() =>
								setTimeout(() => {
									navigate('/users');
								}, 1200)
							}>
							Delete
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Modal;
