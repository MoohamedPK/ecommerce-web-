import ContactImg from "@assets/imgs/contact_img.png"
import SubscribeOffer from "@components/eCommerce/subscribeOffer/SubscribeOffer"
function Contact() {
  return (
    <div>
      <div className="latest_heading text-center my-16">
          <h1 className="md:text-1xl text-2xl font-medium my-4 text-gray-500">CONTACT <span className="text-black font-bold">US</span></h1>
      </div>

      <div className="body flex justify-center items-center">
        <div className="md:flex space-x-10 items-center grid">
            <div className="img"><img className="w-[400px]" src={ContactImg} alt="" /></div>

            <div className="content w-full text-center md:text-start md:w-1/2 mt-10 md:mt-0 text-sm leading-6 font-medium text-gray-500">
              <h1 className="font-bold text-base text-black">Our Store</h1>
              <p className="mb-8">54709 Willms Station <br></br> Suite 350, Washington, USA</p>
              <p className="mt-8">Tel: (415) 555-0132 <br></br> Email: admin@forever.com</p>
              <h1 className="font-bold text-base text-black my-4">Careers at Forever</h1>
              <p className="mb-8">Learn more about our teams and job openings</p>

              <button className="px-8 py-4 bg-black text-white font-light text-sm hover:scale-105 transition-all ">Explore Jobs</button>
            </div>
          </div>
      </div>

      <SubscribeOffer/>
    </div>
  )
}

export default Contact