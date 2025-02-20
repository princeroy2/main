const blockchainData = [
  { id: 1, name: 'All', time: '2025-01-25' },
  { id: 2, name: 'Bitcoin', time: '2025-01-25' },
  { id: 3, name: 'Ethereum', time: '2025-01-25' },
  { id: 4, name: 'Blockchain', time: '2025-01-25' },
  { id: 5, name: 'DeFi', time: '2025-01-25' },
  { id: 6, name: 'NFTs', time: '2025-01-25' },
  { id: 7, name: 'Cryptocurrency', time: '2025-01-25' },
  { id: 8, name: 'Altcoin', time: '2025-01-25' },
  { id: 9, name: 'Staking', time: '2025-01-25' },
  { id: 10, name: 'DAO', time: '2025-01-25' },
  { id: 11, name: 'Mining', time: '2025-01-25' },
];

export default async function sitemap() {
  // Generate URLs for each item in blockchainData
  const urls = blockchainData.map((item) => ({
    url: `https://www.crptonews.com/news/${item.name}/`,
    lastModified: item.time,
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

  // Combine the homepage URL with the blockchain URLs
  return [homepageUrl, ...urls];
}