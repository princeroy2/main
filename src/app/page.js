import News_TypeButton from "@/components/newstypes_Button";
import Slider from "@/components/slider";
import MainNews from "@/components/main_news";
import TopNews from "@/components/top_news";
import BlogCard from "@/components/blog";
import { apiCall } from "./apicallhook/Newsapi";
import { ArticleapiCall } from "./apicallhook/ArticleApi";
import Head from "next/head";
import MainNews2 from "@/components/main_news2";
 
export default async function Main() {

  const Apidata = await apiCall();
  const Apidataslider = Apidata.slice(5,10)
  const Apidatatopnews = Apidata.slice(10,15)
  const apidata2 = await ArticleapiCall();


  return (
    <>

      <div className="bg-[#eee9e9] w-full mt-0 h-[190px]">
      </div>

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
          </div>
        </div>
      </div>
    </>
  );
}
