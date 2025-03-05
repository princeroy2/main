'use client'
import { useState } from 'react';
import MainNews from './main_news'; // Adjust the import path based on your file structure

const MainNews2 = ({ serverData,total_pages,current_page }) => {
  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [currentPage, setCurrentPage] = useState(current_page); 
  const [newsData, setNewsData] = useState(serverData); // Store all news items

  const handleShowMore = async () => {
    const nextPage = currentPage + 1; // Calculate the next page number
    const res = await fetch(`https://nativeapi.site/api/getdata/?page=${nextPage}`);
    const newData = await res.json();

    if (newData.results) {
      // Append new news data to the existing list
      setNewsData(prevData => [...prevData, ...newData.results]);
      setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
      setCurrentPage(nextPage);
    }
  };

  return (
    <div>
      <MainNews 
        serverData={newsData} 
        visibleItems={visibleItems} 
        handleShowMore={handleShowMore} 
        currentPage={currentPage}
        total_pages={total_pages}
      />
    </div>
  );
};

export default MainNews2;
