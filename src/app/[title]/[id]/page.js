import { FiArrowUpRight } from 'react-icons/fi';
import { ArticleapiCall } from '@/app/apicallhook/ArticleApi';
import TopNews from '@/components/top_news';
import { apiCall } from '@/app/apicallhook/Newsapi';
import BlogCard from '@/components/blog';
import getNewsById from '@/app/apicallhook/NewsbyId';
import ShareButton from '@/components/sharedbutton';
import Custom404 from './404';
import Image from 'next/image';
import DownloadBadges from '@/components/GooglePlayButton';
import MObileAppbanner from '@/components/mobileappbanner';


const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};
// export async function generateMetadata({ params }) {
//   const id = await params?.id;  // Extract dynamic parameter `slug` and `id` from URL
//   const title = await params?.title;
//   const formattedTitle = formatTitleForUrl(title);  // Format title from the URL

//   // Fetch article data
//   const articleData1 = await apiCall();
//   const articleData=articleData1.results || [];
//   const article = articleData.find((item) => formatTitleForUrl(item.title) === title && item.id.toString() === id);

//   if (!article) {
//     return {
//       title: 'Article not found',
//       description: 'This article could not be found.',
//       openGraph: {
//         title: 'Article not found',
//         description: 'This article could not be found.',
//         image: '/default-image.jpg',
//         url: 'https://crptonews.com',
//         type: 'website',
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: 'Article not found',
//         description: 'This article could not be found.',
//         image: '/default-image.jpg',
//       },
//       robots: 'noindex, nofollow',
//     };
//   }

//   // Generating SEO metadata for the article
//   return {
//     title: `${article.title} - CryptoNews`,
//     description: article.description,
//     openGraph: {
//       title: `${article.title} - CryptoNews`,
//       description: article.description,
//       image: article.image || '/default-image.jpg',
//       url: `https://crptonews.com/${formattedTitle}/${article.id}`,
//       type: 'article',
//       locale: 'en_US', // Use appropriate locale
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${article.title} - CryptoNews`,
//       description: article.description,
//       image: article.image || '/default-image.jpg',
//     },
//     canonical: `https://crptonews.com/${formattedTitle}/${article.id}`,
//     robots: 'index, follow', // Make sure the page is indexed
//     meta: {
//       'viewport': 'width=device-width, initial-scale=1',
//       'language': 'en',
//     },
//     // Adding structured data (JSON-LD) for SEO
//     structuredData: {
//       '@context': 'https://schema.org',
//       '@type': 'NewsArticle',
//       headline: article.title,
//       description: article.description,
//       image: article.image,
//       datePublished: article.datePublished || new Date().toISOString(),
//       dateModified: article.dateModified || new Date().toISOString(),
//       author: {
//         '@type': 'Person',
//         name: 'CryptoNews Team',
//       },
//       publisher: {
//         '@type': 'Organization',
//         name: 'CryptoNews',
//         logo: {
//           '@type': 'ImageObject',
//           url: '/images/logo.png', // Update with your site's logo
//         },
//       },
//       mainEntityOfPage: `https://crptonews.com/${formattedTitle}/${article.id}`,
//     },
//   };
// }
export default async function DiscriptionPage({ params }) {
  const currentDate = new Date().toISOString(); // This gives the current date in "YYYY-MM-DDTHH:mm:ss.sssZ" format
  const id = await params?.id;  // Extract dynamic parameter `slug` and `id` from URL
  const Title = await params?.title;  // Extract dynamic parameter `slug` and `id` from URL  
  const formatSlugToTitle = (slug) => {
    return slug
      .replace(/-/g, ' ')  // Replace hyphens with spaces
       // Capitalize the first letter of each word
  }; 
  const daatapi= await getNewsById(id,Title)
  const newsdata=await apiCall(2)
  const newsdataa=newsdata.results || []
 const daataapi=daatapi.data
  if (!daataapi) {
    return <Custom404/>;
  }

  return (
    <>
      <div>
        <div className="bg-[#eee9e9] w-full mt-2 h-[150px]"></div>
        <hr className="border-t-2 border-gray-300 mx-8 mt-3" />
        
      
        <div className="w-full lg:px-24 mx-auto mb-12 px-3">
          <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-[4fr_2fr] sm:gap-6 md:gap-10 gap-6">
            <div>
              <h1 className="text-[#2f3c42] text-2xl sm:text-3xl md:text-[30px] font-bold mt-7" >
                {daataapi?.title}
              </h1>
              <div className="flex flex-row justify-between items-center mt-2">
               <div className='flex flex-row gap-3'>
               <h1 className="text-[14px] underline text-blue-500 font-serif sm:text-md">{daataapi?.domain}</h1>
               <h1 className='text-[12px] font-serif flex justify-end'>{daataapi?.time}</h1>
               </div>

              <ShareButton
                  title={daataapi?.title}
                  url={`https://crptonews.com/${daataapi.id}`}
                  image={daataapi.image}
                />
             
              </div>

              <Image
                src={daataapi?.image}
                alt={daataapi?.title}
                className="w-full mt-3  rounded-lg"
                height={120}
                width={200}
              />
              <div className="flex flex-col">
                <p className="max-sm:text-[15px] mt-6 font-serif text-[18px] leading-[2rem] text-[#37474f] tracking-[0.08rem] px-0 overflow-wrap-break-word whitespace-pre-line">
                  {daataapi?.description}
                </p>
      
              </div>

              <a
                href={daataapi?.link}
                className="text-blue-500 hover:text-blue-700 underline mt-5 font-semibold  items-center "
              >
                <span>{daataapi?.link}</span>
                <FiArrowUpRight className="text-blue-500 hover:text-blue-700 text-xl" />
              </a>
            </div>

            <div className="mx-auto mt-16">
              <h1 className="sm:mt-14 font-bold text-lg sm:text-xl text-center">
                Latest News
              </h1>
     
              <div className="mt-12">
                <TopNews serverData={newsdataa} />
              </div>

              <div className="mt-36 md:flex md:flex-col md:items-center">
                {/* <BlogCard serverData={apidata2} /> */}
              </div>
            </div>
          </div>
        </div>
       
        

      </div>
    </>
  );
}

// export async function generateStaticParams() {
//   const getdata1 = await apiCall();  // Fetch your API data
//   const getdata=getdata1.results || [];
//   return getdata.map((newsItem) => ({
//     title: formatTitleForUrl(newsItem.title), // Format the title to slug-style
//     id: newsItem.id.toString(),  // Ensure the id is a string for the URL
//   }));
// }

// export const revalidate = 300; // Revalidate every 5 minutes
