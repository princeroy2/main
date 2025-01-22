
import News_TypeButton from "@/components/newstypes_Button";
import Slider from "@/components/slider";
import MainNews from "@/components/main_news";
import TopNews from "@/components/top_news";
import BlogCard from "@/components/blog";
import { apiCall } from "./apicallhook/Newsapi";
import { ArticleapiCall } from "./apicallhook/ArticleApi";
import Head from "next/head";
export default async function Main() {
  const currentDate = new Date().toISOString(); // This gives the current date in "YYYY-MM-DDTHH:mm:ss.sssZ" format

  const Apidata =await apiCall()
  const apidata2=await ArticleapiCall()
  return (
    <>
        <Head>
        {/* Page-Specific Meta Tags */}
        <title>CryptoNews - Stay Updated with Cryptocurrency News</title>
        <meta name="description" content="Stay up to date with the latest cryptocurrency news, market trends, blockchain developments, and crypto signals." />
        <meta name="keywords" content="cryptocurrency news, crypto signal, upcoming coins, blockchain, Binance, crypto updates, blockchain news, bitcoin, ethereum, market trends, crypto analysis" />
        
        {/* Open Graph Meta Tags for this specific page */}
        <meta property="og:title" content="CryptoNews - Latest Cryptocurrency News" />
        <meta property="og:description" content="Stay up to date with the latest cryptocurrency news, market trends, blockchain developments, and crypto signals." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://crptonews.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags for this specific page */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CryptoNews - Latest Cryptocurrency News" />
        <meta name="twitter:description" content="Stay up to date with the latest cryptocurrency news, market trends, blockchain developments, and crypto signals." />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* Schema Markup (JSON-LD) for this page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: "CryptoNews - Stay Updated with Cryptocurrency News",
              description: "Stay up to date with the latest cryptocurrency news, market trends, blockchain developments, and crypto signals.",
              image: "/images/logo.png",
              datePublished: currentDate,
              dateModified: currentDate,
              publisher: {
                "@type": "Organization",
                name: "CryptoNews",
                logo: {
                  "@type": "ImageObject",
                  url: "/images/logo.png",
                },
              },
            }),
          }}
        />
      </Head>
      <div className="bg-[#eee9e9] w-full mt-0 h-[190px]">
        
      </div>
      <News_TypeButton />
      
      <div className="sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6">
            <Slider serverData={Apidata} />
            <MainNews serverData={Apidata} />
          </div>
          <div className="mb-5 max-md:px-9">
            <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
            <TopNews serverData={Apidata} />
            <BlogCard serverData={apidata2} />
          </div>
        </div>
      </div>  

    </>
  );
}
