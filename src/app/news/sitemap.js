// import { blockchainData } from "@/components/newstypes_Button";  // Correct named import
  const blockchainData = [
  { id: 1, name: 'All',time:'2025-01-25' },
  { id: 2, name: 'Bitcoin',time:'2025-01-25' },
  { id: 3, name: 'Ethereum',time:'2025-01-25' },
  { id: 4, name: 'Blockchain',time:'2025-01-25' },
  { id: 5, name: 'DeFi',time:'2025-01-25' },
  { id: 6, name: 'NFTs',time:'2025-01-25' },
  { id: 7, name: 'Cryptocurrency',time:'2025-01-25' },
  { id: 8, name: 'Altcoin',time:'2025-01-25' },
  { id: 9, name: 'Staking',time:'2025-01-25' },
  { id: 10, name: 'DAO',time:'2025-01-25' },
  { id: 11, name: 'Mining' ,time:'2025-01-25'},
];


// Assuming your API provides a way to get the total number of articles
export async function generateSitemaps() {
  const totalNewsCount = blockchainData.length;

  const totalPages = Math.ceil(totalNewsCount / 50000);

  const sitemapPages = [];
  for (let id = 0; id < totalPages; id++) {
    sitemapPages.push({ id });
  }

  return sitemapPages;
}

export default async function sitemap({ id }) {
  // if (!Array.isArray(blockchainData)) {
  //   console.error("blockchainData is not an array:", blockchainData);
  //   return [];
  // }

  const start = id * 50000;
  const end = Math.min(start + 50000, blockchainData.length);

  const pageData = blockchainData.slice(start, end);

  const urls = pageData.map((product) => ({
    url: `https://www.crptonews.com/news/${product.name}/`,
    lastModified: product.time,
    changeFreq: 'daily',
    priority: 0.8,
  }));

  const homepageUrl = {
    url: `https://www.crptonews.com`,
    lastModified: new Date(),
    changeFreq: 'daily',
    priority: 1.0,
  };

  return [homepageUrl, ...urls];
}



