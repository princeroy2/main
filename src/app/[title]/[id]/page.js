import { FiArrowUpRight } from 'react-icons/fi';
import { Header } from '../../../components/header';
import Footer from '../../../components/footer';
import { ArticleapiCall } from '@/app/apicallhook/ArticleApi';
import TopNews from '@/components/top_news'; 
import { apiCall } from '@/app/apicallhook/Newsapi';
import BlogCard from '@/components/blog';
import Head from 'next/head';
const formatTitleForUrl = (title) => {

  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Ensure no multiple consecutive hyphens
};

export default async function DiscriptionPage({ params }) {
  const currentDate = new Date().toISOString(); // This gives the current date in "YYYY-MM-DDTHH:mm:ss.sssZ" format

  const id = await params.id;  // Extract dynamic parameter `slug` and `id` from URL
  const title =await params.title;  // Extract dynamic parameter `slug` and `id` from URL

  // Fetch data for the article based on the `id` and `title`
  const Apidata = await apiCall();
  const article = Apidata;
  const apidata2= await ArticleapiCall()

  // Find the article that matches `id` and formatted title
  const dataapi = article.find((item) => formatTitleForUrl(item.title) === title && item.id.toString() === id);

  if (!dataapi) {
    return <div>Article not found</div>;
  }

  return (
    <>
    <Head>
        <title>{`${dataapi.title} - CryptoNews`}</title>
        <meta name="description" content={dataapi.description} />
        <meta name="keywords" content="cryptocurrency news, crypto signal, blockchain, bitcoin, ethereum, market trends, crypto analysis, crypto updates" />
        <meta name="author" content="CryptoNews Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${dataapi.title} - CryptoNews`} />
        <meta property="og:description" content={dataapi.description} />
        <meta property="og:image" content={dataapi.image} />
        <meta property="og:url" content={`https://crptonews.com/${dataapi.id}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${dataapi.title} - CryptoNews`} />
        <meta name="twitter:description" content={dataapi.description} />
        <meta name="twitter:image" content={dataapi.image} />

        {/* Schema Markup (JSON-LD) for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: dataapi.title,
              description: dataapi.description,
              image: dataapi.image,
              datePublished: currentDate,
              dateModified: currentDate,
              publisher: {
                "@type": "Organization",
                name: "CryptoNews",
                logo: {
                  "@type": "ImageObject",
                  url: "/images/logo.png", // Replace with your site's logo
                },
              },
            }),
          }}
        />
      </Head>
      <div>

<div className="bg-[#eee9e9] w-full mt-2 h-[200px]"></div>
<hr className="border-t-2 border-gray-300 mx-8 mt-3" />


<div className="w-full sm:w-[90%] lg:w-[90%] mx-auto px-4 mb-12">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[4fr_2fr] sm:gap-6 md:gap-10 gap-6">
    <div>
      <h1 className="text-[#2f3c42] text-2xl sm:text-3xl md:text-[30px] font-bold mt-7">
        {dataapi.title}
      </h1>
      <div className="flex flex-row justify-between items-center mt-2">
        <h1 className="text-[10px] sm:text-md">{dataapi.domain}</h1>
      </div>
      <img
        src={dataapi.image}
        alt={dataapi.title}
        className="w-full mt-4 rounded-lg"
      />
   <div className="flex flex-col">
<p className="mt-6 leading-[2rem] text-[#37474f] tracking-[0.08rem] break-words" style={{ fontFamily: 'Roboto, sans-serif' }}>
{dataapi.description}
</p>
</div>

      <a 
        href={dataapi.link} 
        className="text-blue-500 hover:text-blue-700 underline mt-5 font-semibold flex items-center space-x-2"
      >
        <span>{dataapi.link}</span>
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

      <div className="mt-36 md:flex md:flex-col  md:items-center">
        <BlogCard serverData={apidata2}/>
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

