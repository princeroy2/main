import React from 'react';
import Market_page from '@/components/market';
export const dynamic = 'force-dynamic'

export const metadata  = {
  title: "Top Cryptocurrency Market Data | Live Prices, Market Cap & Volume",
  description: "Explore the latest top cryptocurrency prices, market cap, volume, and other live data. Stay updated on Bitcoin, Ethereum, and all major coins.",
  keywords: "cryptocurrency market, top cryptocurrencies, crypto prices, market cap, live crypto data, bitcoin, ethereum, altcoins, coin market data, crypto volume",
  author: "CryptoMarket Team",
  robots: "index, follow",
  image: "/images/favicon.png",
  canonical: "https://crptonews.com/market",
  og: {
    title: "Top Cryptocurrency Market Data | Live Prices, Market Cap & Volume",
    description: "Explore the latest top cryptocurrency prices, market cap, volume, and other live data.",
    image: "/images/favicon.png",
    type: "website",
    url: "https://crptonews.com/market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Cryptocurrency Market Data | Live Prices, Market Cap & Volume",
    description: "Explore the latest top cryptocurrency prices, market cap, volume, and other live data.",
    image: "/images/favicon.png",
    imageAlt: "Cryptocurrency Market Data",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Website",
    "url": "https://crptonews.com/market",
    "name": "CryptoMarket",
    "description": "Explore live cryptocurrency prices, market data, and more.",
    "publisher": {
      "@type": "Organization",
      "name": "CryptoMarket",
      "logo": {
        "@type": "ImageObject",
        "url": "https://crptonews.com/images/favicon.png",
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
