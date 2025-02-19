'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import MarketCoinsData, { coinsearch } from '@/cryptoapis/all_markt_coins';
import Link from 'next/link';
import Pagination from '@/crypto/pagination';

const Market_page = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || '1'; // Default to page 1
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [total_pages, setTotal_pages] = useState(1);
    const [current_page, setCurrent_page] = useState(1);

    const link = '/market';

    // Client-side data fetching
    useEffect(() => {
        const fetchMarketData = async (page) => {
            const data2 = await MarketCoinsData(page); // Fetch market data for given page
            setTotal_pages(data2?.total_pages);
            setCurrent_page(data2?.current_page);
            setData(data2?.items); // Set market coin data
        };

        fetchMarketData(page); // Fetch data when page changes
    }, [page]); // Trigger when the `page` parameter changes

    // Effect to handle search change
    useEffect(() => {
        if (search.trim()) {
            coinsearch(search).then(res => {
                setData(res.items);
                setTotal_pages(res.total_pages);
                setCurrent_page(res.current_page);
            });
        } else {
            const fetchMarketData = async () => {
                const data2 = await MarketCoinsData(page);
                setData(data2?.items);
                setTotal_pages(data2?.total_pages);
                setCurrent_page(data2?.current_page);
            };
            fetchMarketData();
        }
    }, [search, page]);

    // Update search state
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>

        <div className="bg-[#f0f2f4] overflow-hidden ">
            <div className="bg-white mt-10 py-2 px-5 sm:mx-32 max-sm:mx-3 max-w-max">
                <div className="flex flex-row gap-1 items-center">
                    <Image
                        src="/images/i.png"
                        alt="logo.png"
                        height={40}
                        width={40}
                        className="w-10 h-10"
                    />
                    <h1 className="font-sans text-[30px]">Crypto Coins</h1>
                </div>
                <p className="mt-2 text-[#212529] font-sans text-[18px] max-sm:text-[14px]">
                    Learn about each coin: what it is, where to buy it and where to store it.
                </p>

                <p className="py-1 text-[#212529] font-sans text-[18px] max-sm:text-[14px]">
                    We have compiled data on the best exchanges to buy each coin based on volume and fees. We have also compiled the best wallets to store any coin so that your valuable crypto is always safe and accessible!
                </p>
            </div>

            <div className="flex flex-row gap-0 mt-10 sm:mx-32 max-sm:mx-3 ">
                <div className={`p-5 max-sm:p-3 bg-[#EEE40A] text-black`}>
                    <h1 className="font-medium text-lg max-sm:text-[16px]">Top Coins</h1>
                </div>
                <Link href='/market/defi_coins'>
          <div className={`hover:text-blue-200 max-sm:p-3 hover:cursor-pointer p-5 ${getActiveLink('defi_coins')}`}>
            <h1 className='font-medium text-lg max-sm:text-[16px]'>DeFi Coins</h1>
          </div>
        </Link>
                <Link href="/market/new_coins">
                    <div className={` hover:text-blue-200 hover:cursor-pointer max-sm:p-3 text-[#007bff] p-5`}>
                        <h1 className="font-medium text-[#007bff] text-lg max-sm:text-[16px]">New Coins</h1>
                    </div>
                </Link>
                <Link href="/market/ico">
          <div className={`hover:text-blue-200 hover:cursor-pointer max-sm:p-3 text-[#007bff] p-5 `}>
            <h1 className="font-medium text-lg max-sm:text-[16px]">Presale Coins</h1>
          </div>
        </Link>

        <Link href="/market/upcoming-token">
          <div className={`hover:text-blue-200 hover:cursor-pointer max-sm:p-3 text-[#007bff] p-5 `}>
            <h1 className="font-medium text-lg max-sm:text-[16px]">Upcoming Coins</h1>
          </div>
        </Link>
        <Link href="/market/cryptocoin">
          <div className={`hover:text-blue-200 hover:cursor-pointer max-sm:p-3 text-[#007bff] p-5 `}>
            <h1 className="font-medium text-lg max-sm:text-[16px]">A TO Z Coins</h1>
          </div>
        </Link>
                
            </div>

            <div className="bg-white mt-0 py-2 px-10 max-sm:px-2 sm:mx-32 max-sm:mx-3">
                <div className="my-4 max-sm:my-1 bg-white">
                    <div className="flex space-x-3 max-sm:space-x-5 overflow-auto break-words max-sm:p-1 flex-row justify-between bg-[#f8f9fa] p-2 shadow-md">
                        <div>10875 <span className="text-[#6c757d]">Coins</span></div>
                        <div>
                            <input
                                type="search"
                                value={search}
                                onChange={handleSearchChange}
                                className="border px-2 py-1 rounded-md"
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                    <table className="min-w-full text-left rtl:text-right text-black dark:text-gray-400 mt-5 table-auto">
                                <thead className="text-[15px] text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="text-black font-medium">
                                        <th scope="col" className="px-4 py-3 w-[10%]">RANK</th>
                                        <th scope="col" className="px-4 py-3 w-[30%] md:w-[30%]">COIN</th>
                                        <th scope="col" className="px-4 py-3">PRICE</th>
                                        <th scope="col" className="px-4 py-3">1H</th>
                                        <th scope="col" className="px-4 py-3">24H</th>
                                        <th scope="col" className="px-4 py-3">7D</th>
                                        <th scope="col" className="px-4 py-3">Marketcap</th>
                                        <th scope="col" className="px-4 py-3">Volume</th>
                                    </tr>
                                </thead>
                                <tbody className="font-serif">
                                    {data.map((item, index) => (
                                        <tr key={index} className="px-4 py-3">
                                            <td className="px-5 py-5">{item.rank}</td>

                                            {/* Coin Name & Image Column with Flex for Responsiveness */}
                                            <td className="flex flex-row items-center gap-3 px-2 py-5">
                                                <Image
                                                    alt={item.coin_name}
                                                    height={25}
                                                    width={25}
                                                    src={item.img_src}
                                                    className="w-[30px] h-[30px] object-cover"
                                                />
                                                <span className="text-sm font-serif text-[#007bff] md:text-lg font-medium">{item.coin_name}</span>
                                            </td>

                                            <td className="text-center px-5 py-3">{item.price}</td>
                                            <td className={`text-center px-5 py-3 ${item.hour_1_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                                {item.hour_1_change}
                                            </td>
                                            <td className={`text-center px-5 py-3 ${item.hour_24_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.hour_24_change}</td>
                                            <td className={`text-center px-5 py-3  ${item.day_7_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.day_7_change}</td>
                                            <td className="text-center px-5 py-3 ">{item.market_cap}</td>
                                            <td className="text-center px-5 py-3 ">{item.volume}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                    <Pagination total_pages={total_pages} current_page={current_page} link={link} />
                </div>
            </div>
        </div>
        </Suspense>
    );
};

export default Market_page;


