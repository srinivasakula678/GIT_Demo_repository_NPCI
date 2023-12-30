// src/components/StockMarketDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const StockMarketDashboard = () => {
  const [stockData, setStockData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    // Placeholder API endpoint
    const apiUrl = 'https://api.example.com/stocks';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setStockData(response.data);
        setFilteredStocks(response.data); // Initialize filtered stocks with all stocks
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();

    // For demonstration purposes, refresh data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Update filtered stocks when search term changes
    const filtered = stockData.filter((stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStocks(filtered);
  }, [searchTerm, stockData]);

  const chartData = {
    labels: filteredStocks.map((data) => data.timestamp),
    datasets: [
      {
        label: 'Stock Price',
        data: filteredStocks.map((data) => data.price),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
          },
        },
      ],
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div>
      <h2>Stock Market Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Search by symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default StockMarketDashboard;
