import React from 'react'
import Image from 'next/image'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import WhalesData2 from '@/cryptoapis/new_listing';
export const metadata = {
    title: "New Crypto Coins Listed on Binance, KuCoin, Bitget & OKEx | Track Latest Listings",
    description: "Stay updated with the newest cryptocurrency listings on major exchanges such as Binance, KuCoin, Bitget, and OKEx. Discover new projects and market opportunities.",
    keywords: "new crypto listings, Binance, KuCoin, Bitget, OKEx, new coins, crypto market, crypto listings, latest crypto coins, altcoins, crypto trends",
    author: "CryptoListings Team",
    robots: "index, follow",
  
    // Open Graph Tags
    openGraph: {
      title: "New Crypto Coins Listed on Binance, KuCoin, Bitget & OKEx",
      description: "Track the latest new crypto coin listings on major exchanges like Binance, KuCoin, Bitget, and OKEx.",
      image: "https://crptonews.com/images/favicon.png", // Add an image relevant to crypto listings
      url: "https://crptonews.com/new-listing",
      type: "website",
      imageAlt: "New Crypto Coin Listings",
    },
  
    // Twitter Card Tags
    twitter: {
      card: "summary_large_image",
      title: "New Crypto Coins Listed on Binance, KuCoin, Bitget & OKEx",
      description: "Stay informed about the latest cryptocurrency coin listings on Binance, KuCoin, Bitget, and OKEx. Track new market opportunities.",
      image: "https://crptonews.com/images/favicon.png", // Add an image relevant to crypto listings
      imageAlt: "New Crypto Coin Listings",
    },
  
    // Charset Tag
    charset: "UTF-8",
  
    canonical: "https://crptonews.com/new-listing",
  
    // Favicon Tag
    favicon: "/favicon.ico",
  
    // Structured Data (JSON-LD)
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Website",
      "url": "https://crptonews.com/new-listing",
      "name": "Crypto Listings Tracker",
      "description": "Track new crypto coin listings on Binance, KuCoin, Bitget, OKEx and other exchanges. Stay updated on the latest altcoins and market opportunities.",
      "publisher": {
        "@type": "Organization",
        "name": "Crypto Listings Tracker",
        "logo": {
          "@type": "ImageObject",
          "url": "https://crptonews.com/images/favicon.png",
          "alt": "Crypto Listings Tracker Logo",
        },
      },
      "sameAs": [
        "https://twitter.com/cryptolistings",
        "https://facebook.com/cryptolistings"
      ],
    }
  };
const Page1= async () => {
    const data = await WhalesData2()

    return (
        <>
        
        <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
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

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(metadata.structuredData)}
      </script>
    </Head> 
        <div className='bg-[#f0f2f4]  overflow-hidden'>

            <div className=' max-sm:mb-10  mt-5 py-2 max-sm:py-1 px-5 max-sm:px-4 sm:mx-32'>
                <div className='flex flex-col gap-1 text-center items-center'>
                    {/* <Image
                        src='/images/whales.webp'
                        alt='logo.png'
                        height={200}
                        width={400}
                        className=' text-center align-middle'
                    /> */}
                    <h1 className='font-sans text-[30px] max-sm:text-[20px] text-[#8f8f2c] font-bold'>New Coin Listing</h1>
                    <h2 className='mt-2 text-[#212529] font-sans text-[16px] font-medium'>We aggressively monitor 47 exchanges to detect new crypto listings in real-time</h2>

                </div>





            </div>
            <div className=' bg-white text-[black] mt-2 max-lg:mx-3 max-lg:px-1 max-sm:mt-2 py-2 px-5 max-sm:px-1 lg:mx-32'>

                <table className="w-full md:px-7 max-sm:px-0">

                    <tbody className="">
                        {
                            data.map((item, index) => {
                                let boldedDescription = item.description
                                    .replace(
                                        /(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g,  // Match numbers with commas and decimals
                                        "<b>$1</b>"  // Wrap matched numbers in <b> tags
                                    )
                                
                                return (
                                    <tr key={index} className='max-sm:flex-col max-sm:flex border-b-2' >
                                        <td className="px-3 py-3 font-mono w-[80%] max-sm:w-[100%] hover:bg-gray hover:cursor-pointer text-white hover:text-gray-400 flex flex-row gap-3 items-center font-lg break-words whitespace-wrap group">

                                            <Image
                                                height={20}
                                                width={20}
                                                src={item.img_url}
                                                alt="Icon"
                                                unoptimized 
                                            />
                                            <span
                                                className="flex-1 text-[17px] text-[black]  overflow-hidden sm:text-ellipsis sm:line-clamp-2 max-sm:break-words"
                                                dangerouslySetInnerHTML={{
                                                    __html: boldedDescription, // Render the modified description with bold numbers
                                                }}
                                            />

                                            <FontAwesomeIcon
                                                icon={faLink}
                                                className="invisible group-hover:visible"
                                                width={20}
                                                height={20}
                                            />
                                       

                                        </td>

                                       <td className=" px-3 flex flex-row justify-end items-center  gap-1 max-sm:px-2 text-[black] max-sm:text-[12px] max-sm:text-end text-[14px] hover:cursor-pointer font-sans whitespace-wrap  hover:bg-gray text-right">
                                        <span>{item.time}</span>
                                        

                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                        </td>
                                    </tr>
                                    

                                )
                            })
                        }



                    </tbody>
                </table>

            </div>
        </div>
        </>
    )
}

export default Page1