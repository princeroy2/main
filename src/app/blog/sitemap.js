import { ArticleapiCall } from "../apicallhook/ArticleApi";

const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};

export default async function sitemap() {
  // Fetch all articles from the API
  const articles = await ArticleapiCall();

  // Generate URLs for each article
  const articleUrls = articles.map((article) => ({
    url: `https://www.crptonews.com/blog/${formatTitleForUrl(article.title)}`,
    lastModified: article.created_time,
    changeFreq: 'monthly',  // Adjust based on how often the content updates
    priority: 0.8,
  }));

  // Add the homepage URL
  const homepageUrl = {
    url: `https://www.crptonews.com`,
    lastModified: new Date(),  // Use the current date or the latest update time
    changeFreq: 'daily',       // Homepage usually updates daily
    priority: 1.0,             // Highest priority
  };

  // Combine the homepage URL with the article URLs
  return [homepageUrl, ...articleUrls];
}