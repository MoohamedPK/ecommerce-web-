import AboutImg from "@assets/imgs/about_img.png"
import SubscribeOffer from "@components/eCommerce/subscribeOffer/SubscribeOffer"

function About() {
  return (
    <section className="about mt-15">

        <div className="latest_heading text-center my-16">
          <h1 className="md:text-1xl text-2xl font-medium my-4 text-gray-500">ABOUT <span className="text-black font-bold">US</span></h1>
        </div>
        
        <div className="body">
          <div className="md:flex md:justify-around items-center grid">
            <div className="img"><img className="w-[400px]" src={AboutImg} alt="" /></div>

            <div className="content w-full text-center md:text-start md:w-1/2 mt-10 md:mt-0 text-sm leading-6 font-medium text-gray-500">
              <p className="mb-8">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
              <p className="mb-8">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers</p>
              <h1 className="font-bold text-base text-black">Our Mission</h1>
              <p className="mt-8">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
          </div>

          <div className="">
            <div className="latest_heading my-16">
              <h1 className="md:text-1xl text-2xl font-medium my-4 text-gray-500 mb-20 text-center md:text-start">WHY <span className="text-black font-bold">CHOOSE US</span></h1>

              <div className="grid md:grid-cols-3 grid-cols-1 text-center text-sm bg-black md:bg-white text-white md:text-black p-8 md:p-0 rounded-lg">
                <div className="md:mb-6 mb-12 leading-7">
                  <h1 className="font-bold text-base text-gray-400 md:text-black md:mb-7 mb-3">Quality Assurance:</h1>
                  <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>

                <div className="md:mb-6 mb-12 leading-7">
                  <h1 className="font-bold text-base text-gray-400 md:text-black md:mb-7 mb-3">Convenience:</h1>
                  <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>

                <div className="md:mb-6 mb-12 leading-7">
                  <h1 className="font-bold text-base text-gray-400 md:text-black md:mb-7 mb-3">Exceptional Customer Service:</h1>
                  <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <SubscribeOffer/>
    </section>
  )
}

export default About