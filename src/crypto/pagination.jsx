'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'

const Pagination =  ({ total_pages, current_page, link }) =>{
  const pages = [];
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = `${pathname}?${searchParams}`
  console.log(searchParams)
  const currentPage = parseInt(searchParams.get('page'), 10) || 1;
  console.log(currentPage)

  // Function to generate the pages array based on the current_page and total_pages
  const generatePages = () => {
    let startPage = 1;
    let endPage = total_pages;

    // Show pages around the current page (2 pages before and after the current page)
    if (total_pages > 5) {
      if (current_page <= 3) {
        endPage = 5;
      } else if (current_page >= total_pages - 2) {
        startPage = total_pages - 4;
      } else {
        startPage = current_page - 2;
        endPage = current_page + 2;
      }
    }

    // Add pages to the pagination array
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis (...) if necessary
    if (startPage > 1) {
      pages.unshift('...');
      pages.unshift(1);
    }
    if (endPage < total_pages) {
      pages.push('...');
      pages.push(total_pages);
    }
  };

  // Generate pages based on the logic above
  generatePages();

  // Function to handle the page change
  

  return (
    <div className='flex mt-5 justify-start mb-5 items-center text-[#007bff]  w-max'>
      {pages.map((page, index) => (
        <div key={index}>
          {/* Render ellipsis or links */}
          {page === '...' ? (
            <span className='border p-4'>...</span>
          ) : (
            <Link
              href={`${link}/?page=${page}`}  // Adjust the query params based on your routing
              onClick={() => handlePageClick(page)}  // Trigger the parent callback function on click
              className={`border p-4 ${currentPage === page ? 'text-black bg-[#EEE40A]' : ''}`}
            >
              {page}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
