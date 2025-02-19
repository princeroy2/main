
const staticPages = [
  { url: '/about-us', time: '2025-01-25' },
  { url: '/about-app', time: '2025-01-25' },
  { url: '/contact-us', time: '2025-01-25' },
  { url: '/term-condition', time: '2025-01-25' },
  { url: '/privacy-policy', time: '2025-01-25' },
  { url: '/crypto-whales', time: '2025-01-25' },
  { url: '/new-listing', time: '2025-01-25' },
  { url: '/market/cryptocoin', time: '2025-01-25' },
  { url: '/market/upcoming-token', time: '2025-01-25' },
  { url: '/market/ico', time: '2025-01-25' },
  { url: '/market/defi_coin', time: '2025-01-25' },
  { url: '/market/new_coins', time: '2025-01-25' },
  { url: '/', time: '2025-01-25' },
  { url: '/market', time: '2025-01-25' },
  
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


// utils/sitemap-utils.js

// export async function sitemap() {
//   // Your logic to fetch URLs from your database or static data
//   const allUrls = [
//     // Example: dynamically generated URLs
//     { url: 'https://example.com/about-us', lastModified: new Date().toISOString() },
//     { url: 'https://example.com/contact-us', lastModified: new Date().toISOString() },
//     // Add more URLs as required
//   ];

//   // Generate the XML content
//   let content = '<?xml version="1.0" encoding="UTF-8"?>\n';
//   content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

//   allUrls.forEach((url) => {
//     content += `  <url>\n    <loc>${url.url}</loc>\n    <lastmod>${url.lastModified}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
//   });

//   content += '</urlset>';
//   return content;
// }

