import React from 'react'
import Image from 'next/image'
import Glossary_Searh from '@/cryptoapis/coins_Search-glossary'

const Page = async ({params}) => {
  const name = await params.title;
  console.log(name)
  const data1=await Glossary_Searh(name)
  const data=data1.coins
  console.log(data[0])

  return (
    <>
      <div className="bg-[#f0f2f4] overflow-hidden">
        <div className="bg-white mt-10 py-2 px-5 sm:px-10 md:px-20 lg:px-32">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Image
              src={`https://www.cryptocompare.com/${data[0]?.ImageUrl}`}
              alt="logo.png"
              height={40}
              width={40}
              className="w-10 h-10"
            />
            <h1 className="font-sans text-[30px] sm:text-[40px]">{data[0]?.FullName}</h1>
          </div>
          <p className="mt-2 text-[#212529] font-sans text-[16px] sm:text-[18px]">
            {data[0]?.Description}
          </p>

          {/* Section for Coin Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border p-4">
              <h1 className="font-semibold">CirculatingSupply</h1>
              <span>{data[0]?.CirculatingSupply}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">TotalCoinsMined</h1>
              <span>{data[0]?.TotalCoinsMined}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">SmartContractAddress</h1>
              <span className='break-words'>{data[0]?.SmartContractAddress}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">BlockNumber</h1>
              <span>{data[0]?.BlockNumber}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold ">OtherSmartContractAddress</h1>
              <span className="break-words ">{data[0]?.OtherSmartContractAddress}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border p-4">
              <h1 className="font-semibold">Max Supply</h1>
              <span>{data[0]?.MaxSupply}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">Launch Date</h1>
              <span>{data[0]?.AssetLaunchDate}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">Chain</h1>
              <span>{data[0]?.BuiltOn}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">Prooftype</h1>
              <span>{data[0]?.Prooftype}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">IsTrading</h1>
              <span>{data[0]?.IsTrading}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border p-4">
              <h1 className="font-semibold">Website</h1>
              <span>{data[0]?.AssetWebsiteUrl}</span>
            </div>
            <div className="border p-4">
              <h1 className="font-semibold">WhitePaper</h1>
              <span>{data[0]?.AssetWhitepaperUrl}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
