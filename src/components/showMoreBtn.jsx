'use client';
import { useState } from 'react';

const ShowMoreButton = ({ allData, itemsPerPage }) => {
 const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleShowMore = () => {
    setVisibleItems(visibleItems + itemsPerPage);
    console.log(visibleItems)
  };

  return (
    <>
      {visibleItems < allData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 mb-10 bg-gray-900 text-white rounded hover:bg-gray-600"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default ShowMoreButton;
