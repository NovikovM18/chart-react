import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

function Charts(props) {
  const [chartData, setChartData] = useState({datasets: [],});
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: props.labels,
      datasets: [
        {
          label: "CL WINNERS",
          data: props.data,
          borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Some title",
        },
      },
    });
  }, [props]);

  let activeCharts;
  if (props.radioOption === 'Line') {
    activeCharts = <Line options={chartOptions} data={chartData}/>;
  } else if (props.radioOption === 'Bar') {
    activeCharts = <Bar options={chartOptions} data={chartData} />;
  } else if (props.radioOption === 'Pie') {
    activeCharts = <Pie options={chartOptions} data={chartData} />;
  } else if (props.radioOption === 'Doughnut') {
    activeCharts = <Doughnut options={chartOptions} data={chartData} />;
  } else if (props.radioOption === 'PolarArea') {
    activeCharts = <PolarArea options={chartOptions} data={chartData} />;
  } else if (props.radioOption === 'Radar') {
    activeCharts = <Radar options={chartOptions} data={chartData} />;
  }
  return (
    <div className="charts">
      {activeCharts}
    </div>
  );
}

export default Charts;
