'use client';

import Image from "next/image";
import Link from "next/link";
import News_TypeButton from "./newstypes_Button";
import { useState } from "react";
import NewstypeApi from "@/apicallhook/newstype";
import { apiCall } from "@/apicallhook/Newsapi";
import TopNews from "./top_news";
import { useEffect } from "react";
const NewsTypedata =  ({ serverData, total_pages, news_name, current_page, visibleItems }) => {
  const [data, setData] = useState(serverData);
  const [currentPage, setCurrentPage] = useState(current_page);
  const [topData, setTopData] = useState([]); // State for top news data

  useEffect(() => {
    const fetchTopNews = async () => {
      try {
        const topnewsdata = await apiCall(2); // Replace with your API call
        setTopData(topnewsdata.results);  // Set the fetched top news data
      } catch (error) {
        console.error('Error fetching top news:', error);
      }
    };

    fetchTopNews(); // Call the function to fetch the data
  }, []);
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')          // Replace spaces with hyphens
      .replace(/-+/g, '-');          // Remove consecutive hyphens
  };

  const handleShowMore = async () => {
    try {
      // Log the current state to debug
      console.log('Current page before fetch:', currentPage);

      // Assuming `NewstypeApi` is an API function that fetches news data.
      const Apidata = await NewstypeApi(news_name, currentPage + 1);
      console.log('Fetched data:', Apidata);
      console.log('Current page after fetch:', Apidata.data.current_page);

      // Update the data state and current page
      setData((prevData) => [...prevData, ...Apidata.data.results]);
      setCurrentPage(Apidata.data.current_page);

    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-[#eee9e9] w-full h-[150px]"></div>
        <News_TypeButton />

        <div className="max-sm:px-3 lg:px-28 md:px-4 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-10">
            <div className="md:col-span-2 space-y-6">
              {data.slice(0, visibleItems).map((newsItem, index) => (
                <Link href={`/${formatTitleForUrl(newsItem?.title)}/${newsItem?.id}`} key={index}>
                  <div className="flex flex-row max-sm:flex-col gap-6 py-3 px-2 max-sm:shadow-md hover:shadow-lg border-b border-gray-200">
                    <Image
                      src={newsItem?.image || newsItem?.image_main}
                      alt={newsItem?.title}
                      className="object-cover  max-sm:w-full rounded-lg"
                      height={220}
                      width={220}
                    />
                    <div className="flex flex-col justify-center gap-3">
                      <h1 className="text-lg font-semibold text-[#37474f] max-sm:text-[16px] max-sm:font-bold md:text-[16px]">
                        {newsItem?.title}
                      </h1>
                      <div className="flex gap-4 text-sm text-[#37474f] mt-2">
                        <span className="text-gray-600 font-serif text-[12px] mt-5">{newsItem?.domain}</span>
                        <span className="text-gray-600 text-[12px] mt-5">{newsItem?.time}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mb-5">
              <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
              <TopNews serverData={topData}/>
            </div>
          </div>
        </div>
      </div>

      {/* Show More button */}
      {total_pages > currentPage && (
        <div className="flex justify-center mb-6 mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 mb-10 max-sm:mb-0 bg-gray-900 text-white rounded hover:bg-gray-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsTypedata;
