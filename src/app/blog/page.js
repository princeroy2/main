
import MainNews from "@/components/main_news";
import TopNews from "@/components/top_news";
import { apiCall } from "../apicallhook/Newsapi";
import { ArticleapiCall } from "../apicallhook/ArticleApi";






// SEO Metadata generation for each article
export async function generateMetadata() {
    const apidata2 = await ArticleapiCall();

  
    const currentDate = new Date().toISOString(); // Current date for structured data
  
 
  
    // Now we can map over filteredArticles to generate metadata for each
    const metadata = apidata2.map((article) => ({
      title: `${article.title} - CryptoNews`,
      description: article.description,
      openGraph: {
        title: `${article.title} - CryptoNews`,
        description: article.description,
        image: article.image_main || "/default-image.jpg",
        url: `https://crptonews.com/blog`,
        type: "article",
        locale: "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: `${article.title} - CryptoNews`,
        description: article.description,
        image: article.image_main || "/default-image.jpg",
      },
      structuredData: {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        description: article.description,
        image: article.image_main,
        datePublished: article.datePublished || currentDate,
        dateModified: article.dateModified || currentDate,
        author: {
          "@type": "Person",
          name: "CryptoNews Team",
        },
        publisher: {
          "@type": "Organization",
          name: "CryptoNews",
          logo: {
            "@type": "ImageObject",
            url: "/images/logo.png", // Change this to your site's logo URL
          },
        },
        mainEntityOfPage: `https://crptonews.com/blog`,
      },
    }));
  
    // Return metadata for the first article, or adapt as needed
    return metadata[0]; // Change this if you need to generate for a different logic
  }

export default async function Main() {
  const currentDate = new Date().toISOString(); // Current date in ISO format

  const Apidata = await apiCall();
  const apidata2 = await ArticleapiCall();


  return (
    <>
   
      <div className="bg-[#eee9e9] w-full mt-0 h-[190px]">

      </div>


      <div className="sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6">
            <MainNews serverData={apidata2} />
          </div>
          <div className="mb-5 max-md:px-9">
            <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
            <TopNews serverData={Apidata} />
          </div>
        </div>
      </div>
    </>
  );
}
