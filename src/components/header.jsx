
import Image from 'next/image'
const icon = '/images/logo.png';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="bg-gray-900 w-full h-16">
      <div className="mx-11 flex justify-between items-center h-16">
        <Link href='/'>
        <Image
          src={icon}
          alt="Cryptonews"
          width={250}
          height={16}
        />
  </Link>

      </div>
    </div>
  );
}
