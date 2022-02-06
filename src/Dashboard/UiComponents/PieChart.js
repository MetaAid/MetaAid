import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const colorsBack = require('./ColorList')
function PieChart() {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels:{
                    family:{
                        family:'Helvetica'
                    }
                }
            },
            title: {
                display: false
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Months',
                data: [12, 5, 8, 7, 8, 9, 7],
                backgroundColor: [
                    colorsBack.ColorList[1],
                    colorsBack.ColorList[2],
                    colorsBack.ColorList[3],
                    colorsBack.ColorList[4],
                    colorsBack.ColorList[5],
                    colorsBack.ColorList[6],
                    colorsBack.ColorList[7]
                ],
            }
        ],
    };

    return (
        <Pie options={options} data={data} />
    );
}

export default PieChart;
