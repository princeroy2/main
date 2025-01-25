import { FiArrowUpRight } from 'react-icons/fi';
import { apiCall } from '@/app/apicallhook/Newsapi';
import { ArticleapiCall } from '@/app/apicallhook/ArticleApi';
import TopNews from '@/components/top_news';
import BlogCard from '@/components/blog';
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
  const title = params?.title; // Safe access to params.title
  const formattedTitle = formatTitleForUrl(title);  // Format title from the URL

  // If title is not provided, return default metadata
  if (!title) {
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

  // Fetch article data
  const articleData = await ArticleapiCall();
  const article = articleData.find((item) => formatTitleForUrl(item.title) === title);

  // If the article is not found, return default metadata
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
      image: article.image_main || '/default-image.jpg',
      url: `https://crptonews.com/blog/${formattedTitle}`,
      type: 'article',
      locale: 'en_US', // Use appropriate locale
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image_main || '/default-image.jpg',
    },
    canonical: `https://crptonews.com/blog/${formattedTitle}`,
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
          url: '/images/logo.png', // Update with your site's logo
        },
      },
      mainEntityOfPage: `https://crptonews.com/blog/${formattedTitle}`,
    },
  };
}

export default async function DiscriptionPage({ params }) {
  const title = params?.title; // Safe access to params.title

  // Fetch data for the article based on the `title`
  const Apidata = await ArticleapiCall();
  const apidata2 = await apiCall();
  const article = Apidata;
  const formattedTitle = formatTitleForUrl(title);  // Format title from the URL

  // Find the article that matches `title`
  const dataapi = article.find((item) => formatTitleForUrl(item.title) === title);

  if (!dataapi) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div>
        <div className="bg-[#eee9e9] w-full mt-2 h-[200px]"></div>
        <hr className="border-t-2 border-gray-300 mx-8 mt-3" />

        <div className="w-full sm:w-[90%] lg:w-[90%] mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 px-5 md:grid-cols-[4fr_2fr] sm:gap-6 md:gap-10 gap-6 space-x">
            <div>
              <h1 className="text-[#2f3c42] text-2xl sm:text-3xl md:text-[30px] font-bold mt-7">
                {dataapi.title}
              </h1>
              <div className="flex flex-row justify-between items-center mt-2">
                <a href='www.crptonews.com' className="text-sm underline text-blue-500 sm:text-md">crptonews.com</a>
                <ShareButton
              title={dataapi.title}
              url={`https://crptonews.com/blog/${formattedTitle}`}
              image={dataapi.image_main}
            />
              </div>
              <img
                src={dataapi.image_main}
                alt={dataapi.title}
                className="w-full mt-4 rounded-lg"
              />
              <p className="mt-6 leading-[2rem] font-semibold max-md:text-[18px] flex overflow-hidden text-[#37474f] tracking-[0.08rem] mb-4">
                {dataapi.description}
              </p>
              <img
                src={dataapi.image1}
                alt={dataapi.title}
                className="w-full mt-4 rounded-lg"
              />
              <a
                href={dataapi.link}
                className="text-blue-500 hover:text-blue-700 underline mt-5 font-semibold flex items-center space-x-2"
              >
                <span>{dataapi.link}</span>
                <FiArrowUpRight className="text-blue-500 hover:text-blue-700 text-xl" />
              </a>
            </div>


            <div className="mx-auto mt-12">
              <h1 className="sm:mt-14 font-bold text-lg sm:text-xl text-center">Latest News</h1>
              <div className="mt-12">
                <TopNews serverData={apidata2} />
              </div>

              <div className="md:flex md:flex-col md:items-center">
                <BlogCard serverData={article} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Function to generate static paths for each dynamic route
export async function generateStaticParams() {
  const getdata = await ArticleapiCall();  // Fetch your blog data (articles)

  // Generate dynamic paths based on the article titles
  return getdata.map((newsItem) => ({
    title: formatTitleForUrl(newsItem.title),  // Format title into slug
  }));
}

export const revalidate = 86400; // Revalidate every 24 hours
