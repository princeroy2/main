import { apiCall } from './apicallhook/Newsapi';

const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};

export default async function sitemap() {
  // Fetch all the articles from the API
  const products = await apiCall();

  // Generate URLs for each article
  const urls = products.map((product) => ({
    url: `https://www.crptonews.com/${formatTitleForUrl(product.title)}/${product.id}`,
    lastModified: product.created_time,
    changeFreq: 'monthly',  // You can adjust based on how often the content updates
    priority: 0.8,
  }));

  // Generate homepage URL as well (this is where you list the latest news)
  const homepageUrl = {
    url: `https://www.crptonews.com`,
    lastModified: new Date(),  // This can be the time of the latest update or a static time
    changeFreq: 'daily', // Homepage usually updates daily
    priority: 1.0, // Highest priority
  };

  // Return a single sitemap with all URLs
  return [homepageUrl, ...urls];
}