import React from 'react';
import { Bar } from 'react-chartjs-2';

function YearDiagramm() {
	return (
		<>
			<Bar
				data={{
					labels: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Seb',
						'Oct',
						'Nov',
						'Dec',
					],

					datasets: [
						{
							label: '',
							data: [22, 28, 13, 48, 7, 27, 38, 4, 41, 45, 44, 85],
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
		</>
	);
}

export default YearDiagramm;
