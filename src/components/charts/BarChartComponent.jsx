// BarChartComponent.js

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// ignore the warning : 'data' is missing in props validationeslintreact/prop-types
// it works, we are passing data from parrent as a prop
/* 
Overall, passing data from a parent component to a child component as a prop aligns 
with React's component-based architecture and helps create more modular, reusable, 
and maintainable code. So, it's perfectly fine to continue passing data to your 
ChartComponents as a prop from its parent component.
 */
// eslint-disable-next-line react/prop-types
const BarChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Store chart instance using useRef

  useEffect(() => {
    const createOrUpdateBarChart = () => {
      if (chartRef.current) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy(); // Use chartInstanceRef.current to access the chart instance
        }
        chartInstanceRef.current = new Chart(chartRef.current, {
          type: 'bar',
          data: data,
          options: {
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };

    createOrUpdateBarChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} id="myChart2" width="400" height="100"></canvas>;
};

export default BarChartComponent;