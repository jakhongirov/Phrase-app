import React from 'react';
import { Bar } from 'react-chartjs-2';
import useToken from '../../Hooks/useToken';

function MonthDiagramm() {
	const [token] = useToken();
	const [state, setState] = React.useState();

	React.useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append('Authorization', token.data.token);

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(process.env.REACT_APP_API_URL + '/phrases/monthly/' + token.data.user.id, requestOptions)
			.then((response) => response.json())
			.then((result) => setState(result.data))
			.catch((error) => console.log('error', error));
	}, [token]);

	return (
		<>
			<Bar
				data={{
					labels: ['1 week', '2 week', '3 week', '4 week'],

					datasets: [
						{
							label: '',
							data: [22, 28, 13, 48, 7, 27, 38],
							backgroundColor: '#3D58E8',
							barThickness: 20,
						},
					],
				}}
				options={{
					scale: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				}}></Bar>

			<ul className='total-phrases'>
				<li className='total-phrases__item'>
					<p className='total-phrases__text'>
						Total phrases -
						<span className='total-phrases__span'>
							{' '}
							{state?.total_prases}
						</span>
					</p>
				</li>

				<li className='total-phrases__item'>
					<p className='total-phrases__text'>
						Added phrases -
						<span className='total-phrases__span'>
							{' '}
							{state?.current_phrases}{' '}
						</span>
					</p>
				</li>
			</ul>
		</>
	);
}

export default MonthDiagramm;
