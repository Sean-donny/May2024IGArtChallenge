// components/BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

defaults.maintainAspectRatio = true;
defaults.responsive = true;

const BarChart = ({
  votingResults,
}: {
  votingResults: { label: string; value: number }[];
}) => {
  return (
    <div>
      <Bar
        data={{
          labels: votingResults.map(result => result.label),
          datasets: [
            {
              label: 'Voting Results',
              data: votingResults.map(result => result.value),
              backgroundColor: [
                'rgba(230, 28, 179, 0.8)',
                'rgba(115, 138, 243, 0.8)',
                'rgba(90, 121, 235, 0.8)',
                'rgba(88, 164, 201, 0.8)',
              ],
              borderColor: [
                'rgba(230, 28, 179, 1)',
                'rgba(115, 138, 243, 1)',
                'rgba(90, 121, 235, 1)',
                'rgba(88, 164, 201, 1)',
              ],
              borderWidth: 4,
            },
          ],
        }}
        options={{
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
