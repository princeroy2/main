import React from 'react';
import Market_page from '@/components/market';
import Head from 'next/head'; // Import the Head component
export const dynamic = 'force-dynamic'

export const metadata  = {
  title: "Top Cryptocurrency Market Data | Live Prices, Market Cap & Volume",
  description: "Explore the latest top cryptocurrency prices, market cap, volume, and other live data. Stay updated on Bitcoin, Ethereum, and all major coins.",
  keywords: "cryptocurrency market, top cryptocurrencies, crypto prices, market cap, live crypto data, bitcoin, ethereum, altcoins, coin market data, crypto volume",
  author: "CryptoMarket Team",
  robots: "index, follow",
  image: "/images/crypto_market_image.png",
  canonical: "https://yourwebsite.com/market",
  og: {
    title: "Top Cryptocurrency Market Data | Live Prices, Market Cap & Volume",
    description: "Explore the latest top cryptocurrency prices, market cap, volume, and other live data.",
    image: "/images/crypto_market_image.png",
    type: "website",
    url: "https://yourwebsite.com/market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Cryptocurrency Market Data | Live Prices, Market Cap & Volume",
    description: "Explore the latest top cryptocurrency prices, market cap, volume, and other live data.",
    image: "/images/crypto_market_image.png",
    imageAlt: "Cryptocurrency Market Data",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Website",
    "url": "https://yourwebsite.com/market",
    "name": "CryptoMarket",
    "description": "Explore live cryptocurrency prices, market data, and more.",
    "publisher": {
      "@type": "Organization",
      "name": "CryptoMarket",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourwebsite.com/images/logo.png",
        "alt": "CryptoMarket Logo",
      },
    },
    "sameAs": [
      "https://twitter.com/yourtwitter",
      "https://facebook.com/yourfacebook",
    ],
  },
};

const Page = () => {
  return (
    <>
    

      <Market_page />
    </>
  );
};

export default Page;
