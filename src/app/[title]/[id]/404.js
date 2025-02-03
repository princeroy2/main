// pages/404.js

import Link from 'next/link'
const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img
        src="/images/404-image.png" // You can add your own 404 image in the /public folder
        alt="Page Not Found"
        style={{ width: '50%', marginBottom: '30px' }}
      />
      <h1 style={{ fontSize: '4rem' }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>We can't seem to find the page you're looking for.</p>
      <p>
        <Link href="/">
          <span style={{ color: '#0070f3', textDecoration: 'underline' }}>
            Go back to the homepage
          </span>
        </Link>
      </p>
    </div>
  )
}

export default Custom404
