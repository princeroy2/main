import News_TypeButton from "@/components/newstypes_Button";
import Slider from "@/components/slider";
import TopNews from "@/components/top_news";
import { apiCall } from "../apicallhook/Newsapi";
import MainNews2 from "@/components/main_news2";
import MObileAppbanner from "@/components/mobileappbanner";
import BlogCard from "@/components/blog";
export default async function Main() {
  const Apidata = await apiCall(1);
  const apidatamain = Apidata.results || [];
  const total_pages = Apidata.total_pages;
  const current_page = Apidata.current_page;
  const Apidataslider = apidatamain.slice(5, 10);
  const Apidatatopnews = apidatamain.slice(5, 10);

  return (
    <>
      <div className="bg-[#eee9e9] w-full mt-0 h-[150px]"></div>
      <hr className="border-t-2 border-gray-300 mx-8 mt-0" />

      <News_TypeButton />

      <div className="sm:px-6 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6 max-sm:px-4">
            <Slider serverData={Apidataslider} />
            <MainNews2 serverData={apidatamain} total_pages={total_pages} current_page={current_page} />
          </div>
          <div className="mb-5 max-md:px-9">
            <MObileAppbanner />
            <div className="max-sm:hidden">
              <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
              <TopNews serverData={Apidatatopnews} />
              <BlogCard  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}