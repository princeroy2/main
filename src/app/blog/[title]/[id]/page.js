import { FiArrowUpRight } from 'react-icons/fi';
import { apiCall } from '@/apicallhook/Newsapi';
import { ArticleapiCall, articlebyid } from '@/apicallhook/ArticleApi';
import TopNews from '@/components/top_news';
import ShareButton from '@/components/sharedbutton';


// Utility function to format the title for URL (slug generation)
const formatTitleForUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};

// SEO Metadata generation (Next.js specific function)
export async function generateMetadata({ params }) {
  
  const {title,id} =await params; // Safe access to params.title
  const Title=title
  const Apidata = await articlebyid(id,Title);
  console.log(Apidata,'fffffffffffffffffffff')
  const article=Apidata.data // Format title from the URL


  // If the article is not found, return default metadata
  if (!article) {
    return {
      title: 'Article not found',
      description: 'This article could not be found.',
      openGraph: {
        title: 'Article not found',
        description: 'This article could not be found.',
        image: 'https://crptonews.com/images/logo.png',
        url: 'https://crptonews.com',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Article not found',
        description: 'This article could not be found.',
        image: 'https://crptonews.com/images/logo.png',
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
      images: [
        {
          url: article.image1, // Ensure this is the correct image URL
          width: 1200, // Set a width and height for better preview rendering
          height: 630,
          alt: article.title,
        },
      ],
      url: `https://crptonews.com/blog/${Title}/${article.id}`,
      type: 'article',
      locale: 'en_US', // Use appropriate locale
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image1 || '/default-image.jpg',
    },
    canonical: `https://crptonews.com/blog/${Title}/${article.id}`,
    robots: 'index, follow', // Make sure the page is indexed
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      language: 'en',
    },
    // Adding structured data (JSON-LD) for SEO
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.description,
      image: article.image_main,
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
          url: 'https://crptonews.com/images/favicon.png',
        },
      },
      mainEntityOfPage: `https://crptonews.com/blog/${Title}/${article.id}`,
    },
  };
}

export default async function DiscriptionPage({ params }) {
  const {title} =await params; // Safe access to params.title
  const {id} = await params;  // Extract dynamic parameter `slug` and `id` from URL
  const Title=title

  // Fetch data for the article based on the `title`
  const Apidata = await articlebyid(id,Title);
  const daataapi111=Apidata.data
  console.log(Apidata)
  if (!daataapi111) {
    return <>no article</>;
  }
  const apidata2l1 = await apiCall(2);
  const apidata2=apidata2l1.results||[]

  const formattedTitle = formatTitleForUrl(Title);  // Format title from the URL

  // if (!daataapi111) {
  //   return <Custom404/>;
  // }

  return (
    <>
  
        <div className="bg-[#eee9e9] w-full mt-2 h-[200px]"></div>
        <hr className="border-t-2 border-gray-300 mx-8 mt-3" />

        <div className="w-full sm:w-[100%] lg:w-[90%] mx-auto max-sm:px-0 px-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 px-5 md:grid-cols-[4fr_2fr] sm:gap-6 md:gap-10 gap-6">
            <div>
            <h1 className="text-[#2f3c42] text-2xl sm:text-3xl md:text-[30px] font-bold mt-7" >
            {daataapi111?.title}
              </h1>
              <div className="flex flex-row justify-between items-center mt-2">
                <a href='www.crptonews.com' className="text-sm underline text-blue-500 sm:text-md">crptonews.com</a>
                <ShareButton
              title={daataapi111?.title}
              url={`https://crptonews.com/blog/${formattedTitle}`}
              image={daataapi111?.image1}
            />
              </div>
              <img
                src={daataapi111?.image1}
                alt={daataapi111?.title}
                className="w-full mt-4 rounded-lg"
              />
           {
  // Loop over the range from 1 to 5
  Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="flex flex-col">
   
    <h1 className='font-bold text-[24px] mt-5'>     
      {daataapi111[`heading${index + 1}`]}
</h1>
<p className="max-sm:text-[15px] mt-6 font-serif text-[18px] leading-[2rem] text-[#37474f] tracking-[0.08rem] px-0 overflow-wrap-break-word whitespace-pre-line">

      {daataapi111[`description${index + 1}`]}
    </p>
    </div>
  ))
}

             
              <img
                src={daataapi111.image1}
                alt={daataapi111.title}
                className="w-full mt-4 rounded-lg"
              />
              <a
                href={daataapi111?.link}
                className="text-blue-500 hover:text-blue-700 underline mt-5 font-semibold flex items-center space-x-2"
              >
                <span>{`https://crptonews.com/blog/${formattedTitle}/${daataapi111.id}`}</span>
                <FiArrowUpRight className="text-blue-500 hover:text-blue-700 text-xl" />
              </a>
            </div>


            <div className="mx-auto mt-12">
              <h1 className="sm:mt-14 font-bold text-lg sm:text-xl text-center">Latest News</h1>
              <div className="mt-12">
                <TopNews serverData={apidata2} />
              </div>

           
            </div>
          </div>
        </div>
     
    </>
  );
}

// // Function to generate static paths for each dynamic route


export async function generateStaticParams() {
  // Fetch the first page of data
  const newsdata1 = await ArticleapiCall(1);  // Fetch first page (you can adjust the page number as needed)
  const newsdata = newsdata1.results || [];

  // Fetch the remaining pages (you can adjust how you want to fetch all pages)
  const total_pages = newsdata1.total_pages;
  
  // Assuming you can fetch all the pages or the API automatically handles pagination internally
  const allPagesData = [];
  for (let page = 1; page <= total_pages; page++) {
    const pageData = await ArticleapiCall(page);
    allPagesData.push(...pageData.results);  // Collect results from each page
  }

  // Now map through all the articles to generate static params
  return allPagesData.map((newsItem) => ({
    title: formatTitleForUrl(newsItem.title), // Format the title to slug-style
    id: newsItem.id.toString(),  // Ensure the id is a string for the URL
  }));
}

export const revalidate = 86400; // Revalidate every 24 hours
