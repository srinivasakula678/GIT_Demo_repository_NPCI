// src/components/StockMarketDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockMarketDashboard = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Replace this URL with a real stock market API endpoint
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

  return (
    <div>
      <h2>Real-Time Stock Market Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              {/* Display more data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockMarketDashboard;
