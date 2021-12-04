import React from 'react';
import { Bar } from 'react-chartjs-2';

function MonthDiagramm() {
	return (
		<>
			<Bar
				data={{
					labels: [
						'1 week',
						'2 week',
						'3 week',
						'4 week',
					],

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
		</>
	);
}

export default MonthDiagramm;
