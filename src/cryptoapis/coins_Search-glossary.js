
const Glossary_Searh = async (name) => {
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/coins_search/${name}/`)
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
  
  export default Glossary_Searh;
  
