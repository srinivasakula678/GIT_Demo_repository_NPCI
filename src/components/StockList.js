// src/components/StockList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stock from './Stock';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from a hypothetical API
    axios.get('https://api.example.com/stocks')
      .then(response => setStocks(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {stocks.map(stock => (
          <Stock key={stock.symbol} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default StockList;
