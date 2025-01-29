export const IcoApiCall = async () => {
    const res = await fetch('https://nativeapi.site/api/ico/', {
      // Set cache behavior to cache the data and revalidate after 5 minutes
      next: {
        revalidate: 86400, // Revalidate every 5 minutes (300 seconds)
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const json = await res.json();
    return json;
  };
  