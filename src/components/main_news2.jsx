'use client'
import { useState } from 'react';
import MainNews from './main_news'; // Adjust the import path based on your file structure

const MainNews2 = ({ serverData }) => {
  const itemsPerPage = 5;

  // State to track how many items are visible
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  // Function to show more items
  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
  };

  return (
    <div>
      <MainNews 
        serverData={serverData} 
        visibleItems={visibleItems} 
        handleShowMore={handleShowMore} 
      />
    </div>
  );
};

export default MainNews2;
