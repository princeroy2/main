import Slider from "@/components/slider";
import { apiCall } from "@/apicallhook/Newsapi";
import TopNews from "@/components/top_news";
import News_TypeButton from "@/components/newstypes_Button";
import MainNews2 from "@/components/main_news2";
import NewstypeApi from "@/apicallhook/newstype";
import NewsTypedata from "@/components/newstypedata";
import Head from "next/head";

// Static content for each blockchain type
const staticContent = {
 
  bitcoin: {
    title: 'Bitcoin - Latest News, Analysis, and Price Predictions',
    description: 'Get the latest Bitcoin news, price predictions, BTC analysis, and market insights.',
    keywords: 'Bitcoin, BTC news, Bitcoin price prediction, BTC analysis, Bitcoin news, cryptocurrency, blockchain',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/bitcoin',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  ethereum: {
    title: 'Ethereum - Latest Updates, News, and Price Predictions',
    description: 'Stay informed with the latest Ethereum news, ETH price analysis, and updates on Ethereum 2.0.',
    keywords: 'Ethereum, ETH news, Ethereum price prediction, ETH analysis, blockchain, cryptocurrency',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/ethereum',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  blockchain: {
    title: 'Blockchain - Latest News, Trends, and Insights',
    description: 'Explore the latest news and developments in blockchain technology and its applications in various industries.',
    keywords: 'blockchain, blockchain news, blockchain technology, decentralized, crypto blockchain, blockchain insights',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/blockchain',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  defi: {
    title: 'DeFi - Latest Decentralized Finance News and Price Updates',
    description: 'Explore the world of Decentralized Finance (DeFi) with live prices, market trends, DeFi coins, and upcoming projects.',
    keywords: 'DeFi, decentralized finance, DeFi news, DeFi price prediction, cryptocurrency, DeFi projects',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/defi',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  nfts: {
    title: 'NFTs - Latest News and Market Trends for Non-Fungible Tokens',
    description: 'Stay updated with the latest news and trends in the NFT market, including new NFT projects and top NFT artists.',
    keywords: 'NFTs, non-fungible tokens, NFT news, NFT marketplace, NFT trends, NFT prices',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/nfts',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  cryptocurrency: {
    title: 'Cryptocurrency - Latest News and Price Predictions',
    description: 'Stay up to date with the latest cryptocurrency news, price predictions, and analysis from various blockchain projects.',
    keywords: 'cryptocurrency, crypto news, cryptocurrency analysis, price predictions, blockchain news',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/cryptocurrency',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  altcoin: {
    title: 'Altcoin - Latest News, Trends, and Price Predictions',
    description: 'Get the latest altcoin news, price predictions, and analysis of emerging altcoins in the crypto market.',
    keywords: 'altcoin, altcoin news, cryptocurrency, altcoin price prediction, market analysis, crypto news',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/altcoin',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  staking: {
    title: 'Staking - News, Rewards, and Staking Opportunities in Crypto',
    description: 'Discover the latest news and trends in staking, including staking rewards and the best opportunities in the crypto space.',
    keywords: 'staking, crypto staking, staking rewards, cryptocurrency, DeFi staking, staking opportunities',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/staking',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  dao: {
    title: 'DAO - Decentralized Autonomous Organizations News and Insights',
    description: 'Explore the latest developments in Decentralized Autonomous Organizations (DAOs), governance, and their role in the crypto ecosystem.',
    keywords: 'DAO, decentralized autonomous organizations, crypto governance, blockchain governance, DAO news',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/dao',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
  mining: {
    title: 'Mining - Latest News, Insights, and Cryptocurrency Mining Trends',
    description: 'Stay up to date with the latest news and trends in cryptocurrency mining, mining hardware, and mining pools.',
    keywords: 'mining, cryptocurrency mining, crypto mining news, mining hardware, mining pools, crypto mining insights',
    specificImage: '/images/ii.png',
    canonicalUrl: 'https://crptonews.com/news/mining',
    author: 'Crypto News Team',
    publisher: 'Crypto News',
    datePublished: '2025-02-20',
  },
};

// Dynamically generate metadata based on 'news_name' (e.g., Bitcoin, DeFi, etc.)
export async function generateMetadata({ params }) {
  const {name} =await params
  const news_name = name.toLowerCase(); // Extract dynamic parameter 'name' from URL and make it lowercase

  // Check if the category exists in the staticContent
  const categoryContent = staticContent[news_name];

  // If the category is found, generate the metadata
  if (categoryContent) {
    return {
      title: categoryContent.title,
      description: categoryContent.description,
      keywords: categoryContent.keywords,
      openGraph: {
        title: categoryContent.title,
        description: categoryContent.description,
        image: categoryContent.specificImage,
        url: `https://crptonews.com/${news_name}`,
        type: 'website',
        locale: 'en_US',
        site_name: 'Crypto News',
      },
      twitter: {
        card: 'summary_large_image',
        title: categoryContent.title,
        description: categoryContent.description,
        image: categoryContent.specificImage,
      },
      robots: 'index, follow',
      canonical: categoryContent.canonicalUrl, // Adding the canonical URL
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: categoryContent.title,
        description: categoryContent.description,
        image: categoryContent.specificImage,
        author: {
          "@type": "Organization",
          name: categoryContent.author,
        },
        publisher: {
          "@type": "Organization",
          name: categoryContent.publisher,
        },
        datePublished: categoryContent.datePublished,
        dateModified: categoryContent.datePublished,
        mainEntityOfPage: categoryContent.canonicalUrl,
      },
    };
  }

  // If no category found (e.g., invalid name), return fallback metadata
  return {
    title: 'Crypto News - Latest Updates and Trends',
    description: 'Stay updated with the latest news, price predictions, and trends in the cryptocurrency world.',
    keywords: 'cryptocurrency news, market trends, Bitcoin, Ethereum, DeFi, NFTs, crypto analysis',
    openGraph: {
      title: 'Crypto News - Latest Updates and Trends',
      description: 'Stay updated with the latest cryptocurrency news, price predictions, and market trends.',
      image: '/images/default.jpg', // Default image URL
      url: 'https://crptonews.com',
      type: 'website',
      locale: 'en_US',
      site_name: 'Crypto News',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Crypto News - Latest Updates and Trends',
      description: 'Get the latest news and insights in the cryptocurrency market.',
      image: '/images/default.jpg', // Default image for Twitter card
    },
    robots: 'index, follow',
    canonical: 'https://crptonews.com',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: 'Crypto News',
      description: 'Get the latest cryptocurrency news, market trends, and price predictions.',
      url: 'https://crptonews.com',
    },
  };
}


