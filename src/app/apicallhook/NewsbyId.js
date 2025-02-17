// Function to format title for the URL (slug-style format)
const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-');          // Remove consecutive hyphens
};

// Function to fetch news by ID and match the title
const getNewsById = async (newsId, Title) => {
  try {
    // Fetch the news item using the given ID
    const response = await fetch('https://nativeapi.site/api/getnews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: newsId }), // Send the news ID in the request body
    });

    // Log the response status and headers for debugging
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      // Log the response text for more details
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    // Parse the response JSON
    const data = await response.json();

    // Format the title for comparison
    const formattedTitle = formatTitleForUrl(data.title);

    // Compare the formatted title with the provided Title
    if (formattedTitle === Title) {
      return { data, error: null }; // Return the data if titles match
    } else {
      return { data: null, error: 'Title mismatch' }; // Return error if titles don't match
    }

  } catch (error) {
    console.error('Error fetching news by ID:', error);
    return { data: null, error: error.message }; // Return no data and the error message
  }
};

export default getNewsById;
