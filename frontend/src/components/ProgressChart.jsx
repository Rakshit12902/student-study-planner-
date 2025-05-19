// src/components/Dashboard/ProgressChart.jsx
import React from 'react';

<<<<<<< HEAD
const ProgressChart = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 rounded">
      <p className="text-gray-500">Progress Chart Component</p>
    </div>
  );
};

export default ProgressChart;


import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = ({ subjects }) => {
  const data = {
    labels: subjects.map(subject => subject.name),
    datasets: [
      {
        data: subjects.map(subject => subject.hours_completed),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'right'
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} hours (${percentage}%)`;
          }
        }
      }
    }
  };

  return <Pie data={data} options={options} />;
};

export default ProgressChart;
=======
const ProgressChart = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 rounded">
      <p className="text-gray-500">Progress Chart Component</p>
    </div>
  );
};

export default ProgressChart;

>>>>>>> a87378f47ac3ca52f51d4a2c04239fe0ccdf12ca
