import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const colorsBack = require('./ColorList')

function LineChart() {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
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
                borderColor: [
                    colorsBack.ColorList[1]
                ]
            }
        ],
    };

    return (
        <Line options={options} data={data} />
    );
}

export default LineChart;
