// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export const metadata = {
  title: "CryptoNews | Latest Cryptocurrency News & Updates",
  description: "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on crptonews.com.",
  keywords: "cryptocurrency news, crypto signal, upcoming coins, blockchain, Binance, crypto updates, blockchain news, bitcoin, ethereum, market trends, crypto analysis",
  author: "CryptoNews Team",
  robots: "index, follow",  // Instruct search engines to index the page
};

export default function RootLayout({ children }) {
  
  const currentDate = new Date().toISOString(); // This gives the current date in "YYYY-MM-DDTHH:mm:ss.sssZ" format

  return (
    <html lang="en">


      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Global Meta Tags */}
        <meta name="description" content="Welcome to CryptoNews, the latest updates on cryptocurrencies!" />
        <meta name="keywords" content="cryptocurrency, crypto news, bitcoin, ethereum, market analysis" />
        <meta name="author" content="CryptoNews Team" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CryptoNews - Stay Updated with Cryptocurrency News" />
        <meta property="og:description" content="The latest cryptocurrency news and market trends." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://crptonews.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CryptoNews - Cryptocurrency News & Updates" />
        <meta name="twitter:description" content="Stay updated with the latest cryptocurrency news and trends." />
        <meta name="twitter:image" content="/images/logo.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <body
      >
        <Header/>
        {children}
        <Footer/>

      </body>
     
    </html>
  );
}
