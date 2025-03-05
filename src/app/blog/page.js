
import Link from "next/link";
import Image from "next/image";
import TopNews from "@/components/top_news";
import { apiCall } from "../../apicallhook/Newsapi";
import { ArticleapiCall } from "@/apicallhook/ArticleApi";
export const metadata = {
  title: "CryptoNews | Crypto Blogs, Articles, & Expert Blockchain Insights",
  description: "Dive into the latest crypto blogs, blockchain articles, market analysis, and expert commentary on cryptocurrency trends at CryptoNews.com.",
  keywords: "crypto blogs, cryptocurrency articles, blockchain news, crypto market analysis, bitcoin news, ethereum updates, altcoins, blockchain insights, cryptocurrency trends, crypto guides, top crypto blogs, blockchain articles, crypto tips, expert crypto opinions, crypto news blog",
  author: 'CryptoNews Team',
  robots: 'index, follow',

  // Open Graph Tags
  openGraph: {
    title: 'CryptoNews - Your Trusted Crypto Blog for Latest News & Insights',
    description: 'Explore the best crypto blogs, market analysis, and blockchain insights. Stay updated with expert opinions and crypto trends on CryptoNews.',
    image: 'https://crptonews.com/images/favicon.png',
    url: 'https://crptonews.com/blog',
    type: 'website',
    imageAlt: 'Crypto Blog Image',  // SEO-focused image alt text
  },

  // Twitter Card Tags
  twitter: {
    card: 'summary_large_image',
    title: "CryptoNews | Crypto Blogs, Articles & Blockchain Insights",
    description: "Stay informed with the latest crypto blogs, blockchain articles, and expert market analysis. Get up-to-date insights on cryptocurrency trends at CryptoNews.com.",
    image: 'https://crptonews.com/images/favicon.png',
    imageAlt: 'Crypto Blog Image',  // SEO-focused image alt text for Twitter
  },

  // Charset Tag
  charset: 'UTF-8',

  canonical: 'https://crptonews.com/blog',

  // Favicon Tag
  icons: {
    icon: '/favicon.ico',
  },

  // Structured Data (JSON-LD)
  other: {
    structuredData: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Website",
      "url": "https://crptonews.com/blog",
      "name": "CryptoNews",
      "description": "Explore expert crypto blogs, in-depth blockchain articles, and the latest cryptocurrency news at CryptoNews.com.",
      "publisher": {
        "@type": "Organization",
        "name": "CryptoNews",
        "logo": {
          "@type": "ImageObject",
          "url": "https://crptonews.com/images/favicon.png",
          "alt": "CryptoNews Logo"
        }
      },
      "sameAs": [
        "https://twitter.com/cryptonews",
        "https://facebook.com/cryptonews"
      ]
    }),
  }
};

export default async function Main() {
  const currentDate = new Date().toISOString(); // Current date in ISO format

  const Apidata1= await ArticleapiCall(1);
  const Apidata11=Apidata1.results
  const Apidata2= await apiCall(1);
  const Apidata22=Apidata2.results
  if (!Apidata11) {
    return <Custom404/>;

  }
  const total_pages = Apidata1.total_pages;
  const current_page = Apidata1.current_page;
  const Apidatatopnews = Apidata22.slice(5, 10);

  
  const formatTitleForUrl = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')          // Replace spaces with hyphens
      .replace(/-+/g, '-');          // Remove consecutive hyphens
  };

  return (
    <>
   
      <div className="bg-[#eee9e9] w-full mt-0 h-[190px]">

      </div>


      <div className="sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6 mt-5">
          <h1 className="text-center font-bold">Read Articles</h1>

          {Apidata11.slice(0, 10).map((newsItem, index) => (
        <Link href={`/blog/${formatTitleForUrl(newsItem?.title)}/${newsItem?.id}`} key={index}>
          <div className="flex flex-row max-sm:flex-col  gap-6 py-3 px-2  max-sm:shadow-md hover:shadow-lg border-b border-gray-200">
            <Image
              src={newsItem?.image1 }
              alt={newsItem?.title}
              className="object-cover max-sm:w-full rounded-lg"
              height={220}
              width={220}
              unoptimized 
             

            />
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-lg font-semibold text-[#37474f] max-sm:text-[16px] max-sm:font-bold md:text-[16px]">{newsItem?.title}</h1>
              <div className="flex gap-4 text-sm text-[#37474f] mt-2">
                <span className="text-gray-600 font-serif text-[12px] mt-5">{newsItem?.domain}</span>
                <span className="text-gray-600 text-[12px] mt-5">{newsItem?.time}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
          </div>
          <div className="mb-5 max-md:px-9">
            <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
            <TopNews serverData={Apidatatopnews} />
          </div>
        </div>
      </div>
      {total_pages>current_page && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 mb-10 max-sm:mb-0 bg-gray-900 text-[#EEE40A] rounded hover:bg-gray-600"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
