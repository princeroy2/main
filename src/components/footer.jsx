'use client'
import { useState, useEffect } from "react";
import DownloadBadges from "./GooglePlayButton";
import Image from "next/image";
import Link from "next/link";
const icon = '/images/ii.png';

const Footer = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isPlatformsOpen, setPlatformsOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isAdditionalOpen, setAdditionalOpen] = useState(false);
  const [isPrivacyPolicies, setIsPrivacyPolicies] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <footer className="font-sans tracking-wide bg-gray-900 px-20 max-sm:px-15 pt-12 pb-0">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md max-sm:max-w-lg">
          <a href="">
            <Image
              src={icon}
              alt="Cryptonews"
              width={200}
              height={16}
            />
          </a>
          <div className="mt-2">
            <p className="text-[#b3c5ce] leading-relaxed text-sm ">
              Download App Stay up to date with the latest cryptocurrency news, blockchain updates, market trends, and expert analysis on CryptoNews
            </p>
            <DownloadBadges name={'justify-start'}/>
          </div>
          <ul className="mt-2 flex space-x-5">

            <li>
              <a href="">
               <Image
                      src="svg/facebook.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Google Play"
                      className='mt-2 h-full'
                    />
              </a>
            </li>
            <li>
              <a href="">
              <Image
                      src="svg/twitter.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Google Play"
                      className='mt-2 h-full'
                    />
              </a>
            </li>
            <li>
              <a href="">
              <Image
                      src="svg/whatsapp.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Google Play"
                      className='mt-2 h-full'
                    />
              </a>
            </li>
            <li>
              <a href="">
              <Image
                      src="svg/instagram.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Google Play"
                      className='mt-2 h-full'
                    />
              </a>
            </li>
            <li>
              <a href="">
              <Image
                      src="svg/telegram.svg" // Access SVG from public/svg
                      width={30}
                      height={20}
                      alt="Google Play"
                      className='mt-2 h-full'
                    />
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="max-lg:min-w-[140px]">
          <h4
            className="text-[white] font-semibold text-base relative max-sm:cursor-pointer"
            onClick={() => setServicesOpen(!isServicesOpen)}
          >
            News
            {isMobile && (
              <span className="absolute right-0 text-xl ">
                {
                isAdditionalOpen?   

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#EEE40A">
                  <path d="M200-440v-80h560v80H200Z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="#EEE40A">
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>
         }
          </span>
            )}
          </h4>

          {(isMobile ? isServicesOpen : true) && (
            <ul className="mt-6 space-y-4">
              <li>
                <a href="/" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Latest News
                </a>
              </li>
              <li>
                <a href="/news/bitcoin" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                Bitcoin
                </a>
              </li>
              <li>
                <a href="/news/defi" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Defi
                </a>
              </li>
              <li>
                <a href="/news/nft" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  NFT
                </a>
              </li>
              <li>
                <a href="/news/Ethereum" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                Ethereum
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Platforms */}
        <div className="max-lg:min-w-[140px]">
          <h4
            className="text-[white]  font-semibold text-base relative max-sm:cursor-pointer"
            onClick={() => setPlatformsOpen(!isPlatformsOpen)}
          >
            Editorial
            {isMobile && (
              <span className="absolute right-0 text-xl ">
                {
                isAdditionalOpen?   

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#EEE40A">
                  <path d="M200-440v-80h560v80H200Z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="#EEE40A">
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>
         }
          </span>
            )}
          </h4>
          {(isMobile ? isPlatformsOpen : true) && (
            <ul className="space-y-4 mt-6">
              <li>
                <a href="/blog" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                All articles
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  News
                </a>
              </li>
              <li>
                <a href="/market/ico" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Ico Token
                </a>
              </li>
              <li>
                <a href="/market/upcoming-token" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Upcoming Ico
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Company */}
        <div className="max-lg:min-w-[140px]">
          <h4
            className="text-[white]  font-semibold text-base relative max-sm:cursor-pointer"
            onClick={() => setCompanyOpen(!isCompanyOpen)}
          >
            About us
            {isMobile && (
              <span className="absolute right-0 text-xl ">
                {
                isAdditionalOpen?   

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#EEE40A">
                  <path d="M200-440v-80h560v80H200Z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="#EEE40A">
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>
         }
          </span>
            )}
          </h4>
          {(isMobile ? isCompanyOpen : true) && (
            <ul className="space-y-4 mt-6">
              <li>
                <Link href="/about-us" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about-app" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                About app
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="market/cryptocoin" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                Glossary
                </a>
              </li>
           
            </ul>
          )}
        </div>

        {/* Additional */}
        <div className="max-lg:min-w-[140px]">
          <h4
            className="text-[white]  font-semibold text-base relative max-sm:cursor-pointer"
            onClick={() => setIsPrivacyPolicies(!isPrivacyPolicies)}
          >
            Policies
           
             {isMobile && (
              <span className="absolute right-0 text-xl ">
                {
                isPrivacyPolicies?   

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#EEE40A">
                  <path d="M200-440v-80h560v80H200Z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="#EEE40A">
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>
         }
          </span>
            )}
          </h4>
          {(isMobile ? isPrivacyPolicies : true) && (
            <ul className="space-y-4 mt-6">
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                Privacy policy
                </Link>
              </li>
              <li>
                <a href="/term-condition" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                For copyright holders
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 text-[#b3c5ce] text-sm">
                  News
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

    <p className="text-sm text-[#b3c5ce] mt-7 text-center ">
      &copy; {new Date().getFullYear()} CrptoNews
    </p>
  

    </footer>
  );
};

export default Footer;