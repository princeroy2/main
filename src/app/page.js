import News_TypeButton from "@/components/newstypes_Button";
import Slider from "@/components/slider";
import TopNews from "@/components/top_news";
import BlogCard from "@/components/blog";
import { apiCall } from "./apicallhook/Newsapi";
import { ArticleapiCall } from "./apicallhook/ArticleApi";
import MainNews2 from "@/components/main_news2";
const icon = '/images/logo1.png';
import Head from "next/head";
import MObileAppbanner from "@/components/mobileappbanner";
export default async function Main() {

  const Apidata = await apiCall(1);
  const apidatamain = Apidata.results || [];
  const total_pages=Apidata.total_pages
  const current_page=Apidata.current_page 
  const Apidataslider = apidatamain.slice(5,10)
  const Apidatatopnews = apidatamain.slice(5,10)
  const apidata2 = await ArticleapiCall();
 
  const seoData = apidatamain.map((newsItem) => ({
    title: newsItem.title || "CryptoNews | Latest Cryptocurrency News & Updates",
    description: newsItem.description || "Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on CryptoNews.",
    image: newsItem.image || "https://crptonews.com/images/btc.png", // Default image if no image field
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
       
       <div className="bg-[#eee9e9] w-full mt-0 h-[150px] ">
   
    </div>

      <News_TypeButton />

      <div className="sm:px-6 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6 max-sm:px-4">
            <Slider serverData={Apidataslider}/>
            <MainNews2 serverData={apidatamain} total_pages={total_pages} current_page={current_page}/>
           
          </div>
          <div className="mb-5 max-md:px-9">

    <MObileAppbanner/>
          <div className="max-sm:hidden">
            <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
             <TopNews serverData={Apidatatopnews} />
          </div>
{/* 
          <BlogCard serverData={apidata2} /> */}

          </div>
          
        </div>
        
      </div>
    </>
  );
}
