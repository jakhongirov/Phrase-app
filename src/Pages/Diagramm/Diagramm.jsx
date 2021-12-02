import React from "react";
import './Diagramm.scss';
import { Bar } from 'react-chartjs-2';

function Diagramm() {
  return (
    <>
      <Bar
        data={{
          labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],

          datasets: [{
            label: 'Diagramm',
            data: [22, 28, 13, 48, 7, 27, 38],
            backgroundColor: '#3D58E8',
            barThickness: 20
          }]
        }}

        options={{
          scale: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
          }
        }}
      >

    </Bar>
    </>
  );
}

export default Diagramm;