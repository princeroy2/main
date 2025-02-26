import Image from 'next/image';
import Link from 'next/link';

const MainNews = ({ serverData, visibleItems, handleShowMore ,total_pages,currentPage}) => {
  // Function to format the title for the URL
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')          // Replace spaces with hyphens
      .replace(/-+/g, '-');          // Remove consecutive hyphens
  };

  return (
    <div>
      {/* Map through the visible items */}
      {serverData.slice(0, visibleItems).map((newsItem, index) => (
        <Link href={`/${formatTitleForUrl(newsItem?.title)}/${newsItem?.id}`} key={index}>
          <div className="flex flex-row max-sm:flex-col  gap-6 py-3 px-2  max-sm:shadow-md hover:shadow-lg border-b border-gray-200">
            <Image
              src={newsItem?.image || newsItem?.image_main}
              alt={newsItem?.title}
              className="object-cover max-sm:w-full rounded-lg"
              height={220}
              width={220}
              unoptimized 
             

            />
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-lg font-semibold text-[#37474f] max-sm:text-[16px] max-sm:font-bold md:text-[16px]">{newsItem?.title}</h1>
              <div className="flex gap-4 text-sm text-[#37474f] mt-2">
                <span className="text-gray-600 font-serif text-[12px] mt-5">{newsItem?.domain}</span>
                <span className="text-gray-600 text-[12px] mt-5">{newsItem?.time}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {/* Show More button */}
      {total_pages>currentPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 mb-10 max-sm:mb-0 bg-gray-900 text-[#EEE40A] rounded hover:bg-gray-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default MainNews;
