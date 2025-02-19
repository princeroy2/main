import React from 'react';
import Image from 'next/image';
import Glossary_Searh from '@/cryptoapis/coins_Search-glossary';
import Head from 'next/head';
import Glossary from '@/cryptoapis/glossary';
export async function generateMetadata({ params }) {
  const name = await params.title;  // Extract dynamic coin name from URL params
  const data1 = await Glossary_Searh(name);  // Fetch coin data based on the name
  const data = data1.coins;

  if (!data || !data[0]) {
    return {
      title: 'Coin Not Found | CryptoNews',
      description: 'The coin information could not be found. Discover cryptocurrency news and updates on CryptoNews.',
      openGraph: {
        title: 'Coin Not Found | CryptoNews',
        description: 'The coin information could not be found. Discover cryptocurrency news and updates on CryptoNews.',
        image: '/default-image.jpg',
        url: `https://crptonews.com/${name}`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Coin Not Found | CryptoNews',
        description: 'The coin information could not be found. Discover cryptocurrency news and updates on CryptoNews.',
        image: '/default-image.jpg',
      },
      robots: 'noindex, nofollow',
    };
  }

  const coinData = data[0];
  
  return {
    title: `${coinData.FullName} - Details`,
    description: coinData.Description || `Learn everything about ${coinData.FullName}, its market, technology, and use case on CryptoNews.`,
    openGraph: {
      title: `${coinData.FullName} - CryptoNews`,
      description: coinData.Description || `Learn everything about ${coinData.FullName}, its market, technology, and use case on CryptoNews.`,
      image: `https://www.cryptocompare.com/${coinData.ImageUrl}` || '/default-image.jpg',
      url: `https://crptonews.com/${name}`,
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${coinData.FullName} - CryptoNews`,
      description: coinData.Description || `Learn everything about ${coinData.FullName}, its market, technology, and use case on CryptoNews.`,
      image: `https://www.cryptocompare.com/${coinData.ImageUrl}` || '/default-image.jpg',
    },
    canonical: `https://crptonews.com/${name}`,
    robots: 'index, follow',
    structuredData: {
      "@context": "http://schema.org",
      "@type": "Cryptocurrency",
      "name": coinData.FullName,
      "symbol": coinData.Symbol,
      "description": coinData.Description,
      "image": `https://www.cryptocompare.com/${coinData.ImageUrl}`,
      "url": `https://crptonews.com/${name}`,
      "sameAs": coinData.AssetWebsiteUrl,
      "launchDate": coinData.AssetLaunchDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://crptonews.com/${name}`,
      },
    }
  };
}

const Page = async ({ params }) => {
  const name = await params.title;
  console.log(name);
  const data1 = await Glossary_Searh(name);
  const data = data1.coins;
  console.log(data[0]);

  return (
    <>
      <Head>
        <meta name="description" content={data[0]?.Description || 'Find more information about this cryptocurrency on CryptoNews.'} />
        <meta property="og:title" content={`${data[0]?.FullName} - CryptoNews`} />
        <meta property="og:description" content={data[0]?.Description || 'Find more information about this cryptocurrency on CryptoNews.'} />
        <meta property="og:image" content={`https://www.cryptocompare.com/${data[0]?.ImageUrl}` || '/default-image.jpg'} />
        <meta property="og:url" content={`https://crptonews.com/${name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data[0]?.FullName} - CryptoNews`} />
        <meta name="twitter:description" content={data[0]?.Description || 'Find more information about this cryptocurrency on CryptoNews.'} />
        <meta name="twitter:image" content={`https://www.cryptocompare.com/${data[0]?.ImageUrl}` || '/default-image.jpg'} />
      </Head>

      <div className="bg-[#f0f2f4] overflow-hidden">
        <div className="bg-white  py-2 px-5 sm:px-10 md:px-20 lg:px-32">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Image
              src={`https://www.cryptocompare.com/${data[0]?.ImageUrl}`}
              alt={data[0]?.FullName || 'Cryptocurrency Logo'}
              height={40}
              width={40}
              className="w-10 h-10"
            />
            <h1 className="font-sans text-[30px] sm:text-[40px]">{data[0]?.FullName}</h1>
          </div>
          <p className="mt-2 text-[#212529] font-sans text-[16px] sm:text-[18px]">
            {data[0]?.Description}
          </p>

          {/* Section for Coin Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border p-4">
              <h1 className="font-semibold">CirculatingSupply</h1>
              <span>{data[0]?.CirculatingSupply}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">TotalCoinsMined</h1>
              <span>{data[0]?.TotalCoinsMined}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">SmartContractAddress</h1>
              <span className='break-words'>{data[0]?.SmartContractAddress}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">BlockNumber</h1>
              <span>{data[0]?.BlockNumber}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold ">OtherSmartContractAddress</h1>
              <span className="break-words ">{data[0]?.OtherSmartContractAddress}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border p-4">
              <h1 className="font-semibold">Max Supply</h1>
              <span>{data[0]?.MaxSupply}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">Launch Date</h1>
              <span>{data[0]?.AssetLaunchDate}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">Chain</h1>
              <span>{data[0]?.BuiltOn}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">Prooftype</h1>
              <span>{data[0]?.Prooftype}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">IsTrading</h1>
              <span>{data[0]?.IsTrading}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border p-4">
              <h1 className="font-semibold">Website</h1>
              <span>{data[0]?.AssetWebsiteUrl}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">WhitePaper</h1>
              <span>{data[0]?.AssetWhitepaperUrl}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function generateStaticParams() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  const allParams = [];

  // Fetch coin data for each letter
  for (const letter of letters) {
    try {
      const coinData = await Glossary(letter);

      if (coinData && coinData.coins && Array.isArray(coinData.coins)) {
        // Use .map() to iterate over coins and push to allParams
        coinData.coins.map(coin => {
          if (coin && coin.Symbol) {
            allParams.push({
              symbol: coin.Symbol,  // Dynamic param for coin symbol
            });
          } else {
            console.error(`Coin missing a valid Symbol:`, coin);
          }
        });
      } else {
        console.error(`No valid 'coins' array found for letter ${letter}:`, coinData);
      }
    } catch (error) {
      console.error(`Error fetching coins for letter ${letter}:`, error);
    }
  }

  // Log the generated params
  console.log('Generated static params:', allParams);

  return allParams;
}

export default Page;
