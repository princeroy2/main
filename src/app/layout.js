import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Global metadata configuration
export const metadata = {
  title: "CryptoNews | Latest Cryptocurrency News & Updates",
  description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on CryptoNews.com.",
  keywords: "cryptocurrency news, crypto, headlines, crypto AI, top news, crypto signal, upcoming coins, blockchain, Binance, crypto updates, blockchain news, bitcoin, ethereum, market trends, crypto analysis, altcoins, crypto market insights",
  author: 'CryptoNews Team',
  robots: 'index, follow',

  // Open Graph Tags
  openGraph: {
    title: 'CryptoNews - Your Source for Crypto News',
    description: 'Stay updated with the latest trends in crypto, blockchain, and more.',
    image: 'https://crptonews.com/images/ii.png',
    url: 'https://crptonews.com',
    type: 'website',
    imageAlt: 'Bitcoin Image',  // Added image alt for SEO
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    title: "CryptoNews | Latest Cryptocurrency News & Updates",
    description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on CryptoNews.com.",
    image: 'https://crptonews.com/images/ii.png',
    imageAlt: 'Bitcoin Image',  // Added image alt for SEO
  },

  // Charset Tag
  charset: 'UTF-8',

  canonical: 'https://crptonews.com',

  // Favicon Tag
  icons: {
    icon: '/favicon.ico',
  },

  // Structured Data (JSON-LD)
  other: {
    structuredData: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Website",
      "url": "https://crptonews.com",
      "name": "CryptoNews",
      "description": "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on CryptoNews.com.",
      "publisher": {
        "@type": "Organization",
        "name": "CryptoNews",
        "logo": {
          "@type": "ImageObject",
          "url": "https://crptonews.com/images/ii.png",
          "alt": "CryptoNews Logo"
        }
      },
      "sameAs": [
        "https://twitter.com/cryptonews",
        "https://facebook.com/cryptonews"
      ]
    }),
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
      <body >
        <Header />
        {children}
        <Footer />

        {/* Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />

        <Script
          type="application/ld+json"
          id="structured-data"
          strategy="lazyOnload"
        >
          {metadata.other.structuredData}
        </Script>

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </body>
    </html>
  );
}