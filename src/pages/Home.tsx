import HeroBg from "@assets/imgs/hero_img.png";
import LatestCollection from "@components/eCommerce/latestCollection/LatestCollection";
import SubscribeOffer from "@components/eCommerce/subscribeOffer/SubscribeOffer";
import GridList from "@components/common/GridList/GridList";
import { useGetCollection } from "@hooks/useGetCollection";
import { TProducts } from "src/types";
//icons 
import { MdSupportAgent, MdVerified, MdAutorenew } from "react-icons/md";
import Loading from "@feedback/loading/Loading";

function Home() {
  const {records, loading, error} = useGetCollection()

  return (
    <Loading error={error} loading={loading}>
      <div>

        <div>
          <div className="hero flex flex-col md:flex-row md:justify-between md:items-center border border-black text-center md:text-start">
              <div className="hero_text ml-[15%] py-3 md:py-0 relative">
                <h3 className=" font-medium ">OUR BEST SELLERS</h3>
                <h1 className="font-customTwo text-4xl md:text-6xl font-semibold my-3">Latest Arrivals</h1>
                <h3 className="font-semibold">SHOP NOW</h3>
              </div>

              <div className="hero_bg">
                <img className="w-[650px]" src={HeroBg} alt="" />
              </div>
          </div>
        </div>

        <section className="latest_collection">

          <div className="latest_heading text-center my-24">
            <h1 className="text-4xl font-normal my-4 text-gray-500">Latest <span className="text-black">Collection</span></h1>
            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
          </div>

        {/* <MdChevronLeft size={40} className="absolute top-14 right-1 mx-10 bg-black my-8 cursor-pointer rounded-full text-white"/> */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-y-5 md:gap-y-0 mt-10">
              <GridList<TProducts> records={records} renderItems={(record) => <LatestCollection {...record}/>}/>
          </div>
        {/* <MdChevronRight size={40} className="absolute top-14 right-0 bg-black my-8 cursor-pointer rounded-full text-white" /> */}
        </section>

      {/* FEATURES SECTION */}
        <section className="latest_collection my-20">

          <div className="latest_heading text-center my-24">
            <h1 className="text-4xl font-normal my-4 text-gray-500">OUR <span className="text-black">FEATURES</span></h1>
            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
          </div>

          <div>
            <ul className="flex flex-wrap justify-around items-center text-center space-y-4">
              <li className="md:bg-gray-400/70 p-8 md:rotate-2 rounded-lg hover:rotate-0 md:marker:hover:-translate-y-5 transition md:w-fit  w-full">
                <MdAutorenew size={50 } className="mx-auto"/>
                <h1 className="mt-4 text-sm font-bold">Easy Exchange Policy</h1>
                <p className="text-sm font-semibold text-gray-500 mt-2">We offer hassle free exchange policy</p>
              </li>

              <li className="md:bg-gray-400/70 p-8 md:-rotate-2 rounded-lg hover:rotate-0 md:hover:-translate-y-5 transition md:w-fit w-full">
                <MdVerified size={50} className="mx-auto"/>
                <h1 className="mt-4 text-sm font-bold">7 Days Return Policy</h1>
                <p className="text-sm font-semibold text-gray-500 mt-2">We provide 7 days free return policy</p>
              </li>

              <li className="md:bg-gray-400/70 p-8 md:rotate-2 rounded-lg hover:rotate-0 md:hover:-translate-y-5 transition md:w-fit w-full">
                <MdSupportAgent size={50} className="mx-auto"/>
                <h1 className="mt-4 text-sm font-bold">Best customer support</h1>
                <p className="text-sm font-semibold text-gray-500 mt-2">we provide 24/7 customer support</p>
              </li>
            </ul>
          </div>
        </section>

        {/* subscribe section */}
          <SubscribeOffer/>
      </div>
    </Loading>
  )
}

export default Home