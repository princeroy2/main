// Function to fetch news by type (without checking the title)
const MarketCoinsData = async (page=1) => {
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/get_All_market_coins?page=${page}`)
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }
  
      // Parse the response JSON
      const data = await response.json();

      return data
  
    } catch (error) {
      console.error('Error fetching news:', error);
      return { data: null, error: error.message }; // Return no data and the error message
    }
  };
  
  export default MarketCoinsData;
  


  const DefiDatanews = async (page=1) => {
    console.log(page)
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/defi_All_market_coins?page=${page}`)
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
      return data
  
    } catch (error) {
      console.error('Error fetching news:', error);
      return { data: null, error: error.message }; // Return no data and the error message
    }
  };
  
  export {DefiDatanews};

  const newscoinsDatanews = async (page=1) => {
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/New_market_coins?page=${page}`)
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }
  
      // Parse the response JSON
      const data = await response.json();

      return data
  
    } catch (error) {
      console.error('Error fetching news:', error);
      return { data: null, error: error.message }; // Return no data and the error message
    }
  };
  
  export {newscoinsDatanews};


  const coinsearch = async (search) => {
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/coin_searchname?search=${search}`)
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch news: ${response.status}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
      console.log(data)

      return data
  
    } catch (error) {
      console.error('Error fetching news:', error);
      return { data: null, error: error.message }; // Return no data and the error message
    }
  };
  export {coinsearch}

