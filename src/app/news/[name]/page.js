import Slider from "@/components/slider";
import MainNews from "@/components/main_news";
import { apiCall } from "@/app/apicallhook/Newsapi";
import TopNews from "@/components/top_news";
import News_TypeButton from "@/components/newstypes_Button";



// SEO Metadata generation for each article
export async function generateMetadata({ params }) {
  const name = params?.name; // Get the dynamic `name` parameter
  const Apidata = await apiCall(); // Fetch data from the API
  
  // Filter the articles based on the name from the URL
  const filteredArticles = Apidata.filter(item =>
    item.title.toLowerCase().includes(name.toLowerCase())
  );

  const currentDate = new Date().toISOString(); // Current date for structured data

  // If no articles are found
  if (!filteredArticles.length) {
    return {
      title: `No News Found - CryptoNews`,
      description: `Sorry, we couldn't find news for ${name}.`,
      openGraph: {
        title: `No News Found - CryptoNews`,
        description: `Sorry, we couldn't find news for ${name}.`,
        image: "/default-image.jpg",
        url: `https://crptonews.com/news/${name}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `No News Found - CryptoNews`,
        description: `Sorry, we couldn't find news for ${name}.`,
        image: "/default-image.jpg",
      },
      structuredData: {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: `No News Found for ${name}`,
        description: `Sorry, we couldn't find news for ${name}.`,
        image: "/default-image.jpg",
        datePublished: currentDate,
        dateModified: currentDate,
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
        mainEntityOfPage: `https://crptonews.com/news/${name}`,
      },
    };
  }

  // Now we can map over filteredArticles to generate metadata for each
  const metadata = filteredArticles.map((article) => ({
    title: `${article.title} - CryptoNews`,
    description: article.description,
    openGraph: {
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image || "/default-image.jpg",
      url: `https://crptonews.com/news/${name}`,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - CryptoNews`,
      description: article.description,
      image: article.image || "/default-image.jpg",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: article.title,
      description: article.description,
      image: article.image,
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
      mainEntityOfPage: `https://crptonews.com/news/${name}`,
    },
  }));

  // Return metadata for the first article, or adapt as needed
  return metadata[0]; // Change this if you need to generate for a different logic
}

// The main page component that will display filtered articles based on 'name'
export default async function Main({ params }) {
  const name = await params.name; // Extract dynamic parameter 'name' from URL
  const Apidata = await apiCall(); // Fetch your API data

  // Filter articles based on the name from the URL
  const filteredArticles = Apidata.filter(item =>
    item.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="bg-[#eee9e9] w-full mt-0 h-[200px]"></div>
        <News_TypeButton /> {/* Button to toggle news types */}

        <div className="sm:px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
            <div className="md:col-span-2 space-y-6">
              <Slider serverData={filteredArticles} /> {/* Slider for filtered articles */}
              <MainNews serverData={filteredArticles} /> {/* Main news component */}
            </div>
            <div className="mb-5 max-md:px-9">
              <h1 className="mt-6 text-start ml-5 mb-0 font-semibold text-lg">Top News</h1>
              <TopNews serverData={filteredArticles} /> {/* Top news sidebar */}
            </div>
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
