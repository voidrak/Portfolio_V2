import React, { useEffect, useState } from "react";
import Reveal from "../../utils/Reveal";
import { delay, easeInOut, motion } from "framer-motion";
const AboutSection = () => {
  const [sliderValue, setSliderValue] = useState(3);
  const [aboutText, setAboutText] = useState(
    "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. Since 2022, I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind",
  );
  useEffect(() => {
    let bioText = "";
    switch (sliderValue) {
      case 1: {
        bioText = "I am Nahom Abraham, a web developer.";
        break;
      }
      case 2: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. My web development journey started in 2022, always eager to learn new tech";
        break;
      }
      case 3: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. Since 2022, I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind";
        break;
      }
      case 4: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. My passion for web development began in 2022, and I've been designing and developing websites ever since. Coding, for me, is more than just a tool – it's a way to express myself. Since my first HTML 'Hello World' program, I've felt like I've found my comfort zone. The thrill of creating something new solidified this.Beyond code, I enjoy music and football.";
        break;
      }
      default: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. Since 2022, I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind";
      }
    }
    setAboutText(bioText);
  }, [sliderValue]);

  const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, delay: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="mt-24 pb-[10rem] pt-8 sm:pt-[10rem] min-[1700px]:pt-0 ">
      <Reveal>
        <h1 className="bg-transparent pb-8 text-4xl font-bold text-text-color-bold">
          ABOUT ME
        </h1>
      </Reveal>

      <div className="">
        <div className="flex gap-x-4">
          <label
            htmlFor="bio-length"
            className="text-xl font-semibold  text-text-color-bold"
          >
            bio length
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65.76062"
            height="20.94"
            viewBox="0 0 65.76062 20.94"
          >
            <motion.path
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              d="M3.0696,14.35003c14.77852-4.66461,30.54831-5.6899,45.76236-2.61603,4.44585,.89825,8.8161,2.1243,13.095,3.6261,1.274,.44715,2.73515-.50817,3.0753-1.7461,.37901-1.37937-.46745-2.62652-1.7461-3.0753C47.82195,5.12165,31.2588,3.6356,15.11839,6.30519c-4.53218,.74961-8.99807,1.84099-13.37799,3.22345C-1.31727,10.49374-.01125,15.32246,3.0696,14.35003h0Z"
              fill="#64ffda"
              origin="undraw"
            />
            <motion.path
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              d="M55.97417,3.76117l2.58581,4.86421,1.32984,2.5016,.66492,1.2508c.08649,.16269,.16913,.42327,.29552,.55591-.51452-.53997,1.42541-2.15361,.51312-1.82543-.8054,.28974-1.58804,.8423-2.34456,1.24356-.82749,.4389-1.65498,.87781-2.48247,1.31671-1.65498,.87781-3.30996,1.75562-4.96494,2.63342-1.15699,.61367-1.60767,2.31798-.89688,3.42047,.75851,1.17651,2.18291,1.55329,3.42047,.89688,1.93081-1.02411,3.86162-2.04822,5.79243-3.07233,.91943-.48767,1.83887-.97534,2.7583-1.46301,1.14784-.60882,2.34415-1.1119,2.8815-2.38522,.54904-1.30103,.0367-2.54313-.58127-3.70559l-1.55149-2.91853c-1.03432-1.94569-2.06865-3.89137-3.10297-5.83706-.61473-1.15638-2.31725-1.60814-3.42047-.89688-1.17565,.75796-1.55443,2.18355-.89688,3.42047h0Z"
              fill="#64ffda"
            />
          </svg>
        </div>
        <div className="relative mt-4 w-[90%]  max-w-[460px] ">
          {sliderValue == 1 && (
            <span className="absolute left-[-6px] top-[-10px] bg-transparent text-xl">
              😫
            </span>
          )}
          {sliderValue == 2 && (
            <span className="absolute left-[29%] top-[-10px] bg-transparent text-xl min-[519px]:left-[31%] ">
              😊
            </span>
          )}
          {sliderValue == 3 && (
            <span className="absolute left-[60%] top-[-10px]  bg-transparent  text-xl min-[519px]:left-[62%]">
              😁
            </span>
          )}
          {sliderValue == 4 && (
            <span className="absolute right-0 top-[-10px] bg-transparent text-xl">
              🥰
            </span>
          )}

          <input
            onChange={(e) => {
              setSliderValue(parseInt(e.target.value));
            }}
            value={sliderValue}
            type="range"
            step="1"
            min="1"
            max="4"
            className="mt-8 w-full cursor-pointer  accent-first-accent-color"
          />
        </div>
      </div>

      <p className="max-w-[860px] py-4 text-xl font-semibold text-text-color-bold">
        {aboutText}
      </p>
    </div>
  );
};

export default AboutSection;
