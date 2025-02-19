'use client'
import Image from 'next/image';
import Link from 'next/link';
import Lang_Btn_list4 from './languageswitch';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Lang_Btn_list4_mbl from './language_switch_mbl';
import DownloadBadges2 from './googleplaybtn';

const icon2 = '/images/ii.png';
export const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const [isMobile, setIsMobile] = useState(false); // Track screen size (is mobile)
  const [isMarket, setIsMarket] = useState(false); // Track screen size (is mobile)

  // Handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Update state based on window width
  };

  // Check active link
  const getActiveLink = (path) => {
    if (pathname === path) {
      return 'border-b-2  border-yellow-500';
    }
    return '';
  };

  // Disable body scroll when the menu is open, and re-enable it when closed
  useEffect(() => {
    const resizeListener = () => handleResize();

    // Run this when the menu is toggled
    if ( isMenuOpen) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = 'auto';
    }

    // Cleanup listener and reset scroll overflow
    return () => {
      window.removeEventListener('resize', resizeListener);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isMobile]);

  return (
    <div className="bg-[#111827] w-full h-16">
      <div className="mx-11 flex flex-row max-sm:justify-between  sm:gap-[20%] items-center h-16">

        <div className="flex flex-row  items-center">
          <Link href="/">
            <Image src={icon2} alt="Cryptonews" width={200} height={16} />
          </Link>
        </div>


        <div className="hidden md:flex flex-row items-center justify-start gap-6 text-white">
          <Link href="/">
            <div className={`cursor-pointer ${getActiveLink('/')}`}>News</div>
          </Link>
          <Link href="/market">
            <div className={`cursor-pointer ${getActiveLink('/market')}`}>Market</div>
          </Link>
          <Link href="/crypto-whales">
            <div className={`cursor-pointer ${getActiveLink('/crypto-whales')}`}>Whales Tracking</div>
          </Link>
          <Link href="/new-listing">
            <div className={`cursor-pointer ${getActiveLink('/new-listing')}`}>New Listing</div>
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#EEE40A"
          >
            <path d="M230.67-160q-29.67 0-50.17-20.5T160-230.67q0-29.66 20.5-50.16 20.5-20.5 50.17-20.5 29.66 0 50.16 20.5 20.5 20.5 20.5 50.16 0 29.67-20.5 50.17T230.67-160ZM480-160q-29.67 0-50.17-20.5t-20.5-50.17q0-29.66 20.5-50.16 20.5-20.5 50.17-20.5t50.17 20.5q20.5 20.5 20.5 50.16 0 29.67-20.5 50.17T480-160Zm249.33 0q-29.66 0-50.16-20.5-20.5-20.5-20.5-50.17 0-29.66 20.5-50.16 20.5-20.5 50.16-20.5 29.67 0 50.17 20.5t20.5 50.16q0 29.67-20.5 50.17T729.33-160ZM230.67-409.33q-29.67 0-50.17-20.5T160-480q0-29.67 20.5-50.17t50.17-20.5q29.66 0 50.16 20.5 20.5 20.5 20.5 50.17t-20.5 50.17q-20.5 20.5-50.16 20.5Zm249.33 0q-29.67 0-50.17-20.5T409.33-480q0-29.67 20.5-50.17t50.17-20.5q29.67 0 50.17 20.5t20.5 50.17q0 29.67-20.5 50.17T480-409.33Zm249.33 0q-29.66 0-50.16-20.5-20.5-20.5-20.5-50.17t20.5-50.17q20.5-20.5 50.16-20.5 29.67 0 50.17 20.5T800-480q0 29.67-20.5 50.17t-50.17 20.5ZM230.67-658.67q-29.67 0-50.17-20.5T160-729.33q0-29.67 20.5-50.17t50.17-20.5q29.66 0 50.16 20.5 20.5 20.5 20.5 50.17 0 29.66-20.5 50.16-20.5 20.5-50.16 20.5Zm249.33 0q-29.67 0-50.17-20.5t-20.5-50.16q0-29.67 20.5-50.17T480-800q29.67 0 50.17 20.5t20.5 50.17q0 29.66-20.5 50.16-20.5 20.5-50.17 20.5Zm249.33 0q-29.66 0-50.16-20.5-20.5-20.5-20.5-50.16 0-29.67 20.5-50.17t50.16-20.5q29.67 0 50.17 20.5t20.5 50.17q0 29.66-20.5 50.16-20.5 20.5-50.17 20.5Z"/>
          </svg>
        </button>

        {isMenuOpen && (
          <div style={{ zIndex: 9999}} className="absolute bg-white top-0 h-full mx-auto flex flex-col right-0 items-center  w-full rounded-md shadow-lg md:hidden">
            <button
              onClick={() => setIsMenuOpen(false)} // Close menu when cancel icon is clicked
              className="absolute top-4 left-4 text-[#EEE40A] text-2xl"
            >
              ✖
            </button>
            <Lang_Btn_list4_mbl />

            <div className="flex flex-row items-center justify-center h-16 bg-[#111827] w-full">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image src={icon2} alt="Cryptonews" width={200} height={16} />
              </Link>
            </div>
            <span className="text-sm mt-4">Subscribe to our social media</span>
            <div className="mt-0">
              <ul className="mt-2 flex space-x-5">
                <li>
                  <a href="javascript:void(0)">
                    <Image
                      src="svg/facebook.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Facebook"
                      className="mt-2 h-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <Image
                      src="svg/twitter.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Twitter"
                      className="mt-2 h-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <Image
                      src="svg/whatsapp.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Whatsapp"
                      className="mt-2 h-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <Image
                      src="svg/instagram.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Instagram"
                      className="mt-2 h-full"
                    />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <Image
                      src="svg/telegram.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Telegram"
                      className="mt-2 h-full"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 justify-start w-full my-5 mx-7 px-5">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div className={`cursor-pointer inline-block  ${getActiveLink('/')}`}>News</div>
              </Link>
  <div className={`cursor-pointer flex flex-row  justify-between  `}>

    <Link href='/market' onClick={() => setIsMenuOpen(false)}  className={`cursor-pointer ${getActiveLink('/market')}`}>Market</Link>
  
  {
    isMarket ? (
      <svg 
       // Correctly set the state on click
       onClick={() => setIsMarket(false)} 
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960" 
        width="29px" 
        fill="#666666"
        
      >
        <path d="M200-440v-80h560v80H200Z"/>
      </svg>
    ) : (
      <svg 
        onClick={() => setIsMarket(true)} // Correctly set the state on click
        xmlns="http://www.w3.org/2000/svg" 
        height="28px" 
        viewBox="0 -960 960 960" 
        width="29px" 
        fill="#666666"
      >
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
      </svg>
    )
  }
</div>
{
  isMarket &&(
   <> 
   <ol className='mt-0 text-[14px] '>
   <li className=' border-b max-w-max'>ico token</li>
    <li className=' border-b max-w-max'>upcoming token</li>
    <li className=' border-b max-w-max'>All coins info</li>
   </ol>
    </>

  )
}
              <Link href="/crypto-whales" onClick={() => setIsMenuOpen(false)}>
                <div className={`cursor-pointer inline-block ${getActiveLink('/crypto-whales')}`}>Whales Tracking</div>
              </Link>
              <Link href="/New-listing" onClick={() => setIsMenuOpen(false)}>
                <div className={`cursor-pointer font-inter inline-block ${getActiveLink('/New-listing')}`}>New Listing</div>
              </Link>
            </div>

            <DownloadBadges2 />
          </div>
        )}

        {/* Language switcher component */}
        <Lang_Btn_list4 />
      </div>
    </div>
  );
};
