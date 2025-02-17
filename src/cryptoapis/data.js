const fetchCurrentPrice = async (symbol) => {
    const res = await fetch(`/api/getCurrentPrice?symbol=${symbol}`);
    const data = await res.json();
    
    if (res.ok) {
      console.log(`Current price for ${symbol}: ${data.price}`);
    } else {
      console.error(data.message); // Symbol not available
    }
  };
  
  // Example usage:
fetchCurrentPrice('BTCUSDT'); // Fetch price for BTCUSDT
  