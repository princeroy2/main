// Function to fetch news by type (without checking the title)
const NewstypeApi = async (news_type,page) => {
    try {
      // Fetch the news items using the given news type (like 'bitcoin', 'dogecoin', etc.)
      const response = await fetch(`https://nativeapi.site/api/get_news_type/?page=${page}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ news: news_type }), // Send the news type in the request body
      });
  
      if (!response.ok) {
        // Log the response text for more details
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }
  
      // Parse the response JSON
      const data = await response.json();

      return { data, error: null };
  
    } catch (error) {
      console.error('Error fetching news:', error);
      return { data: null, error: error.message }; // Return no data and the error message
    }
  };
  
  export default NewstypeApi;
  