export default async function Main({ params }) {
  const {name} =await params; // Extract dynamic parameter 'name' from URL
  const news_name=name
  const Apidata = await NewstypeApi(news_name, 1); // Fetch API data for the selected category
  const filteredArticles = Apidata.data.results;
  const current_page = Apidata.data.current_page;
  const total_pages = Apidata.data.total_pages;

  return (
    <>
      <Head>
        <title>{`Latest ${news_name.charAt(0).toUpperCase() + news_name.slice(1)} News | CryptoNews`}</title>
        <meta name="description" content={`Stay up to date with the latest ${news_name} news, blockchain updates, and market trends.`} />
        <meta property="og:title" content={`Latest ${news_name.charAt(0).toUpperCase() + news_name.slice(1)} News | CryptoNews`} />
        <meta property="og:description" content={`Stay up to date with the latest ${news_name} news, blockchain updates, and market trends.`} />
        <meta property="og:image" content="/default-image.jpg" />
        <meta property="og:url" content={`https://crptonews.com/${news_name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Latest ${news_name.charAt(0).toUpperCase() + news_name.slice(1)} News | CryptoNews`} />
        <meta name="twitter:description" content={`Stay up to date with the latest ${news_name} news, blockchain updates, and market trends.`} />
        <meta name="twitter:image" content="/default-image.jpg" />
      </Head>

 
      <NewsTypedata news_name={news_name} serverData={filteredArticles} total_pages={total_pages} current_page={current_page} />


    
    </>
  );
}
