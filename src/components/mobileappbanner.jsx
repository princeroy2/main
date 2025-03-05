import DownloadBadges from "./GooglePlayButton"
function MObileAppbanner() {
  return (
    <div    className="bg-gradient-to-b font-sans max-sm:hidden mx-auto max-sm:mt-2 mt-6 from-[#EEE40A] to-green-200 h-[124px] text-black font-semibold text-sm px-4 py-2 rounded-xl"

    // style={{ backgroundImage: 'url("/images/iconweb.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        Download the <b >Crypto News app</b> and get  news about crypto and blockchain from various sources:
        <div className="">
           <DownloadBadges name={'justify-center'}/>
        </div>
    </div>
  )
}

export default MObileAppbanner