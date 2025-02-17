'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MarketCoinsData, { DefiDatanews, newscoinsDatanews } from '@/cryptoapis/all_markt_coins';
import Link from 'next/link';
import Pagination from '@/crypto/pagination';
import Router from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';

const Market_page = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [link, setLink] = useState('');

  const searchParams = useSearchParams();
  const pathname = usePathname(); // Getting the full pathname, e.g., "/market/defi_coins"
  const page = searchParams.get('page') || '1'; // Get 'page' from search params, default to 1

  // Extract the last part of the pathname
  const pathParts = pathname.split('/');
  console.log('..................',pathname)
  const name = pathParts[pathParts.length - 1]; // This will give "defi_coins" from "/market/defi_coins"
  console.log(name)
      const getActiveLink = (path) => {
          if (pathname === path) {
            return 'bg-[#EEE40A] text-black';
          }
          return 'bg-[#f0f2f4] text-[#007bff] ';
        };

  const fetchData = async (pageNumber) => {
    let dataResponse;
    if (name === 'defi_coins') {
      dataResponse = await DefiDatanews(pageNumber);
      setLink('/market/defi_coins');
    } else if (name === 'new_coins') {
      dataResponse = await newscoinsDatanews(pageNumber);
      setLink('/market/new_coins');
    } else if (name === 'All_coins') {
        dataResponse = await MarketCoinsData(pageNumber);
        setLink('/market/All_coins');
    } else {
      return; // Handle if neither 'defi_coins' nor 'new_coins' is passed
    }

    setData(dataResponse?.items || []);
    setTotalPages(dataResponse?.total_pages || 0);
    setCurrentPage(dataResponse?.current_page || 1);
  };

  useEffect(() => {
    fetchData(page); // Fetch data when page changes
  }, [page, name]); // Dependency array ensures it runs whenever 'page' or 'name' changes

  return (
    <>
      <div className='bg-[#f0f2f4] overflow-hidden '>
        <div className='bg-white mt-10 py-2 px-5 sm:mx-32  max-sm:mx-3'>
          <div className='flex flex-row gap-4 items-center'>
            <Image
              src='/images/btc.png'
              alt='logo.png'
              height={40}
              width={40}
              className='w-10 h-10'
            />
            <h1 className='font-sans text-[30px]'>
              {name === 'new_coins' ? 'NEW Coins' :
                name === 'defi_coins' ? 'DeFi Coins' : 'Cryptocurrencies'}
            </h1>
          </div>
          <p className='mt-2 text-[#212529] font-sans text-[18px] max-sm:text-[14px]'>
            {name === 'new_coins'
              ? 'Learn about new coins: what it is, where to buy it and where to store it.'
              : name === 'defi_coins'
              ? 'Learn about DeFi coins: what they are, where to buy them and where to store them.'
              : 'Learn about cryptocurrencies: what they are, where to buy them and where to store them.'}
          </p>

          <p className='py-1 text-[#212529] font-sans text-[18px] max-sm:text-[14px]'>
            We have compiled data on the best exchanges to buy each coin based on volume and fees. 
            We have also compiled the best wallets to store any coin so that your valuable crypto is always safe and accessible!
          </p>
        </div>

        <div className='flex flex-row gap-0 mt-10 sm:mx-32 max-sm:mx-3'>
          <Link href='/market'>
          <div className={`p-5  max-sm:p-3 ${getActiveLink('/market')}`}>
          <h1 className='font-medium text-lg max-sm:text-[16px]'>Top Coins</h1>
            </div>
          </Link>
          <Link href='/market/new_coins'>
          <div className={` hover:text-blue-200 max-sm:p-3 hover:cursor-pointer  p-5 ${getActiveLink('/market/new_coins')}`}>
          <h1 className='font-medium  text-lg max-sm:text-[16px]'>New Coins</h1>
            </div>
          </Link>
          <Link href='/market/defi_coins'>
          <div className={` hover:text-blue-200 max-sm:p-3 hover:cursor-pointer p-5 ${getActiveLink('/market/defi_coins')}`}>
          <h1 className='font-medium text-lg max-sm:text-[16px]'>DeFi Coins</h1>
            </div>
          </Link>
        </div>

        <div className='bg-white mt-0 py-2 px-10 max-sm:px-2  sm:mx-32 max-sm:mx-3'>
          <div className="my-4 max-sm:my-1 bg-white">
            <div className='flex space-x-3 max-sm:space-x-5 overflow-auto break-words max-sm:p-1 flex-row justify-between bg-[#f8f9fa] p-2 shadow-md'>
              {/* <div>$3.16T <span className='text-[#6c757d]'> Market Cap</span></div>
              <div>$100B 24h <span className='text-[#6c757d]'> Volume</span></div>
              <div>60.33% BTC<span className='text-[#6c757d]'> Dominance</span></div> */}
              <div>10875 <span className='text-[#6c757d]'>Coins</span></div>
              <div><input type='search' className="border px-2 py-1 rounded-md" placeholder="Search..." /></div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left rtl:text-right text-black dark:text-gray-400 mt-5 table-auto">
                <thead className="text-[15px] text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
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
                  {data.map((item, index) => (
                    <tr key={index} className='px-4 py-3'>
                      {name !== 'new_coins' && <td className='px-5 py-5'>{item.rank}</td>}
                      <td className='flex flex-row items-center gap-3 px-2 py-5'>
                        <Image alt={item.coin_name} height={25} width={25} src={item.img_src} className="w-[30px] h-[30px] object-cover" />
                        <span className="text-sm font-serif text-[#007bff] md:text-lg font-medium">{item.coin_name}</span>
                      </td>
                      <td className='text-center  px-5 py-3'>{item.price}</td>
                      <td className={`text-center px-5 py-3 ${item.hour_1_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.hour_1_change}</td>
                      <td className={`text-center px-5 py-3 ${item.hour_24_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.hour_24_change}</td>
                      <td className={`text-center px-5 py-3  ${item.day_7_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.day_7_change}</td>
                      <td className='text-center px-5 py-3'>{item.market_cap}</td>
                      <td className='text-center px-5 py-3'>{name === 'new_coins' ? item.Released : item.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
            <Pagination total_pages={totalPages} current_page={currentPage} link={link} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Market_page;
