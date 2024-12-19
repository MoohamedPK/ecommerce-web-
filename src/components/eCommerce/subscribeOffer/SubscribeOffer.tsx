import emailjs from "@emailjs/browser";
import {useRef } from "react";

function SubscribeOffer() {

     const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
      .sendForm('service_zirhj2m', 'template_nfjlpym', formRef.current, {
        publicKey: 'vKrtJ7LR7ypoQljNi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section className="latest_collection mt-24">

        <div className="latest_heading text-center my-16">
          <h1 className="md:text-4xl text-2xl font-normal my-4 text-gray-500 ">Subscribe now and get <span className="text-black font-bold">20% OFF</span></h1>
          <p className="text-gray-500 text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="">
            <label className="flex justify-between md:justify-center items-center"  htmlFor="">
                <input className="py-1 px-2 w-full md:w-[400px] outline-none text-sm font-semibold" type="email" placeholder="Your Email"/>
                <button className="bg-black text-white text-xs md:text-sm md:py-3 md:px-5 px-2 py-2 hover:bg-gray-400 hover:text-black transition hover:scale-105" type="submit">SUBSCRIBE</button>
            </label>
        </form>
    </section>
  )
}

export default SubscribeOffer