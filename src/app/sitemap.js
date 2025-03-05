import { apiCall } from "@/apicallhook/Newsapi";
// Utility function to generate the URL-friendly title from the article's title
const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};

export default async function sitemap() {
  const allUrls = [];

  // Fetch the first page of the API to get `total_pages` and `current_page`
  const initialData = await apiCall(1);  // Fetch the first page
  const totalPages = initialData.total_pages || 1;
  
  // Generate homepage URL (the homepage has the highest priority)
  const homepageUrl = {
    url: `https://www.crptonews.com`,
    lastModified: new Date(),  // Static time for homepage, or can be dynamic
    changeFreq: 'daily',  // Homepage usually updates daily
    priority: 1.0, // Highest priority
  };
  
  // Add the homepage URL to the list
  allUrls.push(homepageUrl);

  // Loop through all pages to generate URLs dynamically
  for (let page = 1; page <= totalPages; page++) {
    // Fetch data for the current page
    const pageData = await apiCall(page);

    // Loop through articles and generate URLs using formatted title and ID
    const pageUrls = pageData.results.map((article) => {
      const formattedTitle = formatTitleForUrl(article.title);
      const articleUrl = `https://www.crptonews.com/${formattedTitle}/${article.id}`;
      
      return {
        url: articleUrl,  // Using formatted URL for each article
        lastModified: article.created_time,  // Last modification date of the article
        changeFreq: 'hourly',  // Indicating updates every hour
        priority: 0.8,  // Priority can vary based on your site's structure
      };
    });

    // Add page-specific URLs to the list
    allUrls.push(...pageUrls);
  }

  // Return all URLs as the sitemap
  return allUrls;
}