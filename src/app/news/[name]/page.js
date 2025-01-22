import { Header } from "@/components/header";
import Slider from "@/components/slider";
import Footer from "@/components/footer";
import MainNews from "@/components/main_news";
import { apiCall } from "@/app/apicallhook/Newsapi";
import TopNews from "@/components/top_news";
import News_TypeButton from "@/components/newstypes_Button";
import BlogCard from "@/components/blog";

import Head from "next/head";
// The main page component that will display filtered articles based on 'name'
export default async function Main({ params }) {
  const name  =await params.name; // Extract dynamic parameter 'name' from URL
  const currentDate = new Date().toISOString(); // This gives the current date in "YYYY-MM-DDTHH:mm:ss.sssZ" format

  const Apidata = await apiCall(); // Fetch your API data
  console.log(name)


  // Filter articles based on the name from the URL
  const filteredArticles = Apidata.filter(item =>
    item.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
     <Head>
        {/* SEO Meta Tags */}
        <title>{`${filteredArticles.title} - CryptoNews`}</title>
        <meta name="description" content={filteredArticles.description} />
        <meta name="keywords" content="cryptocurrency news, crypto signal, blockchain, bitcoin, ethereum, market trends, crypto analysis, crypto updates" />
        <meta name="author" content="CryptoNews Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${filteredArticles.title} - CryptoNews`} />
        <meta property="og:description" content={filteredArticles.description} />
        <meta property="og:image" content={filteredArticles.image} />
        <meta property="og:url" content={`https://crptonews.com/${filteredArticles.id}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${filteredArticles.title} - CryptoNews`} />
        <meta name="twitter:description" content={filteredArticles.description} />
        <meta name="twitter:image" content={filteredArticles.image} />

        {/* Schema Markup (JSON-LD) for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: filteredArticles.title,
              description: filteredArticles.description,
              image: filteredArticles.image,
              datePublished: currentDate,
              dateModified: currentDate,
              publisher: {
                "@type": "Organization",
                name: "CryptoNews",
                logo: {
                  "@type": "ImageObject",
                  url: "/images/crypto-logo.png", // Replace with your site's logo
                },
              },
            }),
          }}
        />
      </Head>
   <div>



</div>
      <div className="bg-[#eee9e9] w-full mt-0 h-[200px]"></div>
     <News_TypeButton/>

      <div className="sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          <div className="md:col-span-2 space-y-6">
            <Slider serverData={filteredArticles} />
            <MainNews serverData={filteredArticles} />
          </div>
          <div className="mb-5 max-md:px-9">
            <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
            <TopNews serverData={filteredArticles} />
            {/* <BlogCards /> */}
          </div>
        </div>
      </div>

    </>
  );
}

// Generate static paths dynamically for the articles
export async function generateStaticParams() {
  const Apidata = await apiCall(); // Fetch the data from API
  const paths = Apidata.map((item) => ({
    name: item.title.toLowerCase(), // Create dynamic paths based on article titles
  }));

  return paths.map((item) => ({
    params: { name: item.name },
  }));
}

// Enable ISR: Regenerate the page every 5 minutes (300 seconds)
export const revalidate = 300; // Revalidate every 5 minutes
