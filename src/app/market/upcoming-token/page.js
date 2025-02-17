// app/ico-presale/page.js (or wherever your page is)

import Ico2 from '@/components/ico_token2';
import Upcoming2 from '@/components/upcoming2';
import Head from 'next/head';
// Metadata for SEO

export const metadata = {
  title: "ICO Presale - All Upcoming ICOs",
  description: "Explore all upcoming ICO presales and get early access to the best crypto projects. Secure your tokens now!",
  keywords: "ICO presale, upcoming ICO, token sale, blockchain, DAO, cryptocurrency, crypto presale, token offering, DeFi",
  author: "Your ICO Team", // Adjust with your team name or company
  robots: 'index, follow', // Ensures search engines index the page

  // Open Graph (OG) Tags for social sharing
  openGraph: {
    title: "ICO Presale - All Upcoming ICOs",
    description: "Don’t miss out on the latest ICO presale opportunities. Get early access to tokens and participate in exciting projects.",
    image: 'https://crptonews.com/images/logo.png', // Default image for the ICO page
    url: 'https://crptonews.com/ico',  // This will be the main ICO page URL
    type: 'website',
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image', // Large image summary card
    title: "ICO Presale - All Upcoming ICOs",
    description: "Explore the latest ICO presale opportunities. Secure your tokens in upcoming ICOs!",
    image: 'https://crptonews.com/images/logo.png', // Replace with your default image
  },

  charset: 'UTF-8',
  canonical: 'https://crptonews.com/ico', // Make sure this points to your actual ICO page

  // Structured Data for better SEO visibility
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ICO Presale - Upcoming ICOs",
    "description": "Explore all upcoming ICOs, secure your tokens, and be a part of the blockchain revolution.",
    "image": 'https://crptonews.com/images/logo.png', // Replace with a valid image URL
    "url": 'https://crptonews.com/ico', // Replace with your ICO page URL
    "offers": {
      "@type": "Offer",
      "url": 'https://crptonews.com/ico',
      "priceCurrency": "USD", // Adjust based on token currency
      "price": "0.10",  // Adjust token price
      "eligibleRegion": {
        "@type": "Place",
        "name": "Worldwide"
      }
    }
  }
};
export default function IcoPage() {
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
