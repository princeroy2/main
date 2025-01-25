import { FiMail, FiPhone } from 'react-icons/fi';

// Define metadata for SEO purposes
export const metadata = {
  title: 'CryptoNews Policies - Privacy, Terms, Refund, Disclaimer',
  description: 'Read the policies for CryptoNews, including Privacy Policy, Cookie Policy, Refund Policy, Disclaimer, and Terms of Use.',
  openGraph: {
    title: 'CryptoNews Policies - Privacy, Terms, Refund, Disclaimer',
    description: 'Read the policies for CryptoNews, including Privacy Policy, Cookie Policy, Refund Policy, Disclaimer, and Terms of Use.',
    image: '/default-image.jpg', // You can replace this with a custom image URL
    url: 'https://crptonews.com/privacy-policies', // Set the URL to the page
    type: 'website',
    locale: 'en_US', // Locale for OpenGraph
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoNews Policies - Privacy, Terms, Refund, Disclaimer',
    description: 'Read the policies for CryptoNews, including Privacy Policy, Cookie Policy, Refund Policy, Disclaimer, and Terms of Use.',
    image: '/default-image.jpg', // You can replace this with a custom image URL
  },
  canonical: 'https://crptonews.com/privacy-policies', // The canonical URL for the page
  robots: 'index, follow', // Ensure that the page is indexed by search engines
  meta: {
    viewport: 'width=device-width, initial-scale=1',
    language: 'en',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'CryptoNews Policies',
    description: 'Read the policies for CryptoNews, including Privacy Policy, Cookie Policy, Refund Policy, Disclaimer, and Terms of Use.',
    url: 'https://crptonews.com/privacy-policies',
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

export default function Policies() {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">CryptoNews Policies</h1>

          <p className="text-lg text-gray-700 mb-6">
            Welcome to CryptoNews. By using our website, you agree to the policies outlined below. Please read the following policies carefully. 
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Privacy Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            At **CryptoNews**, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal data. By using our services, you agree to the collection and use of your data as described in this policy.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">What We Collect</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Personal information such as name, email, and contact details</li>
            <li>Non-personal data such as browsing history, location, and device information</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Data</h3>
          <p className="text-lg text-gray-700 mb-4">
            We use your data to provide you with personalized content, improve our services, and communicate with you about updates, promotions, or important changes. We do not sell or share your personal data with third parties without your consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Cookie Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            **CryptoNews** uses cookies to improve your browsing experience. This Cookie Policy explains what cookies are, how we use them, and how you can control them.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">What Are Cookies?</h3>
          <p className="text-lg text-gray-700 mb-4">
            Cookies are small text files stored on your device when you visit websites. They help us remember your preferences and improve your experience on our site.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Use Cookies</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To remember your preferences and settings</li>
            <li>To analyze traffic and improve the website</li>
            <li>To track and measure marketing campaigns</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Managing Cookies</h3>
          <p className="text-lg text-gray-700 mb-4">
            You can control and manage cookies through your browser settings. However, disabling cookies may affect your user experience on our site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            We strive to provide high-quality services to our users. In case of dissatisfaction with any services or products purchased through CryptoNews, you may be eligible for a refund according to our Refund Policy.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Refund Eligibility</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Refund requests must be made within 14 days of purchase</li>
            <li>The service or product must be unused and in its original condition</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Request a Refund</h3>
          <p className="text-lg text-gray-700 mb-4">
            To request a refund, please contact us via email at <a href="mailto:support@cryptonews.com" className="text-blue-600 hover:text-blue-800">support@cryptonews.com</a>. Our customer service team will assist you with the process.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Disclaimer</h2>
          <p className="text-lg text-gray-700 mb-4">
            The information provided on CryptoNews is for informational purposes only and does not constitute financial advice. We make no representations about the accuracy or completeness of the information on the website. Always conduct your own research and consult with a professional before making any financial decisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Terms of Use</h2>
          <p className="text-lg text-gray-700 mb-4">
            By using CryptoNews, you agree to our Terms and Conditions. These terms govern your access and use of the website and services provided by CryptoNews. Please review our <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a> for more information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            If you have any questions about our policies or would like to get in touch with us, feel free to reach out through the following contact details:
          </p>

          <div className="flex justify-center gap-8">
            <div className="flex items-center text-gray-700">
              <FiMail className="text-2xl mr-3" />
              <a href="mailto:support@cryptonews.com" className="text-blue-600 hover:text-blue-800">support@cryptonews.com</a>
            </div>
            <div className="flex items-center text-gray-700">
              <FiPhone className="text-2xl mr-3" />
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
