import Image from 'next/image';
import React from 'react';

const DownloadBadges2 = () => {
  return (
<div className={`flex flex-row mt-3 gap-5 hover:cursor-pointer `}>
<Image
          src="svg/Google_Play_Store_badge_EN.svg" // Access SVG from public/svg
          width={120}
          height={20}
          alt="Google Play"
          className=''
        />
        <Image
          src="svg/apk-badge.svg" // Access SVG from public/svg
          width={140}
          height={20}
           className=''
          alt="apk-badge"
        />
     
    </div>
  );
};

export default DownloadBadges2;
