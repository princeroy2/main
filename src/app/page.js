import News_TypeButton from "@/components/newstypes_Button";
import Slider from "@/components/slider";
import TopNews from "@/components/top_news";
import BlogCard from "@/components/blog";
import { apiCall } from "./apicallhook/Newsapi";
import { ArticleapiCall } from "./apicallhook/ArticleApi";
import MainNews2 from "@/components/main_news2";
import Ico2 from "@/components/ico_token2";
import Head from "next/head";
import AdIframe from "@/components/ads2";
import Script from "next/script";
import { AdComponent } from "@/components/ads";
export default async function Main() {

  const Apidata = await apiCall();
  const Apidataslider = Apidata.slice(5,10)
  const Apidatatopnews = Apidata.slice(10,15)
  const apidata2 = await ArticleapiCall();
 
  const seoData = Apidata.map((newsItem) => ({
    title: newsItem.title || "CryptoNews | Latest Cryptocurrency News & Updates",
    description: newsItem.description || "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on CryptoNews.",
    image: newsItem.image || "https://crptonews.com/images/logo.png", // Default image if no image field
    url: `https://crptonews.com/`, // Assuming the news has an ID
  }));
  return (
    <>
     {seoData.map((data, index) => (
        <Head key={index}>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={data.image} />
          <meta property="og:url" content={data.url} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={data.title} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image" content={data.image} />
        </Head>
      ))}
       
       <div className="bg-[#eee9e9] w-full mt-0 h-[190px]">
   
    </div>
 <Script 
        strategy="afterInteractive" 
        src="https://appsha-prm.ctengine.io/js/script.js?wkey=q5X3IKTaip"
      />
      <News_TypeButton />

      <div className="sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6">
            <Slider serverData={Apidataslider}/>
            <MainNews2 serverData={Apidata} />
           
          </div>
          <div className="mb-5 max-md:px-9">

            <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
            <TopNews serverData={Apidatatopnews} />
            <BlogCard serverData={apidata2} />
            
      {/* <script async src="https://appsha-prm.ctengine.io/js/script.js?wkey=q5X3IKTaip"></script> */}
    
          </div>
        </div>
        
      </div>
      <Ico2/>
    </>
  );
}
