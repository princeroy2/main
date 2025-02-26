'use client';
import { useEffect, useState } from 'react'; // Import useState and useEffect hooks
import { Suspense } from 'react';
import Image from 'next/image';
import MarketCoinsData, { DefiDatanews, newscoinsDatanews } from '@/cryptoapis/all_markt_coins';
import Link from 'next/link';
import Pagination from '@/crypto/pagination';
import Custom404 from './Custom404';
import { useSearchParams } from 'next/navigation';

const Market_pagename = ({ name }) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let datacall;
        if (name === 'new_coins') {
          datacall = await newscoinsDatanews(page);
        } else if (name === 'defi_coins') {
          datacall = await DefiDatanews(page);
        } else {
          setError('Invalid coin type');
          return;
        }

        const data = datacall?.items || [];
        const total_pages = datacall?.total_pages || 0;
        const current_page = datacall?.current_page || 1;

        setData(data);
        setTotalPages(total_pages);
        setCurrentPage(current_page);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name, page]);

  const getActiveLink = (path) => {
    if (name === path) {
      return 'bg-white text-black';
    }
    return 'bg-[#f0f2f4] text-[#007bff]';
  };

  if (error) {
    return <Custom404 />;
  }

  return (
    <div className='bg-[#f0f2f4] overflow-hidden'>
      <div className='bg-white mt-10 py-2 px-5 lg:mx-32 max-md:mx-3'>
        <div className='flex flex-row gap-4 items-center'>
          <Image
            src='/images/favicon.png'
            alt='logo.png'
            height={40}
            width={40}
            className='w-10 h-10'
            unoptimized 
          />
          <h1 className='font-sans text-[30px]'>
            {name === 'new_coins' ? 'New Coins' :
              name === 'defi_coins' ? 'DeFi Coins' : 'Cryptocurrencies'}
          </h1>
        </div>
        <p className='mt-2 text-[#212529] font-sans text-[18px] max-sm:text-[14px]'>
          {name === 'new_coins'
            ? 'Stay updated with new coin listings and their market debut details Access real-time data on the latest listings, including price trends and market potentia'
            : name === 'defi_coins'
            ? 'Discover newly launched DeFi coins and their potential in the decentralized finance space Access detailed metrics like trading volume, market cap, and price fluctuations for all DeFi assets '
            : 'Learn about cryptocurrencies: what they are, where to buy them and where to store them.'}
        </p>

      
      </div>

      <div className='flex flex-row gap-0 mt-10 lg:mx-32 max-md:mx-3 overflow-auto scrol'>
        <Link href='/market'>
          <div className={`p-5 max-sm:mx-2 max-sm:p-2 text-center ${getActiveLink('/market')}`}>
            <h1 className='font-medium text-lg max-sm:text-[14px]'>Top Coins</h1>
          </div>
        </Link>
       
        <Link href='/market/defi_coins'>
          <div className={`hover:text-blue-200 max-sm:mx-2 max-sm:p-2 text-center hover:cursor-pointer p-5 ${getActiveLink('defi_coins')}`}>
            <h1 className='font-medium text-lg max-sm:text-[14px]'>DeFi Coins</h1>
          </div>
        </Link>
        <Link href='/market/new_coins'>
          <div className={`hover:text-blue-200 max-sm:mx-2 max-sm:p-2 text-center hover:cursor-pointer p-5 ${getActiveLink('new_coins')}`}>
            <h1 className='font-medium text-lg max-sm:text-[14px]'>New Coins</h1>
          </div>
        </Link>

        <Link href="/market/ico">
          <div className={`hover:text-blue-200 text-center  hover:cursor-pointer max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
            <h1 className="font-medium text-lg max-sm:text-[14px]">Presale Coins</h1>
          </div>
        </Link>

        <Link href="/market/upcoming-token">
          <div className={`hover:text-blue-200 text-center  hover:cursor-pointer max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
            <h1 className="font-medium text-lg max-sm:text-[14px]">Upcoming Coins</h1>
          </div>
        </Link>
        <Link href="/market/cryptocoin">
          <div className={`hover:text-blue-200 text-center  hover:cursor-pointer max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
            <h1 className="font-medium text-lg max-sm:text-[14px]">Coins List</h1>
          </div>
        </Link>
      </div>

      <div className='bg-white mt-0 py-2 px-10 max-sm:px-2 lg:mx-32 max-md:mx-3'>
        <div className="my-4 max-sm:my-1 bg-white">
          <div className='flex space-x-3 max-sm:space-x-5 overflow-auto break-words max-sm:p-1 flex-row justify-between bg-[#f8f9fa] p-2 shadow-md'>
            <div>10875 <span className='text-[#6c757d]'>Coins</span></div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left rtl:text-right text-black dark:text-gray-400 mt-5 table-auto">
              <thead className="text-[15px] text-black uppercase bg-white dark:bg-white dark:text-gray-400">
                <tr className='text-black font-medium'>
                  {name !== 'new_coins' && <th scope="col" className="px-4 py-3 w-[10%]">RANK</th>}
                  <th scope="col" className="px-4 py-3 w-[30%] md:w-[30%]">COIN</th>
                  <th scope="col" className="px-4 py-3">PRICE</th>
                  <th scope="col" className="px-4 py-3">1H</th>
                  <th scope="col" className="px-4 py-3">24H</th>
                  <th scope="col" className="px-4 py-3">7D</th>
                  <th scope="col" className="px-4 py-3">Marketcap</th>
                  <th scope="col" className="px-4 py-3">{name !== 'new_coins' ? 'Volume' : 'Released'}</th>
                </tr>
              </thead>
              <tbody className='font-serif'>
                {loading ? (
                  <tr><td colSpan="8" className="text-center">Loading...</td></tr>
                ) : (
                  data.map((item, index) => (
                    <tr key={index} className='px-4 py-3'>
                      {name !== 'new_coins' && <td className='px-5 py-5'>{item.rank}</td>}
                      <td className='flex flex-row items-center gap-3 px-2 py-5'>
                        <Image alt={item.coin_name} height={25} width={25} src={item.img_src} unoptimized  className="w-[30px] h-[30px] object-cover" />
                        <span className="text-sm font-serif text-[#007bff] md:text-lg font-medium">{item.coin_name}</span>
                      </td>
                      <td className='text-center  px-5 py-3'>{item.price}</td>
                      <td className={`text-center px-5 py-3 ${item.hour_1_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.hour_1_change}</td>
                      <td className={`text-center px-5 py-3 ${item.hour_24_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.hour_24_change}</td>
                      <td className={`text-center px-5 py-3  ${item.day_7_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.day_7_change}</td>
                      <td className='text-center px-5 py-3'>{item.market_cap}</td>
                      <td className='text-center px-5 py-3'>{name === 'new_coins' ? item.Released : item.volume}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <Pagination total_pages={totalPages} current_page={currentPage} link={`${name}`} />
        </div>
      </div>
    </div>
  );
};

export default Market_pagename;
