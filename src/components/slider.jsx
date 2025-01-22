'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Slider({ serverData }) {
  // Shuffling function to get random items from the server data
  const getRandomItems = (data, count = 5) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Take the first 5 items
  };

  // Use the random items for the carousel
  const randomItems = getRandomItems(serverData);

  // Manage current slide index state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % randomItems.length);
    }, 7000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [randomItems.length]);

  // Format title to be used in URL (slugify)
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()  // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/-+/g, '-');  // Ensure no multiple consecutive hyphens
  };

  return (
    <div id="carouselExampleIndicators" className="relative w-full p-1 mt-6">

      <ol className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {randomItems.map((_, index) => (
          <li
            key={index}
            className={`cursor-pointer h-1 w-1 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </ol>

    
      <div className="carousel-inner relative rounded-lg overflow-hidden">
        {randomItems.map((image, index) => (
          <Link href={`/${formatTitleForUrl(image.title)}/${image.id}`} key={index}>
            <div className={`carousel-item ${currentIndex === index ? "block" : "hidden"}`}>
              <img
                src={image?.image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover max-h-[300px] sm:max-h-[400px]"
              />
              <div className="absolute font-semibold bottom-4 left-4 text-lg text-white p-2 text-[20px] rounded">
                {image?.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
