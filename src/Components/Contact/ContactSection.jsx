import React from "react";
import ButtonAnimation from "../../utils/ButtonAnimation";

const ContactSection = () => {
  return (
    <div className=" contact relative flex h-[120vh] flex-col  items-center justify-center overflow-x-hidden bg-[#141516] pt-16 text-white ">
      <div className="relative  flex max-w-[1400px] flex-col items-center ">
        <div className=" relative   w-full border-b border-b-gray-500 pb-[200px]">
          <div className="flex items-center gap-x-4">
            <div className="   relative w-[100px]  overflow-hidden  rounded-[50%]   ">
              {/* <img src="/images/background.jpg" className=" object-cover  " /> */}
            </div>
            <h1 className=" text-text-clamp    font-light ">Let's work</h1>
          </div>
          <h1 className=" text-text-clamp  font-light lg:mt-[-1.0rem]   xl:mt-[-2.5rem]">
            together
          </h1>
          <ButtonAnimation className=" absolute left-[50%] top-[80%] flex  h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full  bg-black">
            <p className="z-10">Get in touch</p>
          </ButtonAnimation>
        </div>

        <div className="mt-[200px] flex flex-col justify-between gap-x-[4rem] gap-y-8 p-5 md:flex-row">
          <ButtonAnimation>
            <a
              href="mailto:nahomabrahamofficial@gmail.com"
              className="relative z-20 transition-colors duration-[0.4s] ease-linear hover:text-white"
            >
              nahomabrahamofficial@gmail.com
            </a>
          </ButtonAnimation>
          <ButtonAnimation>
            <a
              href="tel:+25121607260"
              className="relative z-20 transition-colors  duration-[0.4s] ease-linear hover:text-white"
            >
              +251921607260
            </a>
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
