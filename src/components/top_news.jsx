import Link from 'next/link';
const TopNews = ({serverData}) => {
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()  // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/-+/g, '-');  // Ensure no multiple consecutive hyphens
  };

  const visibleItems=6
  return (
    <div className='w-full'>
    {serverData?.slice(0, visibleItems).map((itmes,index)=>{
      return (
        <Link href={`/${formatTitleForUrl(itmes?.title)}/${itmes?.id}`} key={index}>
  <div className='w-full mt-2'>
  <div className='flex flex-row max-md:flex-col  max-lg:flex-row gap-5 p-2 hover:bg-white hover:shadow-md'>
  <img src={itmes?.image} alt="" className='md:w-1/3   rounded-lg' />
  <div className='flex flex-col gap-2'>
    <p className='md:text-[12px] max-md:text-[16px] text-[8px] max-sm:font-bold font-bold text-[#37474f] '>{itmes?.title}</p>

    <div className='flex flex-row gap-5'>
    <span className='text-[12px] text-[#37474f] '>{itmes?.domain}</span>
    <p className='text-[12px] text-[#37474f] '>{itmes?.time}</p>
  </div>
  </div>
  </div>
  
       </div>
</Link>
    )})}



  </div>
  
  );
};

export default TopNews;
