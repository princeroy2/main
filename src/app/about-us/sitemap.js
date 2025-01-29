
const staticPages = [
  { url: '/about-us', time: '2025-01-25' },
  { url: '/contact-us', time: '2025-01-25' },
  { url: '/term-condition', time: '2025-01-25' },
  { url: '/privacy-policy', time: '2025-01-25' },
  { url: '/ico', time: '2025-01-25' },
];

// Generate the sitemap
export default async function sitemap() {
  // Generate the static URLs for the sitemap
  const urls = staticPages.map((page) => ({
    url: `https://www.crptonews.com${page.url}`,  // Ensure full URL
    lastModified: page.time,  // Last modified date
    changeFreq: 'monthly',  // Static pages change less frequently
    priority: 0.6,  // Lower priority for static pages
  }));

  // Homepage URL (always included in sitemap)
  const homepageUrl = {
    url: `https://www.crptonews.com`,
    lastModified: new Date(),  // Current date for homepage
    changeFreq: 'daily',  // Homepage updates more frequently
    priority: 1.0,  // Highest priority for homepage
  };

  // Return the homepage URL + static pages
  return [homepageUrl, ...urls];
}
