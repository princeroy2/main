import React from 'react'
import Image from 'next/image'
import WhalesData from '@/cryptoapis/whalesapi'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const Page = async () => {
    const data = await WhalesData()
    console.log(data)

    return (
        <div className='bg-[#f0f2f4]  overflow-hidden'>

            <div className=' max-sm:mb-10  mt-5 py-2 max-sm:py-1 px-5 max-sm:px-4 sm:mx-32'>
                <div className='flex flex-col gap-1 text-center items-center'>
                    <Image
                        src='/images/whales.webp'
                        alt='logo.png'
                        height={200}
                        width={400}
                        className=' text-center align-middle'
                    />
                    <h1 className='font-sans text-[30px]'>Whales Trake Now</h1>
                    <h2 className='mt-2 text-[#212529] font-sans text-[18px] font-medium'>Track the latest whale movements, discover where the big players are moving</h2>

                </div>





            </div>
            <div className=' bg-white text-[black] mt-5 max-sm:px-3 max-sm:mt-2 py-2 px-5 sm:mx-32'>

                <table className="w-full px-7 max-sm:px-2">

                    <tbody className="">
                        {
                            data.map((item, index) => {
                                let boldedDescription = item.description
                                    .replace(
                                        /(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g,  // Match numbers with commas and decimals
                                        "<b>$1</b>"  // Wrap matched numbers in <b> tags
                                    )
                                  

                                return (

                                    <tr key={index} className='max-sm:flex-col max-sm:flex border-b-2 '>
                                        <td className="px-3 py-3 font-mono w-[80%] max-sm:w-[100%] hover:bg-gray hover:cursor-pointer text-white hover:text-gray-400 flex flex-row gap-3 items-center font-lg break-words whitespace-wrap group">
                                            <Image
                                                height={20}
                                                width={20}
                                                src={item.img_url}
                                                alt="Icon"
                                            />
                                            <span
                                                className="flex-1 text-[17px] text-[black]  overflow-hidden sm:text-ellipsis sm:line-clamp-2 max-sm:break-words"
                                                dangerouslySetInnerHTML={{
                                                    __html: boldedDescription, // Render the modified description with bold numbers
                                                }}
                                            />

                                            <FontAwesomeIcon
                                                icon={faLink}
                                                className="invisible group-hover:visible"
                                                width={20}
                                                height={20}
                                            />

                                        </td>

                                       <td className=" px-3 flex flex-row justify-end items-center  gap-1 max-sm:px-2 text-[black] max-sm:text-[12px] max-sm:text-end text-[14px] hover:cursor-pointer font-sans whitespace-wrap  hover:bg-gray text-right">
                                        <Link href={item.transfer_from}>
                                        <span>{item.time}</span>
                                        </Link>
                                        <Link href={item.transfer_from}>

                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                        </Link></td>
                                    </tr>


                                )
                            })
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Page