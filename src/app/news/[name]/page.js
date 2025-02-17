import Slider from "@/components/slider";
import { apiCall } from "@/app/apicallhook/Newsapi";
import TopNews from "@/components/top_news";
import News_TypeButton from "@/components/newstypes_Button";
import MainNews2 from "@/components/main_news2";
import NewstypeApi from "@/app/apicallhook/newstype";
import NewsTypedata from "@/components/newstypedata";


// // SEO Metadata generation for each article
// export async function generateMetadata({ params }) {
//   const name = params?.name; // Get the dynamic `name` parameter
//   const Apidata = await apiCall(); // Fetch data from the API
  
//   // Filter the articles based on the name from the URL
//   const filteredArticles = Apidata.filter(item =>
//     item.title.toLowerCase().includes(name.toLowerCase())
//   );

//   const currentDate = new Date().toISOString(); // Current date for structured data

//   // If no articles are found
//   if (!filteredArticles.length) {
//     return {
//       title: `No News Found - CryptoNews`,
//       description: `Sorry, we couldn't find news for ${name}.`,
//       openGraph: {
//         title: `No News Found - CryptoNews`,
//         description: `Sorry, we couldn't find news for ${name}.`,
//         image: "https://crptonews.com/images/logo.png",
//         url: `https://crptonews.com/news/${name}`,
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: `No News Found - CryptoNews`,
//         description: `Sorry, we couldn't find news for ${name}.`,
//         image: "https://crptonews.com/images/logo.png",
//       },
//       structuredData: {
//         "@context": "https://schema.org",
//         "@type": "NewsArticle",
//         headline: `No News Found for ${name}`,
//         description: `Sorry, we couldn't find news for ${name}.`,
//         image: "/default-image.jpg",
//         datePublished: currentDate,
//         dateModified: currentDate,
//         author: {
//           "@type": "Person",
//           name: "CryptoNews Team",
//         },
//         publisher: {
//           "@type": "Organization",
//           name: "CryptoNews",
//           logo: {
//             "@type": "ImageObject",
//             url: "https://crptonews.com/images/logo.png", // Change this to your site's logo URL
//           },
//         },
//         mainEntityOfPage: `https://crptonews.com/news/${name}`,
//       },
//     };
//   }

//   // Now we can map over filteredArticles to generate metadata for each
//   const metadata = filteredArticles.map((article) => ({
//     title: `${article.title} - CryptoNews`,
//     description: article.description,
//     openGraph: {
//       title: `${article.title} - CryptoNews`,
//       description: article.description,
//       image: article.image || "https://crptonews.com/images/logo.png",
//       url: `https://crptonews.com/news/${name}`,
//       type: "article",
//       locale: "en_US",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${article.title} - CryptoNews`,
//       description: article.description,
//       image: article.image || "https://crptonews.com/images/logo.png",
//     },
//     structuredData: {
//       "@context": "https://schema.org",
//       "@type": "NewsArticle",
//       headline: article.title,
//       description: article.description,
//       image: article.image,
//       datePublished: article.datePublished || currentDate,
//       dateModified: article.dateModified || currentDate,
//       author: {
//         "@type": "Person",
//         name: "CryptoNews Team",
//       },
//       publisher: {
//         "@type": "Organization",
//         name: "CryptoNews",
//         logo: {
//           "@type": "ImageObject",
//           url: "https://crptonews.com/images/logo.png", // Change this to your site's logo URL
//         },
//       },
//       mainEntityOfPage: `https://crptonews.com/news/${name}`,
//     },
//   }));

//   // Return metadata for the first article, or adapt as needed
//   return metadata[0]; // Change this if you need to generate for a different logic
// }

// The main page component that will display filtered articles based on 'name'
export default async function Main({ params }) {
  const news_name = await params.name; // Extract dynamic parameter 'name' from URL
  const Apidata = await NewstypeApi(news_name,1); // Fetch your API data
  const filteredArticles =Apidata.data.results
  const current_page =Apidata.data.current_page
  const total_pages =Apidata.data.total_pages


  return (
    <>
    <NewsTypedata news_name={news_name} serverData={filteredArticles} total_pages={total_pages} current_page={current_page}/>
    
    </>
  );
}

// Generate static paths dynamically for the articles
// export async function generateStaticParams() {
//   const Apidata = await apiCall(); // Fetch the data from API
//   const paths = Apidata.map((item) => ({
//     name: item.title.toLowerCase(), // Create dynamic paths based on article titles
//   }));

//   return paths.map((item) => ({
//     params: { name: item.name },
//   }));
// }

// // Enable ISR: Regenerate the page every 5 minutes (300 seconds)
// export const revalidate = 300; // Revalidate every 5 minutes
