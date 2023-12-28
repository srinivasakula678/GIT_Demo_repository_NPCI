// src/components/StockMarketDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const StockMarketDashboard = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Placeholder API endpoint
    const apiUrl = 'https://api.example.com/stocks';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();

    // For demonstration purposes, refresh data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  const chartData = {
    labels: stockData.map((data) => data.timestamp),
    datasets: [
      {
        label: 'Stock Price',
        data: stockData.map((data) => data.price),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Stock Market Dashboard</h2>
      <Line data={chartData} />
    </div>
  );
};

export default StockMarketDashboard;
