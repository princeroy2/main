import Link from "next/link";
import Image from "next/image";
// Default SEO metadata for the entire ICO page


export default function Ico({ serverData, visibleItems, handleShowMore }) {

  return (
  

       

<div className="bg-[#f0f2f4] overflow-hidden ">
<div className="bg-white mt-10 py-2 px-5 lg:mx-32 max-lg:mx-3 max-w-max">
    <div className="flex flex-row gap-1 items-center">
        <Image
            src="/images/favicon.png"
            alt="logo.png"
            height={40}
            width={40}
            className="w-10 h-10"
            unoptimized 
        />
        <h1 className="font-sans text-[30px]">Presale Coins</h1>
    </div>
    <p className="mt-2 text-[#212529] font-sans text-[18px] max-sm:text-[14px]">
    Explore the latest presale tokens and ICOs with exclusive early investment opportunities
    Get detailed insights into upcoming ICOs, including tokenomics and project goals.
    </p>

   
</div>

<div className="flex flex-row gap-0 mt-10 lg:mx-32 max-lg:mx-1  scrol ">
    <div className={`p-5 max-sm:mx-2 max-sm:p-2 text-center  text-[#007bff] `}>
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
<div className={`hover:text-blue-200 text-center hover:cursor-pointer max-sm:mx-2 max-sm:p-2 bg-white text-black p-5 `}>
<h1 className="font-medium text-lg max-sm:text-[14px]  ">Presale Coins</h1>
</div>
</Link>

<Link href="/market/upcoming-token">
<div className={`hover:text-blue-200 hover:cursor-pointer text-center max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
<h1 className="font-medium text-lg max-sm:text-[14px]">Upcoming Coins</h1>
</div>
</Link>
<Link href="/market/cryptocoin">
<div className={`hover:text-blue-200 hover:cursor-pointer text-center max-sm:mx-2 max-sm:p-2 text-[#007bff] p-5 `}>
<h1 className="font-medium text-lg max-sm:text-[14px]">Coins List</h1>
</div>
</Link>
    
</div>

<div className="bg-white mt-0 py-2 px-10 max-lg:px-2 lg:mx-32 max-md:mx-3">
    <div className="my-4 max-sm:my-1 bg-white">
        <div className="flex space-x-3 max-sm:space-x-5 overflow-auto break-words max-sm:p-1 flex-row justify-between bg-[#f8f9fa] p-2 shadow-md">
            <div>10875 <span className="text-[#6c757d]">Coins</span></div>
           
        </div>

        <div className="overflow-x-auto scrol">
        <table className="min-w-full max-sm:w-full text-left rtl:text-right text-black dark:text-gray-400 mt-5 ">
                    <thead className="text-[15px] text-black uppercase bg-white dark:bg-white dark:text-gray-400">
                        <tr className="text-black font-medium">
                            {/* <th scope="col" className="px-4 py-3 w-[10%]">RANK</th>
                            <th scope="col" className="px-4 py-3 w-[30%] md:w-[30%]">COIN</th> */}
                            <th scope="col" className="px-4 py-3 ">Coin</th>
                            <th scope="col" className="px-4 py-3 ">stage</th>
                            <th scope="col" className="px-4 py-3">Chain</th>
                            <th scope="col" className="px-4 py-3">start_Date</th>
                            <th scope="col" className="px-4 py-3">end_Date</th>
                        </tr>
                    </thead>
                    <tbody className="font-serif">
                    {serverData.slice(0, visibleItems).map((item,index)=>{
                  const { name, perpose_token, image, link, stage, chain_name, chain_img, start_Date, end_Date } = item;

                      return(
                        <tr key={index} className="px-4 py-3">
                        {/* <td className="px-5 py-5">{index}</td> */}

                        {/* Coin Name & Image Column with Flex for Responsiveness */}
                        <td className="flex flex-row items-center gap-3 px-2 py-5">
                            <Image
                                alt={image}
                                height={20}
                                width={20}
                                src={image}
                                className="w-[30px] h-[30px] object-cover"
                                unoptimized 
                            />
                            <span className="text-sm max-sm:text-[10px] font-serif text-[#007bff] md:text-lg font-medium">{name}</span>
                        </td>

                        <td className="text-left max-sm:text-[10px] px-5 py-3">{stage}</td>
                        <td className="flex flex-row items-center gap-3 px-2 py-5">
                            <Image
                                alt={chain_img}
                                height={20}
                                width={20}
                                src={chain_img}
                                unoptimized 
                                className="w-[20px] h-[20px] object-cover"
                            />
                            <span className="text-sm font-serif max-sm:text-[10px] text-[#007bff] md:text-lg font-medium">{chain_name}</span>
                        </td>
                        <td className="text-left px-5 py-3 max-sm:text-[10px] ">{start_Date}</td>
                        <td className="text-left px-5 py-3  max-sm:text-[10px]">{end_Date}</td>
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




  );
}
