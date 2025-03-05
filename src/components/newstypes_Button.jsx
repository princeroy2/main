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
  const activeLink = pathPart || 'all'; // Default to 'All' if path is empty or invalid

  return (

    <ul className="flex font-inter notranslate skiptranslate flex-nowrap max-md:justify-start max-lg:px-5  justify-center pb-2 items-center mx-auto max-lg:justify-start mt-5 space-x-2  scrol">

      {blockchainData.map((item) => (
        <li
          key={item.id}
          className={`hover:bg-gray-400 ${activeLink === item.name.toLowerCase() ? 'bg-[#EEE40A] text-black border-[#EEE40A]' : 'bg-[#fffdf6] text-[#b0bec5]'} text-[#b0bec5] hover:text-white px-6 max-md:text-[12px] max-lg:text-[12px] text-[12px] font-bold rounded-[8px] py-[3px] border border-solid border-[#b4c5ce]`}
        >
          <Link
href={item.name.toLowerCase() === 'all' ? '/' : `/news/${item.name.toLowerCase()}`}
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
