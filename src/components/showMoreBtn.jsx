'use client';
import { useState } from 'react';

const ShowMoreButton = ({ allData, itemsPerPage }) => {
 const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleShowMore = () => {
    setVisibleItems(visibleItems + itemsPerPage);
  };

  return (
    <>
      {visibleItems < allData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 mb-10 bg-[#EEE40A] text-white rounded hover:bg-gray-600"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default ShowMoreButton;
