
import Link from 'next/link';
export const metadata = {
  title: 'About CryptoNews',
  description: 'Learn about CryptoNews, our mission, team, and vision for delivering the latest cryptocurrency news.',
  openGraph: {
    title: 'About CryptoNews',
    description: 'Learn about CryptoNews, our mission, team, and vision for delivering the latest cryptocurrency news.',
    image: 'https://crptonews.com/images/ii.png', // You can replace this with a custom image URL
    url: 'https://crptonews.com/about-us', // The URL of your about page
    type: 'website',
    locale: 'en_US', // Locale for OpenGraph
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CryptoNews',
    description: 'Learn about CryptoNews, our mission, team, and vision for delivering the latest cryptocurrency news.',
    image: 'https://crptonews.com/images/ii.png', // You can replace this with a custom image URL
  },
  canonical: 'https://crptonews.com/about-us', // The canonical URL for the page
  robots: 'index, follow', // Ensure that the page is indexed by search engines
  meta: {
    viewport: 'width=device-width, initial-scale=1',
    language: 'en',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'About CryptoNews',
    description: 'Learn about CryptoNews, our mission, team, and vision for delivering the latest cryptocurrency news.',
    url: 'https://crptonews.com/about-us',
    publisher: {
      '@type': 'Organization',
      name: 'CryptoNews',
      logo: {
        '@type': 'ImageObject',
        url: 'https://crptonews.com/images/ii.png', // Replace with your site's logo URL
      },
    },
  },
};

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-white py-12">

        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#EEE40A]">About CrptoNews</h1>
            <p className="mt-4 text-xl text-gray-600">
              Your trusted source for the latest in cryptocurrency news.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
 
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#EEE40A]">Our Mission</h2>
              <p className="mt-4 text-gray-700">
                At CryptoNews, our mission is to provide real-time, accurate, and unbiased news on the world of cryptocurrencies and blockchain technology. 
                We aim to help investors, enthusiasts, and businesses stay informed and make educated decisions.
              </p>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#EEE40A]">Our Team</h2>
              <p className="mt-4 text-gray-700">
                CryptoNews is powered by a dedicated team of professionals with a deep passion for blockchain and cryptocurrency. Our experts work tirelessly to bring you the latest updates and insights.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#EEE40A]">Our Vision</h2>
            <p className="mt-4 text-gray-700">
              Our vision is to be the leading cryptocurrency news platform globally, providing insightful analysis, expert commentary, and breaking news to keep our readers ahead of the curve.
            </p>
          </div>


          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-[#EEE40A]">Stay Connected</h3>
            <p className="mt-2 text-gray-600">
              Join our newsletter to get the latest updates, news, and articles delivered to your inbox.
            </p>
            <Link
              href="/contact-us"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
