import Market_pagename from '@/components/marketName';

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
  const { name } =await params;

  // Defining common metadata to avoid repetition
  const defaultImage = 'https://crptonews.com/images/ii.png'; // Change this to a real image URL
  const baseURL = 'https://crptonews.com';

  // Metadata for Defi Coins
  if (name === 'defi_coins') {
    return {
      title: 'Defi Coins - Live Prices, Market Cap & Upcoming Tokens',
      description: 'Discover the latest Defi coins with live prices, market cap, rankings, and upcoming token information.',
      keywords: 'Defi Coins, Live Prices, Defi Market Cap, Upcoming Defi Tokens, Defi Coin Rankings, Top Defi Coins',
      openGraph: {
        title: 'Defi Coins - Live Prices, Market Cap & Upcoming Tokens',
        description: 'Explore the top Defi coins with live prices, market cap, rankings, and upcoming token releases.',
        type: 'website',
        url: `${baseURL}/market/defi-coins`,
        images: [
          {
            url: 'https://crptonews.com.com/images/ii.png', // Change to relevant image URL
            width: 800,
            height: 600,
            alt: 'Defi Coins Market'
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@YourTwitterHandle',
        title: 'Defi Coins - Live Prices, Market Cap & Upcoming Tokens',
        description: 'Explore the top Defi coins with live prices, market cap, rankings, and upcoming tokens.',
        image: 'https://crptonews.com/images/ii.jpg', // Image URL for Twitter card
      },
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "Defi Coins - Live Prices & Market Trends",
        "description": "Get the latest updates on Defi coins, including live prices, market cap, and upcoming tokens.",
        "url": `${baseURL}/market/defi-coins`,
        "image": 'https://crptonews.com/images/ii.jpg', // Image URL for structured data
        "mainEntityOfPage": `${baseURL}/market/defi-coins`,
      }
    };
  }

  // Metadata for New Coins
  else if (name === 'new_coins') {
    return {
      title: 'New Crypto Coins - Latest Listings, Prices, Market Cap & Volume',
      description: 'Stay up-to-date with the latest coin listings, prices, volume, market cap, and upcoming coins.',
      keywords: 'New Coins, New Listings, Coin Price, Volume, Market Cap, Crypto New Coins, New Coin Listings',
      openGraph: {
        title: 'New Crypto Coins - Latest Listings, Prices, Market Cap & Volume',
        description: 'Discover the newest coins in the market with their latest prices, market cap, and volume.',
        type: 'website',
        url: `${baseURL}/market/new-coins`,
        images: [
          {
            url: 'https://crptonews.com/images/ii.jpg', // Change to relevant image URL
            width: 800,
            height: 600,
            alt: 'New Crypto Coins'
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@YourTwitterHandle',
        title: 'New Crypto Coins - Latest Listings, Prices, Market Cap & Volume',
        description: 'Stay updated with new coin listings, including prices, volume, market cap, and upcoming tokens.',
        image: 'https://crptonews.com/images/ii.jpg', // Image URL for Twitter card
      },
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "New Crypto Coins - Latest Listings & Price Updates",
        "description": "Find the latest new coin listings, along with their prices, market cap, volume, and future updates.",
        "url": `${baseURL}/new-coins`,
        "image": 'https://crptonews.com/images/ii.jpg', // Image URL for structured data
        "mainEntityOfPage": `${baseURL}/market/new-coins`,
      }
    };
  }

  // Fallback Default Metadata
  return {
    title: 'Crypto Market - Latest Coins and Prices',
    description: 'Explore the latest cryptocurrencies and their live prices, market trends, and rankings.',
    keywords: 'Cryptocurrency, Live Coin Prices, Market Trends, Crypto Market, Coin Rankings',
    openGraph: {
      title: 'Crypto Market - Latest Coins and Prices',
      description: 'Get the latest updates on cryptocurrencies, including live prices, market cap, and rankings.',
      type: 'website',
      url: `${baseURL}/market`,
      images: [
        {
          url: 'https://crptonews.com/images/ii.jpg', // Example image URL
          width: 800,
          height: 600,
          alt: 'Crypto Market'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@YourTwitterHandle',
      title: 'Crypto Market - Latest Coins and Prices',
      description: 'Stay up to date with the latest coins and market data in the cryptocurrency world.',
      image: 'https://crptonews.com/images/ii.jpg', // Image URL for Twitter card
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": "Crypto Market - Latest Coins & Market Data",
      "description": "Find the most up-to-date information about cryptocurrency prices, rankings, and trends.",
      "url": `${baseURL}/market`,
      "image": 'https://crptonews.com/images/ii.jpg', // Image URL for structured data
      "mainEntityOfPage": `${baseURL}/market`,
    }
  };
}

const Market_page = async ({ params }) => {
  const {name} = await params

  return (
    <Market_pagename name={name} />
  );
};

export default Market_page;
