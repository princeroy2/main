'use client'; // Ensure this code is client-side
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const News_TypeButton = () => {
  const pathname = usePathname(); // Get the current pathname
  
  const blockchainData = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Bitcoin' },
    { id: 3, name: 'Ethereum' },
    { id: 4, name: 'Blockchain' },
    { id: 5, name: 'DeFi' },
    { id: 6, name: 'NFTs' },
    { id: 7, name: 'Cryptocurrency' },
    { id: 8, name: 'Altcoin' },
    { id: 9, name: 'Staking' },
    { id: 10, name: 'DAO' },
    { id: 11, name: 'Mining' },
  ];

  // Derive the active link directly from the pathname
  const pathPart = pathname.split('/')[2]; // Get part after '/news/'
  console.log(pathPart)
  const activeLink = pathPart || 'all'; // Default to 'All' if path is empty or invalid

  return (

    <ul className="flex flex-nowrap max-md:justify-start justify-center pb-4 items-center mx-auto max-lg:mx-auto mt-5 space-x-5 max-md:space-x-2 overflow-x-auto max-md:px-5">

      {blockchainData.map((item) => (
        <li
          key={item.id}
          className={`hover:bg-gray-400 ${activeLink === item.name.toLowerCase() ? 'bg-gray-900 text-white' : 'bg-[#fffdf6] text-gray-600'} text-[#b0bec5] hover:text-white px-3 max-md:text-[12px] max-lg:text-[12px] text-[12px] font-bold rounded-[8px] py-[3px] border border-solid border-[#b4c5ce]`}
        >
          <Link
            href={`/news/${item.name.toLowerCase() === 'all' ? 'all' : item.name.toLowerCase()}`}
            className={`${activeLink === item.name ? 'bg-gray-900 text-white' : ''} focus:outline-none`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default News_TypeButton;
