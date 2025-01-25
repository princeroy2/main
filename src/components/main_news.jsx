'use client'
import { useState } from 'react';
import Link from 'next/link';
const MainNews = ({serverData}) => {
  const itemsPerPage = 5;

  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleItems(visibleItems + itemsPerPage);
    console.log(visibleItems)
  };
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()  // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/-+/g, '-');  // Ensure no multiple consecutive hyphens
  };
 
  const newsItems = serverData

  return (
    <div>

      {newsItems.slice(0, visibleItems).map((newsItem, index) => (
        <Link href={`/${formatTitleForUrl(newsItem?.title)}/${newsItem?.id}`} key={index}>
          <div className="flex flex-row max-md:flex-col gap-6 p-5 h-full hover:shadow-lg border-b border-gray-200">
      
            <img
              src={newsItem?.image || newsItem?.image_main}
              alt={newsItem?.title}
              className="w-full h-full md:w-1/3 object-cover rounded-lg"
            />
            

            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-[#37474f] md:text-[16px]">{newsItem?.title}</h1>
              <span className="text-gray-600 mt-2 font-bold md:text-[12px] text-ellipsis verflow-hidden line-clamp-2" >{newsItem?.description}</span>
              <div className="flex gap-4 text-sm text-[#37474f] mt-2">
                <span className="text-gray-600 text-[12px] mt-5">{newsItem?.domain}</span>
                <span className="text-gray-600 text-[12px] mt-5">{newsItem?.time}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}


      {visibleItems < serverData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 mb-10 bg-gray-900 text-white rounded hover:bg-gray-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default MainNews;
