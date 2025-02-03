import { FiArrowUpRight } from 'react-icons/fi';
import { ArticleapiCall } from '@/app/apicallhook/ArticleApi';
import TopNews from '@/components/top_news';
import { apiCall } from '@/app/apicallhook/Newsapi';
import BlogCard from '@/components/blog';

import ShareButton from '@/components/sharedbutton';
import Custom404 from './404';


const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};
export async function generateMetadata({ params }) {
  const id = await params?.id;  // Extract dynamic parameter `slug` and `id` from URL
  const title = await params?.title;
  const formattedTitle = formatTitleForUrl(title);  // Format title from the URL

  // Fetch article data
  const articleData = await apiCall();
  const article = articleData.find((item) => formatTitleForUrl(item.title) === title && item.id.toString() === id);

  if (!article) {
    return {
      title: 'Article not found',
      description: 'This article could not be found.',
      openGraph: {
        title: 'Article not found',
        description: 'This article could not be found.',
        image: '/default-image.jpg',
        url: 'https://crptonews.com',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Article not found',
        description: 'This article could not be found.',
        image: '/default-image.jpg',
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
      image: article.image || '/default-image.jpg',
      url: `https://crptonews.com/${formattedTitle}/${article.id}`,
      type: 'article',
      locale: 'en_US', // Use appropriate locale
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image || '/default-image.jpg',
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
      datePublished: article.datePublished || new Date().toISOString(),
      dateModified: article.dateModified || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: 'CryptoNews Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'CryptoNews',
        logo: {
          '@type': 'ImageObject',
          url: '/images/logo.png', // Update with your site's logo
        },
      },
      mainEntityOfPage: `https://crptonews.com/${formattedTitle}/${article.id}`,
    },
  };
}
export default async function DiscriptionPage({ params }) {
  const currentDate = new Date().toISOString(); // This gives the current date in "YYYY-MM-DDTHH:mm:ss.sssZ" format
  const id = await params?.id;  // Extract dynamic parameter `slug` and `id` from URL
  const title = await params?.title;  // Extract dynamic parameter `slug` and `id` from URL

  // Fetch data for the article based on the `id` and `title`
  const Apidata = await apiCall();
  const article = Apidata;
  const apidata2 = await ArticleapiCall();
  const formattedTitle = formatTitleForUrl(title);  // Format title from the URL
  // Find the article that matches `id` and formatted title
  const dataapi = article.find((item) => formatTitleForUrl(item.title) === title && item.id.toString() === id);
  console.log(formattedTitle)

  if (!dataapi) {
    return <Custom404/>;
  }

  return (
    <>
      <div>
        <div className="bg-[#eee9e9] w-full mt-2 h-[200px]"></div>
        <hr className="border-t-2 border-gray-300 mx-8 mt-3" />

        <div className="w-full sm:w-[90%] lg:w-[90%] mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[4fr_2fr] sm:gap-6 md:gap-10 gap-6">
            <div>
              <h1 className="text-[#2f3c42] text-2xl sm:text-3xl md:text-[30px] font-bold mt-7" >
                {dataapi?.title}
              </h1>
              <div className="flex flex-row justify-between items-center mt-2">
                <h1 className="text-[14px] underline text-blue-500 sm:text-md">{dataapi?.domain}</h1>
           
              <ShareButton
                  title={dataapi?.title}
                  url={`https://crptonews.com/${formattedTitle}/${dataapi.id}`}
                  image={dataapi.image}
                />
             
              </div>
              <h1 className='text-[12px] flex justify-end'>{dataapi?.time}</h1>

              <img
                src={dataapi?.image}
                alt={dataapi?.title}
                className="w-full mt-4 rounded-lg"
              />
              <div className="flex flex-col">
                <p className="text mt-6 font-serif max-md:text-[18px] leading-[3rem] text-[#37474f] tracking-[0.08rem] break-words overflow-wrap-break-word whitespace-pre-line">
                  {dataapi?.description}
                </p>
      
              </div>

              <a
                href={dataapi?.link}
                className="text-blue-500 hover:text-blue-700 underline mt-5 font-semibold flex items-center space-x-2"
              >
                <span>{dataapi?.link}</span>
                <FiArrowUpRight className="text-blue-500 hover:text-blue-700 text-xl" />
              </a>
            </div>

            <div className="mx-auto mt-12">
              <h1 className="sm:mt-14 font-bold text-lg sm:text-xl text-center">
                Latest News
              </h1>
              <div className="mt-12">
                <TopNews serverData={article} />
              </div>

              <div className="mt-36 md:flex md:flex-col md:items-center">
                <BlogCard serverData={apidata2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const getdata = await apiCall();  // Fetch your API data

  return getdata.map((newsItem) => ({
    title: formatTitleForUrl(newsItem.title), // Format the title to slug-style
    id: newsItem.id.toString(),  // Ensure the id is a string for the URL
  }));
}

export const revalidate = 300; // Revalidate every 5 minutes
