import React from 'react';
import './Diagramm.scss';
import { Bar } from 'react-chartjs-2';
import useToken from '../../Hooks/useToken';
//////
// import Login from '../Login/Login';
// import { useQuery } from 'react-query';
// import { useLocation } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
////////

function Diagramm() {
	const [token] = useToken();
	const [users, setUsers] = React.useState();
	/////////////////////////////////////////////////////////////

	// const { pathname } = useLocation();

	// function findStatus(pathname) {
	// 	if (pathname === '/chart-stat') {
	// 		return 'week';
	// 	} else {
	// 		return '';
	// 	}
	// }

	// const { data: graph } = useQuery({
	// 	queryKey: 'chart-stat-week',
	// 	queryFn: () => {
	// 		return Login(findStatus(pathname));
	// 	},
	// });

	// let labelData = graph && graph.map((item) => item.week);
	// let datasetData = graph && graph.map((item) => item.entery_sum);

	// const data = {
	// 	labels: labelData,
	// 	datasets: [
	// 		{
	// 			label: '',
	// 			data: datasetData,
	// 			backgroundColor: '#3D58E8',
	// 			barThickness: 20,
	// 		},
	// 	],
	// };

	///////////////////////////////////////////

	React.useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', token.data.token);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(process.env.REACT_APP_API_URL + '/phrases/weekly/' + token.data.user.id, requestOptions)
			.then((response) => response.json())
			.then((result) => setUsers(result.data))
			.catch((error) => console.log('error', error));
	}, [token]);
console.log(token.data.user.id);
	
	return (
		<>
			<Bar
				data={{
					labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],

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

			{/* <Line data={data} /> */}

			<ul className='total-phrases'>
				<li className='total-phrases__item'>
					<p className='total-phrases__text'>
						Total phrases -
						<span className='total-phrases__span'>
							{' '}
							{users?.total_prases}
						</span>
					</p>
				</li>

				<li className='total-phrases__item'>
					<p className='total-phrases__text'>
						Added phrases -
						<span className='total-phrases__span'>
							{' '}
							{users?.current_phrases}{' '}
						</span>
					</p>
				</li>
			</ul>
		</>
	);
}

export default Diagramm;
