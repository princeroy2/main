import { FiMail, FiPhone } from 'react-icons/fi';

// Define metadata for SEO purposes
export const metadata = {
  title: 'Terms and Conditions - CryptoNews',
  description: 'Read the Terms and Conditions for using CryptoNews, including content ownership, user conduct, liability, and more.',
  openGraph: {
    title: 'Terms and Conditions - CryptoNews',
    description: 'Read the Terms and Conditions for using CryptoNews, including content ownership, user conduct, liability, and more.',
    image: 'https://crptonews.com/images/favicon.png', // You can replace this with a custom image URL
    url: 'https://crptonews.com/term-condition', // Set the URL to the page
    type: 'website',
    locale: 'en_US', // Locale for OpenGraph
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - CryptoNews',
    description: 'Read the Terms and Conditions for using CryptoNews, including content ownership, user conduct, liability, and more.',
    image: 'https://crptonews.com/images/favicon.png', // You can replace this with a custom image URL
  },
  canonical: 'https://crptonews.com/term-condition', // The canonical URL for the page
  robots: 'index, follow', // Ensure that the page is indexed by search engines
  meta: {
    viewport: 'width=device-width, initial-scale=1',
    language: 'en',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'Terms and Conditions - CryptoNews',
    description: 'Read the Terms and Conditions for using CryptoNews, including content ownership, user conduct, liability, and more.',
    url: 'https://crptonews.com/term-condition',
    publisher: {
      '@type': 'Organization',
      name: 'CryptoNews',
      logo: {
        '@type': 'ImageObject',
        url: 'https://crptonews.com/images/favicon.png', // Replace with your site's logo URL
      },
    },
  },
};

export default function Terms() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Terms and Conditions</h1>

          <p className="text-lg text-gray-700 mb-6">
            These Terms and Conditions govern your use of the **crptonews** website, a platform providing the latest news, insights, and information related to cryptocurrency. By accessing or using the crptonews website, you agree to comply with and be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg text-gray-700 mb-4">
            By accessing or using the **crptonews** website, you agree to abide by these Terms and Conditions and any applicable laws and regulations. If you do not agree with these terms, you are prohibited from using the site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Website</h2>
          <p className="text-lg text-gray-700 mb-4">
            You are granted a limited, non-exclusive, non-transferable license to access and use the **crptonews** website solely for personal, non-commercial purposes. You may not reproduce, duplicate, copy, sell, or exploit any part of the website without permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Content Ownership</h2>
          <p className="text-lg text-gray-700 mb-4">
            All content, including articles, images, logos, and trademarks, displayed on the **crptonews** website is owned by or licensed to crptonews and is protected by copyright laws. You may not use or modify any content without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Conduct</h2>
          <p className="text-lg text-gray-700 mb-4">
            You agree not to use the **crptonews** website for any unlawful or prohibited activity. This includes, but is not limited to, activities such as posting false or misleading information, engaging in spam, hacking, or attempting to disrupt the website’s functionality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
          <p className="text-lg text-gray-700 mb-4">
            **crptonews** will not be held responsible for any damages, losses, or expenses incurred as a result of your use or inability to use the website. We do not guarantee the accuracy, reliability, or completeness of the content published on the website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacy Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your use of the **crptonews** website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the website, you consent to our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
          <p className="text-lg text-gray-700 mb-4">
            **crptonews** reserves the right to modify or update these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically. Continued use of the website after changes to the Terms and Conditions will be deemed acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
          <p className="text-lg text-gray-700 mb-4">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which **crptonews** operates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
          </p>

          <div className="flex justify-center gap-8">
            <div className="flex items-center text-gray-700">
              <FiMail className="text-2xl mr-3" />
              <a href="mailto:contact@crptonews.com" className="text-blue-600 hover:text-blue-800">contact@crptonews.com</a>
            </div>
            <div className="flex items-center text-gray-700">
              <FiPhone className="text-2xl mr-3" />
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">+923021677732</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
