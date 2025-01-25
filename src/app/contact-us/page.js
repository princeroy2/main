import { FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons
export const metadata = {
  title: 'Contact CryptoNews',
  description: 'Reach out to CryptoNews for inquiries, feedback, or collaborations. We’re here to help!',
  openGraph: {
    title: 'Contact CryptoNews',
    description: 'Reach out to CryptoNews for inquiries, feedback, or collaborations. We’re here to help!',
    image: '/default-image.jpg', // You can replace this with a custom image URL
    url: 'https://crptonews.com/contact-us', // The URL of your contact page
    type: 'website',
    locale: 'en_US', // Locale for OpenGraph
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact CryptoNews',
    description: 'Reach out to CryptoNews for inquiries, feedback, or collaborations. We’re here to help!',
    image: '/default-image.jpg', // You can replace this with a custom image URL
  },
  canonical: 'https://crptonews.com/contact-us', // The canonical URL for the page
  robots: 'index, follow', // Ensure that the page is indexed by search engines
  meta: {
    viewport: 'width=device-width, initial-scale=1',
    language: 'en',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'Contact CryptoNews',
    description: 'Reach out to CryptoNews for inquiries, feedback, or collaborations. We’re here to help!',
    url: 'https://crptonews.com/contact-us',
    publisher: {
      '@type': 'Organization',
      name: 'CryptoNews',
      logo: {
        '@type': 'ImageObject',
        url: '/images/logo.png', // Replace with your site's logo URL
      },
    },
  },
};

export default function Contact() {
  return (
    <>
   

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact CryptoNews</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            We’d love to hear from you! For inquiries, feedback, or collaborations, please reach out through the following contact options.
          </p>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-6">Feel free to contact us through any of the following methods:</p>

            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center text-gray-700 mb-4">
                <FiMail className="text-2xl mr-3" />
                <a href="mailto:contact@cryptonews.com" className="text-blue-600 hover:text-blue-800">contact@cryptonews.com</a>
              </div>

              <div className="flex items-center text-gray-700 mb-4">
                <FiPhone className="text-2xl mr-3" />
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">+1 (234) 567-890</a>
              </div>

              <div className="flex items-center text-gray-700 mb-4">
                <FaWhatsapp className="text-2xl mr-3" />
                <a href="https://wa.me/1234567890" className="text-green-600 hover:text-green-800" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </div>

              <div className="flex items-center text-gray-700 mb-4">
                <FaFacebookF className="text-2xl mr-3" />
                <a href="https://facebook.com/CryptoNews" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  Follow us on Facebook
                </a>
              </div>

              <div className="flex items-center text-gray-700 mb-4">
                <FaTwitter className="text-2xl mr-3" />
                <a href="https://twitter.com/CryptoNews" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  Follow us on Twitter
                </a>
              </div>

              <div className="flex items-center text-gray-700 mb-4">
                <FaLinkedinIn className="text-2xl mr-3" />
                <a href="https://linkedin.com/company/CryptoNews" className="text-blue-700 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                  Connect with us on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
