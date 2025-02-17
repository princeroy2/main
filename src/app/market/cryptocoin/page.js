import Link from "next/link";
import Image from "next/image";
import Glossary from "@/cryptoapis/glossary";

const page = async () => {
  // Fetch data for all the letters A to Z
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  const coinData = await Promise.all(
    letters.map((letter) => Glossary(letter).then((data) => ({ letter, coins: data.coins })))
  );

  // Handle smooth scroll behavior when clicking on letters
  // const handleScroll = (letter) => {
  //   const element = document.getElementById(letter);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start', // Align the element at the top of the screen
  //     });
  //   }
  // };

  return (
    <>
      <div className="bg-[#f0f2f4] overflow-hidden">
        <div className=" mt-10 py-2 px-5 sm:mx-32">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src="/images/btc.png"
              alt="logo.png"
              height={40}
              width={40}
              className="w-10 h-10"
            />
            <h1 className="font-sans text-[30px]">Crypto Coins Info</h1>
          </div>
          <p className="mt-2 text-[#212529] font-sans text-[18px]">
            We have compiled data on the best exchanges to buy each coin based on volume and fees. We have also compiled the best wallets to store any coin so that your valuable crypto is always safe and accessible!
          </p>
        </div>

        {/* Navigation for Letters */}
        <div className=" mt-10  py-2 px-5 max-sm:px-5 sm:mx-32 overflow-auto">
          <div className="flex flex-row sm:justify-center max-sm:gap-2 sm:gap-8 text-gray-500 font-bold">
            {letters.map((letter) => (
              <div
                key={letter}
                className="hover:text-yellow-300 hover:cursor-pointer"
              >
                <a
                  href={`#${letter}`}
                 
                >
                  {letter}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Coin List Section */}
        {coinData.map(({ letter, coins }) => (
          <div key={letter} id={letter} className=" mt-10 py-2 px-5 max-sm:px-6 sm:mx-32">
            <h1 className="mt-6 font-bold text-[40px]">{letter}</h1>
            <ul className="flex flex-wrap flex-row list-disc colored-list_crtpocoin gap-6 max-sm:gap-6">
              {coins && coins.length > 0 ? (
                coins.map((item, index) => (
                  <li key={index}>
<Link className="hover:underline text-[#007eff] text-[13px]" href={`/market/cryptocoin/${item.Symbol}`}>
{item.FullName}
                    </Link>
                  </li>
                ))
              ) : (
                <p>No coins found for the letter {letter}</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
