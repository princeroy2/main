import React from 'react'
import Image from 'next/image'
import MarketCoinsData from '@/cryptoapis/all_markt_coins'
import Link from 'next/link'
import Pagination from '@/crypto/pagination'

const Market_page = async () => {
    const data2 = await MarketCoinsData(1)
    
    const total_pages=data2?.total_pages
    const current_page=data2?.current_page
     const link='/market'
    const data = data2?.items

    return (
        <>
            <div className='bg-[#f0f2f4] overflow-hidden'>
                <div className='bg-white mt-10 py-2 px-5 mx-32'>
                    <div className='flex flex-row gap-4 items-center'>
                        <Image
                            src='/images/btc.png'
                            alt='logo.png'
                            height={40}
                            width={40}
                            className='w-10 h-10'
                        />
                        <h1 className='font-sans text-[30px]'>Cryptocurrencies</h1>
                    </div>
                    <p className='mt-2 text-[#212529] font-sans text-[18px]'>
                    Learn about each coin: what it is, where to buy it and where to store it.
                    </p>
                 
                    <p className='py-1 text-[#212529] font-sans text-[18px]'>

                    We have compiled data on the best exchanges to buy each coin based on volume and fees. We have also compiled the best wallets to store any coin so that your valuable crypto is always safe and accessible!
</p>
                </div>

                <div className='flex flex-row gap-0 mt-10 mx-32'>
   <div className=' bg-white p-5 '>
        <h1 className='font-medium text-lg'>Top Coins</h1>
    </div>
    <Link href='/market/new_coins'>
    <div className=' bg-[#f0f2f4] hover:text-blue-200 hover:cursor-pointer text-[#007bff]  p-5'>
        <h1 className='font-medium text-[#007bff] text-lg'>New Coins</h1>
    </div>
    </Link>
    <Link href='/market/defi_coins'>
    <div className=' bg-[#f0f2f4] hover:text-blue-200 hover:cursor-pointer text-[#007bff]  p-5'>
        <h1 className='font-medium text-lg'>DeFi Coins</h1>
    </div>
    </Link>
</div>


                <div className='bg-white mt-0 py-2 px-10 mx-32'>
                    <div className="my-4 bg-white">
                        <div className='flex space-x-3 flex-row justify-between bg-[#f8f9fa] p-2 shadow-md'>
                            <div>$3.16T <span className='text-[#6c757d]'> Market Cap</span></div>
                            <div>$100B 24h <span className='text-[#6c757d]'> Volume</span></div>
                            <div>60.33% BTC<span className='text-[#6c757d]'> Dominance</span></div>
                            <div>10875 <span className='text-[#6c757d]'>Coins</span></div>
                            <div><input type='search' className="border px-2 py-1 rounded-md" placeholder="Search..." /></div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left rtl:text-right text-black dark:text-gray-400 mt-5 table-auto">
                                <thead className="text-[15px] text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                                    <tr className='text-black font-medium '>
                                        <th scope="col" className="px-4 py-3 w-[10%]">RANK</th>
                                        <th scope="col" className="px-4 py-3 w-[30%] md:w-[30%]">COIN</th> {/* Adjusted width for responsiveness */}
                                        <th scope="col" className="px-4 py-3">PRICE</th>
                                        <th scope="col" className="px-4 py-3">1H</th>
                                        <th scope="col" className="px-4 py-3">24H</th>
                                        <th scope="col" className="px-4 py-3">7D</th>
                                        <th scope="col" className="px-4 py-3">Marketcap</th>
                                        <th scope="col" className="px-4 py-3">Volume</th>
                                    </tr>
                                </thead>
                                <tbody className='font-serif'>
                                    {data.map((item, index) => {
                                        return (
                                            <tr key={index} className='px-4 py-3'>
                                                <td className='px-5 py-5'>{item.rank}</td>

                                                {/* Coin Name & Image Column with Flex for Responsiveness */}
                                                <td className='flex flex-row items-center gap-3 px-2 py-5'>
                                                    <Image
                                                        alt={item.coin_name}
                                                        height={25}
                                                        width={25}
                                                        src={item.img_src}
                                                        className="w-[30px] h-[30px] object-cover"
                                                    />
                                                    <span className="text-sm font-serif text-[#007bff] md:text-lg font-medium">{item.coin_name}</span>
                                                </td>

                                                <td className='text-center  px-5 py-3'>{item.price}</td>
                                                <td className={`text-center px-5 py-3 ${item.hour_1_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                                    {item.hour_1_change}
                                                </td>
                                                <td className={`text-center px-5 py-3 ${item.hour_24_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.hour_24_change}</td>
                                                <td className={`text-center px-5 py-3  ${item.day_7_change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{item.day_7_change}</td>
                                                <td className='text-center px-5 py-3 '>{item.market_cap}</td>
                                                <td className='text-center px-5 py-3 '>{item.volume}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination total_pages={total_pages} current_page={current_page} link={link}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Market_page;
