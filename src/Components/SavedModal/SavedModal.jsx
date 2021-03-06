import React from 'react';
import { useAlert } from 'react-alert';
import useToken from '../../Hooks/useToken';

function SavedModal({ show, onClose, id }) {
	const [token] = useToken();
	const alert = useAlert();

	const deleteAPI = async (id) => {
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

	const handleDeleted = (evt) => {
		evt.preventDefault();
		deleteAPI(id);
		alert.success('deleted Bookmark');
		setTimeout(onClose, 500);
	};

	if (!show) {
		return null;
	}
	return (
		<div className='modal' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<div className='modal-header'>
					<h4 className='modal-title'>
						Are you sure delete this Bookmark?
					</h4>
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

					<button
						className='modal-btn modal-btn--delete'
						onClick={handleDeleted}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default SavedModal;
