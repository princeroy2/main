'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Slider({ serverData }) {
  // Take the first 5 items from the serverData array
  const serverData1 = serverData.slice(5, 10);

  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serverData1.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [serverData1.length]);

  // Format title to be used in URL (slugify)
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()  // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/-+/g, '-');  // Ensure no multiple consecutive hyphens
  };

  return (
    <div className="relative w-full mt-6 max-md:px-3">
   
      <ol className="absolute max-md:bottom-2 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {serverData1.map((_, index) => (
          <li
            key={index}
            className={`cursor-pointer max-md:h-1 max-md:w-1 h-2 w-2 rounded-full ${currentIndex === index ? "bg-white w-4 h-1" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)} 
          />
        ))}
      </ol>

      <div className="carousel-inner relative overflow-hidden">
        {serverData1.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${currentIndex === index ? "block" : "hidden"}`}
          >
            <Link href={`/${formatTitleForUrl(image.title)}/${image.id}`}>
              <img
                src={image?.image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover  h-full rounded-lg"
              />
            </Link>
            <div className="absolute max-md:bottom-3 md:bottom-12 text-lg text-white text-center px-6 text-[20px] rounded">
              {image?.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
