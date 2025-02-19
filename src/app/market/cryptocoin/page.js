import Link from "next/link";
import Image from "next/image";
import Glossary from "@/cryptoapis/glossary";
import Head from 'next/head'; // Import Head component

export const metadata = {
  title: "Crypto Coins Info | A-Z List of Cryptocurrencies",
  description: "Explore a comprehensive list of cryptocurrencies from A to Z, with details about exchanges, fees, and wallets for safe storage. Discover the best options for your crypto investments.",
  keywords: "crypto, coins, cryptocurrency, exchanges, wallets, coin information, crypto glossary, crypto trading, cryptocurrency storage",
  author: "CryptoCoinsInfo Team",
  robots: "index, follow",

  // Open Graph Tags
  openGraph: {
    title: "Crypto Coins Info | A-Z List of Cryptocurrencies",
    description: "Browse through a complete A-Z list of cryptocurrencies with important details on exchanges, wallets, and market insights.",
    image: "https://crptonews.com/images/ii.jpg", // Ensure this image fits your content
    url: "https://crptonews.com/market/cryptocoin",
    type: "website",
    imageAlt: "Crypto Coins Info",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Crypto Coins Info | A-Z List of Cryptocurrencies",
    description: "Find the best exchanges and wallets for your cryptocurrency investments with a complete A-Z list of coins.",
    image: "https://crptonews.com/images/ii.jpg", // Ensure this image fits your content
    imageAlt: "Crypto Coins Info",
  },

  // Charset Tag
  charset: "UTF-8",

  canonical: "https://crptonews.com/market/cryptocoin",

  // Favicon Tag
  favicon: "/favicon.ico",

  // Structured Data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Website",
    "url": "https://crptonews.com/market/cryptocoin",
    "name": "Crypto Coins Info",
    "description": "An A-Z guide to cryptocurrencies with essential information about exchanges, wallets, and storage options.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Coins Info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://crptonews.com/images/ii.jpg", // Use appropriate logo URL
        "alt": "Crypto Coins Info Logo",
      },
    },
    "sameAs": [
      "https://twitter.com/cryptocoinsinfo",
      "https://facebook.com/cryptocoinsinfo",
    ],
  },
};

// Viewport settings
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const page = async () => {
  // Fetch data for all the letters A to Z
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Fetch coin data for each letter asynchronously
  const coinData = await Promise.all(
    letters.map((letter) => Glossary(letter).then((data) => ({ letter, coins: data.coins })))
  );
  
  return (
    <>
      <Head>
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
        <meta property="og:image:alt" content={metadata.openGraph.imageAlt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:image:alt" content={metadata.twitter.imageAlt} />
        <link rel="canonical" href={metadata.canonical} />
        <script type="application/ld+json">{JSON.stringify(metadata.structuredData)}</script>
      </Head>

      <div className="bg-[#f0f2f4] overflow-hidden">
        <div className="mt-10 py-2 px-5 sm:mx-32">
          <div className="flex flex-row gap-4 items-center">
            <Image src="/images/btc.png" alt="logo.png" height={40} width={40} className="w-10 h-10" />
            <h1 className="font-sans text-[30px]">Crypto Coins Info</h1>
          </div>
          <p className="mt-2 text-[#212529] font-sans text-[18px]">
            We have compiled data on the best exchanges to buy each coin based on volume and fees. We have also compiled the best wallets to store any coin so that your valuable crypto is always safe and accessible!
          </p>
        </div>

        {/* Navigation for Letters */}
        <div className="mt-10 py-2 px-5 max-sm:px-5 sm:mx-32 overflow-auto">
          <div className="flex flex-row sm:justify-center max-sm:gap-2 sm:gap-8 text-gray-500 font-bold">
            {letters.map((letter) => (
              <div key={letter} className="hover:text-yellow-300 hover:cursor-pointer">
                <a href={`#${letter}`}>{letter}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Coin List Section */}
        {coinData.map(({ letter, coins }) => (
          <div key={letter} id={letter} className="mt-10 py-2 px-5 max-sm:px-6 sm:mx-32">
            <h1 className="mt-6 font-bold text-[40px]">{letter}</h1>
            <ul className="flex flex-wrap flex-row list-disc colored-list_crtpocoin gap-6 max-sm:gap-6">
              {coins && coins.length > 0 ? (
                coins.map((item, index) => (
                  <li key={index}>
                    <Link className="hover:underline text-[#007eff] text-[13px]" href={`/market/cryptocoin/${item.Symbol}`}>
                      {item.FullName}
                    </Link>
                  </li>
                ))
              ) : (
                <p>No coins found for the letter {letter}</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

// pages/market/cryptocoin/page.js


export default page;
