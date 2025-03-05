'use client'
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';

// Import necessary Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components you want to use in your chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Connect to the Binance WebSocket API
const socket = io('wss://stream.binance.com:9443/ws/btcusdt@kline_5m');

const CryptoGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Time labels for the X-axis
    datasets: [
      {
        label: 'BTCUSDT Price', // Label for the data series
        data: [], // Data for the Y-axis (prices)
        fill: false, // Don't fill the area below the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        tension: 0.1, // Line tension for smoothness
      },
    ],
  });

  useEffect(() => {
    // Listen for incoming WebSocket data
    socket.on('message', (data) => {
      const parsedData = JSON.parse(data);
      const closePrice = parsedData.k.c;  // Closing price (c)
      const closeTime = parsedData.k.t;   // Close time (t)
      
      // Format the time to display as a label on the X-axis
      const formattedTime = new Date(closeTime).toLocaleTimeString();

      // Update chartData state
      setChartData((prevData) => ({
        labels: [...prevData.labels, formattedTime], // Add new timestamp to labels
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, parseFloat(closePrice)], // Add new closing price
          },
        ],
      }));
    });

    // Clean up WebSocket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>BTCUSDT Real-Time Price</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoGraph;
