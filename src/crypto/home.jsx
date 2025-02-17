'use client'
import { useState, useEffect } from 'react';

const Home = ({ coinName }) => {
  const [price, setPrice] = useState(null);

  const getPrice = (coinName) => {
    console.log(coinName)
    const formattedSymbol = `${coinName.toLowerCase()}usdt`; // Format the coin name to match the API

    // Create WebSocket connection for the given coin symbol
    const ws = new WebSocket(`wss://data-stream.binance.vision:443/ws/${formattedSymbol}@kline_5m`);

    ws.onopen = () => {
      console.log(`Connected to ${formattedSymbol}`);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.e === 'kline') {
        const currentPrice = data.k.c; // Get the current price
        setPrice(currentPrice); // Set the state with the current price
        console.log(`${formattedSymbol} current price: ${currentPrice}`);
      } else {
        console.error(`Unexpected data format for ${formattedSymbol}:`, data);
      }
    };

    ws.onerror = (error) => {
      console.error(`Error on WebSocket for ${formattedSymbol}:`, error);
    };

    ws.onclose = () => {
      console.log(`Connection closed for ${formattedSymbol}`);
    };
  };

  // When the component mounts, get the price for the given coinName
  useEffect(() => {
    if (coinName) {
      getPrice(coinName);
    }
  }, [coinName]);

  return <span>{price ? `$${price}` : 'Loading...'}</span>;
};

export default Home;
