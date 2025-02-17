import Image from 'next/image';
import React from 'react';

const DownloadBadges = ({name}) => {
  return (
<div className={`flex flex-row max-sm:gap-3 ${name}  md:gap-0 gap-10 hover:cursor-pointer`}>
<Image
          src="svg/Google_Play_Store_badge_EN.svg" // Access SVG from public/svg
          width={120}
          height={20}
          alt="Google Play"
          className='mt-2 max-rs:w-8 h-full custom-range1 custom-ran1 '
        />
        <Image
          src="svg/apk-badge.svg" // Access SVG from public/svg
          width={135}
          height={20}
           className='h-full custom-range2  custom-ran2'
          alt="apk-badge"
        />
     
    </div>
  );
};

export default DownloadBadges;
