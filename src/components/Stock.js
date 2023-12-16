// src/components/Stock.js
import React from 'react';

const Stock = ({ stock }) => {
  return (
    <div>
      <h3>{stock.symbol}</h3>
      <p>{stock.name}</p>
      <p>Price: {stock.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Stock;
