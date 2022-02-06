import React from 'react';
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const colorsBack = require('./ColorList');
function BarChart() {
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
                label: 'Dataset 1',
                data: [12, 1, 1, 7, 8, 9, 2],
                backgroundColor: colorsBack.ColorList[1]
            },
            {
                label: 'Dataset 2',
                data: [1, 2, 3, 4, 5, 1, 2, 9],
                backgroundColor: colorsBack.ColorList[2],
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    );
}

export default BarChart;
