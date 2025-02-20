import { FiArrowUpRight } from 'react-icons/fi';
import TopNews from '@/components/top_news';
import { apiCall } from '@/apicallhook/Newsapi';
import getNewsById from '@/apicallhook/NewsbyId';
import ShareButton from '@/components/sharedbutton';
import Custom404 from './404';
import Image from 'next/image';

const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};
export async function generateMetadata({ params }) {
  const {id} = await params;  // Extract dynamic parameter `slug` and `id` from URL
  const {title} = await params;
  const formattedTitle = formatTitleForUrl(title);  // Format title from the URL

  const articleData1 = await getNewsById(id,title);
  const article=articleData1.data

  if (!article) {
    return {
      title: 'Article not found',
      description: 'This article could not be found.',
      openGraph: {
        title: 'Article not found',
        description: 'This article could not be found.',
        image: '//image/ii.png',
        url: 'https://crptonews.com',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Article not found',
        description: 'This article could not be found.',
        image: '//image/ii.png',
      },
      robots: 'noindex, nofollow',
    };
  }

  // Generating SEO metadata for the article
  return {
    title: `${article.title} - CryptoNews`,
    description: article.description,
    openGraph: {
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image || '/image/ii.png',
      url: `https://crptonews.com/${formattedTitle}/${article.id}`,
      type: 'article',
      locale: 'en_US', // Use appropriate locale
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image || '/image/ii.png',
    },
    canonical: `https://crptonews.com/${formattedTitle}/${article.id}`,
    robots: 'index, follow', // Make sure the page is indexed
    meta: {
      'viewport': 'width=device-width, initial-scale=1',
      'language': 'en',
    },
    // Adding structured data (JSON-LD) for SEO
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.description,
      image: article.image,
      datePublished: article.created_time || new Date().toISOString(),
      dateModified: article.created_time || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: 'CryptoNews Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'CryptoNews',
        logo: {
          '@type': 'ImageObject',
          url: '/images/ii.png', // Update with your site's logo
        },
      },
      mainEntityOfPage: `https://crptonews.com/${formattedTitle}/${article.id}`,
    },
  };
}
export default async function DiscriptionPage({ params }) {
  const {id} = await params;  // Extract dynamic parameter `slug` and `id` from URL
  const {title} = await params;  // Extract dynamic parameter `slug` and `id` from URL
  const Title=title  

  const daatapi222= await getNewsById(id,Title)
  const newsdata=await apiCall(2)
  const newsdataa=newsdata.results || []
 const daataapi=daatapi222.data
  if (!daataapi) {
    return <Custom404/>;
  }

  return (
    <>
      <div>
        <div className="bg-[#eee9e9] w-full h-[150px]"></div>
        <hr className="border-t-2 border-gray-300 mx-8 mt-0" />
        
      
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
                  url={`https://crptonews.com/${Title}/${daataapi.id}`}
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

export async function generateStaticParams() {
  // Fetch the first page of data
  const newsdata1 = await apiCall(1);  // Fetch first page (you can adjust the page number as needed)
  const newsdata = newsdata1.results || [];

  // Fetch the remaining pages (you can adjust how you want to fetch all pages)
  const total_pages = newsdata1.total_pages;

  
  // Assuming you can fetch all the pages or the API automatically handles pagination internally
  const allPagesData = [];
  for (let page = 1; page <= total_pages; page++) {
    const pageData = await apiCall(page);
    allPagesData.push(...pageData.results);  // Collect results from each page
  }

  // Now map through all the articles to generate static params
  return allPagesData?.map((newsItem) => ({
    title: formatTitleForUrl(newsItem.title), // Format the title to slug-style
    id: newsItem.id.toString(),  // Ensure the id is a string for the URL
  }));
}