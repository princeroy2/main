import React from 'react';

const DownloadBadges = () => {
  return (
    <div className="flex flex-1 gap-4 hover:cursor-pointer">
      <div className="w-[130px] h-[110px] max-md:w-[400px] max-md:h-[400px]">
        <img
          src="https://www.crptonews.com/svg/google-play-badge.svg" // Access SVG from public/svg
          // width="130"
          // height="110"
          alt="Google Play"
        />
      </div>


      <div className="w-[130px] h-[110px] max-md:w-[400px] max-md:h-[400px]">
        <img
          src="https://www.crptonews.com/svg/app-store-apple-badge.svg" // Access SVG from public/svg
          // width="130"
          // height="110"
          alt="Apple App Store"
        />
      </div>
    </div>
  );
};

export default DownloadBadges;
