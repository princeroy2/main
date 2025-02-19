// app/new-coin-listing/page.js (or wherever your page is)

import Ico2 from '@/components/ico_token2';
import Upcoming2 from '@/components/upcoming2';
import Head from 'next/head';

// Metadata for SEO
export const metadata = {
  title: "New Coins Listing - All Upcoming Crypto Coins & Tokens",
  description: "Explore the latest new coins and token listings on CoinMarketCap and CoinGecko. Stay updated with all the new and trending cryptocurrencies and their presale opportunities.",
  keywords: "new coins, crypto coins, new coin listings, CoinMarketCap, CoinGecko, upcoming tokens, token sale, crypto news, new crypto coins, new cryptocurrencies, coin listing, cryptocurrency presale",
  author: "Crypto News Team", // Adjust with your team name or company
  robots: 'index, follow', // Ensures search engines index the page

  // Open Graph (OG) Tags for social sharing
  openGraph: {
    title: "New Coins Listing - All Upcoming Crypto Coins & Tokens",
    description: "Find the latest new coin listings, presale opportunities, and crypto projects. Stay updated with CoinMarketCap and CoinGecko listings.",
    image: 'https://crptonews.com/images/logo.png', // Default image for the new coin listing page
    url: 'https://crptonews.com/new-coins',  // The main new coin listings page URL
    type: 'website',
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image', // Large image summary card
    title: "New Coins Listing - All Upcoming Crypto Coins & Tokens",
    description: "Discover new coins and upcoming token listings. Stay ahead with CoinMarketCap and CoinGecko updates.",
    image: 'https://crptonews.com/images/logo.png', // Replace with your default image
  },

  charset: 'UTF-8',
  canonical: 'https://crptonews.com/new-coins', // Make sure this points to your actual new coin listing page

  // Structured Data for better SEO visibility
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "New Coins Listing - Upcoming Crypto Coins & Tokens",
    "description": "Explore new cryptocurrency listings, presale opportunities, and coin tokens, including updates from CoinMarketCap and CoinGecko.",
    "image": 'https://crptonews.com/images/logo.png', // Replace with a valid image URL
    "url": 'https://crptonews.com/new-coins', // Replace with your new coin listing page URL
    "offers": {
      "@type": "Offer",
      "url": 'https://crptonews.com/new-coins',
      "priceCurrency": "USD", // Adjust based on your pricing currency (if relevant)
      "price": "0.10",  // Adjust token price (if relevant)
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    }
  }
};

export default function NewCoinListingPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <div>
        <Upcoming2 />
      </div>
    </>
  );
}
