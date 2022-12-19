import React from 'react';
import { Bar } from 'react-chartjs-2';

function CreateChart() {
    const labels = ['Teacher1','Teacher2','Teacher3','Teacher4','Teacher5','Teacher6','Teacher7','Teacher8','Teacher9',];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [312, 302, 310, 308, 288, 283, 308, 311, 205],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    const options = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false,
        },
    }

    return (
        <Bar options={options} data={data} 
             />
    )
}

export default CreateChart


/*
datasets: [
            {
                label: 'que 1',
                data: 312,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'que 2',
                data: 302,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'que 3',
                data: 310,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'que 4',
                data: 308,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'que 5',
                data: 288,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'que 6',
                data: 283,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'que 7',
                data: 308,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'que 8',
                data: 311,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'que 9',
                data: 205,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
*/