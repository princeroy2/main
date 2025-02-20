import React from 'react';
import { ArticleapiCall } from '@/apicallhook/ArticleApi';
import Link from 'next/link';
import Image from 'next/image';
const BlogCard = async () => {
  const articleapi=await ArticleapiCall(1)
  const serverData=articleapi.results

  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()  // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/-+/g, '-');  // Ensure no multiple consecutive hyphens
  };

  const visibleItems=6
  return (
    <>
               <h1 className="text-start mt-20 ml-5 mb-0 font-semibold text-lg max-sm:hidden">Read Article</h1>
               <div className='w-full mt-6 '>

{serverData?.slice(0, visibleItems).map((itmes,index)=>{
  return (
    <Link href={`/blog/${formatTitleForUrl(itmes?.title)}/${itmes?.id}`} key={index}>
<div className='w-full mt-2'>
<div className='flex max-sm:flex-col flex-row gap-3 p-2 hover:bg-white hover:shadow-md'>
<Image src={itmes?.image1} width={100} height={30} alt="" className='rounded-lg h-20 max-sm:h-full max-sm:w-full' />
<div className='flex flex-col '>
<p className=' line-clamp-2 max-sm:text-[16px] max-sm:font-bold md:text-[16px] max-lg:font-bold lg:text-[12px] lg:font-semibold   text-[#37474f] '>{itmes?.title}</p>
<div className='flex flex-row gap-5'>
<span className='text-[12px] text-[#37474f] font-serif'>{itmes?.domain}</span>
<p className='text-[12px] text-[#37474f] lg:line-clamp-1 font-serif'>{itmes?.time}</p>
</div>
</div>
</div>

   </div>
</Link>
)})}



</div>
  
    </>
  
  );
};

export default BlogCard;
