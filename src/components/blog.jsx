import React from 'react';
import { ArticleapiCall } from '@/app/apicallhook/ArticleApi';
import Link from 'next/link';
const BlogCard = async () => {
  const serverData=await ArticleapiCall()
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
               <h1 className="text-start mt-20 ml-5 mb-0 font-semibold text-lg">Read Article</h1>
               <div className='w-full'>
    {serverData?.slice(0, visibleItems).map((itmes,index)=>{
      return (
        <Link href={`/blog/${formatTitleForUrl(itmes?.title)}`} key={index}>
  <div className='w-full mt-4'>
  <div className='flex flex-row max-md:flex-col max-lg:flex-row gap-5 p-2 hover:bg-white hover:shadow-md '>
  <img src={itmes.image_main} alt="" className='md:w-1/2  rounded-lg' />
  <div className='flex flex-col gap-2'>
    <p className='md:text-[14px] font-semibold text-[#37474f] '>{itmes?.title}</p>
    <div className='flex flex-row gap-5'>
    <span className='text-[10px] text-[#37474f] '>{itmes?.title2}</span>

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
