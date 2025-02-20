import Link from "next/link";
import "@/app/shape.css";
import Head from "next/head";
import Image from "next/image";
// Default SEO metadata for the entire ICO page


export default function Upcoming({ serverData, visibleItems, handleShowMore }) {

  return (
    <>

       

        <div className="bg-[#f0f2f4] overflow-hidden ">
        <div className="bg-white mt-10 py-2 px-5 lg:mx-32 max-lg:mx-3 max-w-max">
            <div className="flex flex-row gap-1 items-center">
                <Image
                    src="/images/favicon.png"
                    alt="logo.png"
                    height={40}
                    width={40}
                    className="w-10 h-10"
                />
                <h1 className="font-sans text-[30px]">Upcoming Coins</h1>
            </div>
            <p className="mt-2 text-[#212529] font-sans text-[18px] max-sm:text-[14px]">
Discover the next big cryptocurrencies set to launch in the market.
Get ahead of the curve with detailed information on upcoming coin projects.
Track the latest coin launches, their potential, and the buzz surrounding them
            </p>

        </div>

        <div className="flex flex-row gap-0 mt-10 lg:mx-32 max-lg:mx-3  scrol ">
            <div className={`p-5 text-center max-sm:mx-2 max-sm:p-2 text-[#007bff]  `}>
                <h1 className="font-medium text-lg max-sm:text-[14px]">Top Coins</h1>
            </div>
            <Link href='/market/defi_coins'>
      <div className={`hover:text-blue-200 max-sm:mx-2 max-sm:p-2 text-center hover:cursor-pointer text-[#007bff] p-5 `}>
        <h1 className='font-medium text-lg max-sm:text-[14px]'>DeFi Coins</h1>
      </div>
    </Link>
            <Link href="/market/new_coins">
                <div className={` hover:text-blue-200 text-center hover:cursor-pointer max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5`}>
                    <h1 className="font-medium text-[#007bff] text-lg max-sm:text-[14px]">New Coins</h1>
                </div>
            </Link>
            <Link href="/market/ico">
      <div className={`hover:text-blue-200 text-center hover:cursor-pointer max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
        <h1 className="font-medium text-lg max-sm:text-[14px]">Presale Coins</h1>
      </div>
    </Link>

    <Link href="/market/upcoming-token">
      <div className={`hover:text-blue-200 text-center hover:cursor-pointer max-sm:mx-2 max-sm:p-2 bg-white text-black p-5 `}>
        <h1 className="font-medium text-lg max-sm:text-[14px] ">Upcoming Coins</h1>
      </div>
    </Link>
    <Link href="/market/cryptocoin">
      <div className={`hover:text-blue-200 text-center hover:cursor-pointer max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
        <h1 className="font-medium text-lg max-sm:text-[14px]">Coins List</h1>
      </div>
    </Link>
            
        </div>

        <div className="bg-white mt-0 py-2 px-10 max-lg:px-2 lg:mx-32 max-md:mx-3">
            <div className="my-4 max-sm:my-1 bg-white">
                <div className="flex space-x-3 max-sm:space-x-5 overflow-auto break-words max-sm:p-1 flex-row justify-between bg-[#f8f9fa] p-2 shadow-md">
                    <div>10875 <span className="text-[#6c757d]">Coins</span></div>
                   
                </div>

                <div className="overflow-x-auto">
                <table className="min-w-full text-left rtl:text-right text-black dark:text-gray-400 mt-5 table-auto">
                            <thead className="text-[15px] text-black uppercase bg-white dark:bg-white dark:text-gray-400">
                                <tr className="text-black font-medium">
                                    {/* <th scope="col" className="px-4 py-3 w-[10%]">RANK</th>
                                    <th scope="col" className="px-4 py-3 w-[30%] md:w-[30%]">COIN</th> */}
                                    <th scope="col" className="px-4 py-3 ">Coin Name</th>
                                    <th scope="col" className="px-4 py-3 ">Date</th>
                                    {/* <th scope="col" className="px-4 py-3">7D</th>
                                    <th scope="col" className="px-4 py-3">Marketcap</th>
                                    <th scope="col" className="px-4 py-3">Volume</th> */}
                                </tr>
                            </thead>
                            <tbody className="font-serif">
                            {serverData.slice(0, visibleItems).map((item,index)=>{
                              const { name, image, link, time ,} = item;

                              return(
                                <tr key={index} className="px-4 py-3">
                                {/* <td className="px-5 py-5">{index}</td> */}

                                {/* Coin Name & Image Column with Flex for Responsiveness */}
                                <td className="flex flex-row items-center gap-3 px-2 py-5 max-sm-pr-10">
                                    <Image
                                        alt={image}
                                        height={25}
                                        width={25}
                                        src={image}
                                        className="w-[30px] h-[30px] object-cover"
                                    />
                                 <span className="text-sm font-serif text-[#007bff] md:text-lg font-medium">
  {name.length > 5 ? name.split('').slice(0, 5).join('') + '...' : name}
</span>

                                </td>

                             
                                <td className="text-left px-5 py-3 ">{time}</td>
                            </tr>
                              )
                            })}
                            </tbody>
                        </table>
                </div>
                {visibleItems < serverData.length && (
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-6 max-md:px-2 max-md:text-[10px] max-md:py-1 py-3 mb-10 bg-gray-900 text-[#EEE40A] rounded hover:bg-gray-600"
              >
                Show More
              </button>
            </div>
          )}            </div>
        </div>
    </div>



     
    </>
  );
}
