import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

// Global metadata configuration
export const metadata = {
  title: "CryptoNews | Latest Cryptocurrency News & Updates",
  description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on cryptonews.com.",
  keywords: "cryptocurrency news, crpto Headline,Top News, crypto signal, upcoming coins, blockchain, Binance, crypto updates, blockchain news, bitcoin, ethereum, market trends, crypto analysis",
  author: 'CryptoNews Team',
  robots: 'index, follow',

  // Open Graph Tags
  openGraph: {
    title: 'CryptoNews - Your Source for Crypto News',
    description: 'Stay updated with the latest trends in crypto, blockchain, and more.',
    image: 'https://crptonews.com/images/logo.png',
    url: 'https://crptonews.com',
    type: 'website',
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    title: "CryptoNews | Latest Cryptocurrency News & Updates",
    description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on cryptonews.com.",
    image: 'https://crptonews.com/images/logo.png',
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
        "url": "https://crptonews.com/images/logo.png"
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
        </Head>
      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
