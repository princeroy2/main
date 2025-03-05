// Function to fetch news by type (without checking the title)
const WhalesData2 = async () => {
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/data2/`,{
        next: {
          revalidate: 300, // Revalidate every 5 minutes (300 seconds)
        },
      })
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
  
  export default WhalesData2;
  
