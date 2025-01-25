import { ArticleapiCall } from "../apicallhook/ArticleApi";

const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};

// Assuming your API provides a way to get the total number of articles
export async function generateSitemaps() {
  // Fetch data to get the total count of articles (if available)
  const articles  = await ArticleapiCall();  // Modify this to match how your API returns the count
  const totalNewsCount = articles.length
  // Calculate total pages based on 50,000 URLs per sitemap
  const totalPages = Math.ceil(totalNewsCount / 50000);  // 50,000 is the maximum URL limit for each sitemap
  
  const sitemapPages = [];
  
  for (let id = 0; id < totalPages; id++) {
    sitemapPages.push({ id });
  }

  return sitemapPages;
}

export default async function sitemap({ id }) {
  // Assuming the `id` is a page number for pagination
  const start = id * 50000;
  const end = start + 50000;

  // Fetch the list of articles from the API (with pagination)
  const products = await ArticleapiCall();  // Adjust based on your API's pagination parameters

  const urls = products.map((product) => ({
    url: `https://www.crptonews.com/blog/${formatTitleForUrl(product.title)}`,
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

  return [homepageUrl, ...urls];
}
