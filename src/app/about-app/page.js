import Link from 'next/link';

export const metadata = {
  title: 'About Our Mobile App',
  description: 'Learn about our mobile app, its features, our mission, team, and vision for delivering the best mobile experience.',
  openGraph: {
    title: 'About Our Mobile App',
    description: 'Learn about our mobile app, its features, our mission, team, and vision for delivering the best mobile experience.',
    image: 'https://crptonews.com/images/favicon.png', // You can replace this with a custom image URL for your app
    url: 'https://crptonews.com/about-us', // The URL of your about page
    type: 'website',
    locale: 'en_US', // Locale for OpenGraph
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Mobile App',
    description: 'Learn about our mobile app, its features, our mission, team, and vision for delivering the best mobile experience.',
    image: 'https://crptonews.com/images/favicon.png', // Custom image URL for Twitter card
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
    headline: 'About Our Mobile App',
    description: 'Learn about our mobile app, its features, our mission, team, and vision for delivering the best mobile experience.',
    url: 'https://crptonews.com/about-us',
    publisher: {
      '@type': 'Organization',
      name: 'Your Mobile App',
      logo: {
        '@type': 'ImageObject',
        url: 'https://crptonews.com/images/favicon.png', // Replace with your app's logo URL
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
            <h1 className="text-4xl font-bold text-[#EEE40A]">About Our Mobile App</h1>
            <p className="mt-4 text-xl text-gray-600">
              The mobile app designed to make your life easier with real-time updates, intuitive design, and seamless functionality.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
 
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#EEE40A]">Our Mission</h2>
              <p className="mt-4 text-gray-700">
                Our mission is to revolutionize the mobile experience by providing our users with a fast, reliable, and user-friendly app that simplifies their day-to-day activities. 
                We are committed to constant improvement, listening to user feedback, and delivering the most up-to-date features.
              </p>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#EEE40A]">Our Team</h2>
              <p className="mt-4 text-gray-700">
                We are a passionate team of developers, designers, and strategists, working tirelessly to create an exceptional app. Our diverse team brings together years of experience in mobile development and UX design to ensure the best experience for our users.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#EEE40A]">Our Vision</h2>
            <p className="mt-4 text-gray-700">
              Our vision is to become the leading mobile app in our category, providing users with the best tools, interface, and customer support. We aim to continue innovating and stay ahead of the curve in mobile technology.
            </p>
          </div>


          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-[#EEE40A]">Stay Connected</h3>
            <p className="mt-2 text-gray-600">
              Join our community to stay updated with new features, improvements, and exciting updates for our app. 
              Get the latest news directly in your inbox!
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
