import Link from "next/link";
import "@/app/shape.css";
import Head from "next/head";

// Default SEO metadata for the entire ICO page


export default function Upcoming({ serverData, visibleItems, handleShowMore }) {

  return (
    <>
      <div className="grid grid-cols-1">
       

        <div className="relative mx-5 max-sm:p-0 p-5 ">
          <h1 className="font-bold text-lg text-center">ICO TOKEN</h1>
          <h1 className="font-semibold text-center">Top ICOs & Upcoming ICO Calendar</h1>

          <div className="overflow-x-auto"> {/* Make table scrollable on small screens */}
            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5 table-auto">
              <thead className="text-xs font-bold text-black uppercase bg-[#aca643]  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 w-[50%]">
                    ICO NAME
                  </th>
                  <th scope="col" className="px-4 py-3 text-end ">
                    CURRENT STAGE
                  </th>
                
                </tr>
              </thead>
              <tbody>
                {serverData.slice(0, visibleItems).map((item) => {
                  const { name, image, link, time } = item;
                  return (
                    <tr
                      key={name}
                      onClick={() => window.location.href = link}
                      className="bg-white border-b flex-wrap whitespace-nowrap dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                    >
                      <td className="px-4 py-4 flex items-center gap-2 text-gray-900 whitespace-nowrap dark:text-white">
                        <img
                          src={image}
                          alt={name}
                          className="w-[50px] max-sm:h-[30px]  max-sm:w-[30px] h-[50px] object-cover rounded-lg"
                        />
                        <h1 className="text-sm text-[#414242] max-sm:text-[10px] text-[16px] font-bold">{name}</h1>
                      </td>
                      <td className="px-4 py-4 max-sm:mr-4 flex-nowrap text-end ">
                        <h1 className="font-[700] max-sm:text-[10px] text-[#019601]">{time}</h1>
                      </td>
                    
                   
                    </tr>
                  );
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
          )}
        </div>
      </div>

     
    </>
  );
}
