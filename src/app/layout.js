import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Firstheader from "@/components/firstheader";
// Global metadata configuration
export const metadata = {
  title: "CryptoNews | Latest Cryptocurrency News & Updates",
  description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on cryptonews.com.",
  keywords: "cryptocurrency news, crypto headline,crypto AI, Top News, crypto signal, upcoming coins, blockchain, Binance, crypto updates, blockchain news, bitcoin, ethereum, market trends, crypto analysis",
  author: 'CryptoNews Team',
  robots: 'index, follow',

  // Open Graph Tags
  openGraph: {
    title: 'CryptoNews - Your Source for Crypto News',
    description: 'Stay updated with the latest trends in crypto, blockchain, and more.',
    image: 'https://crptonews.com/images/btc.png',
    url: 'https://crptonews.com',
    type: 'website',
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    title: "CryptoNews | Latest Cryptocurrency News & Updates",
    description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on cryptonews.com.",
    image: 'https://crptonews.com/images/btc.png',
  },

  // Charset Tag
  charset: 'UTF-8',

  canonical: 'https://crptonews.com',

  // Favicon Tag
  favicon: '/favicon.ico',
  
  // Structured Data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Website",
    "url": "https://crptonews.com",
    "name": "CryptoNews",
    "description": "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on cryptonews.com.",
    "publisher": {
      "@type": "Organization",
      "name": "CryptoNews",
      "logo": {
        "@type": "ImageObject",
        "url": "https://crptonews.com/images/btc.png"
      }
    }
  }
};

// Viewport settings
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Global SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href={metadata.favicon} />
        <meta name="robots" content={metadata.robots} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        ></script>
      <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"/>

      </Head>

      <body >

        <Header />
        {children}
        <Analytics />
        <SpeedInsights/>
        <Footer />
      </body>
    </html>
  );
}
