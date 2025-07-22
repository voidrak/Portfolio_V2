import React, { useEffect, useRef, useState } from "react";
import Reveal from "../../utils/Reveal";
import toast, { Toaster } from "react-hot-toast";
import {
  delay,
  easeInOut,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import ButtonAnimation from "../../utils/ButtonAnimation";
const AboutSection = () => {
  const [sliderValue, setSliderValue] = useState(3);
  const [aboutText, setAboutText] = useState(
    "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology.  I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind",
  );

  const notify = () => toast.success("Thanks For Downloading ");

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    let bioText = "";
    switch (sliderValue) {
      case 1: {
        bioText = "I am Nahom Abraham, a web developer.";
        break;
      }
      case 2: {
        bioText =
          "I'm Nahom Abraham, a full stack developer at qelemmeda technologies. My web development journey started in 2022, always eager to learn new tech";
        break;
      }
      case 3: {
        bioText =
          "I'm Nahom Abraham,  a full stack developer at qelemmeda technologies.  I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind";
        break;
      }
      case 4: {
        bioText =
          "I'm Nahom Abraham,  a full stack developer at qelemmeda technologies. My passion for web development began in 2022, and I've been designing and developing websites ever since. Coding, for me, is more than just a tool – it's a way to express myself. Since my first HTML 'Hello World' program, I've felt like I've found my comfort zone. The thrill of creating something new solidified this.Beyond code, I enjoy music and football.";
        break;
      }
      default: {
        bioText =
          "I'm Nahom Abraham,  a full stack developer at qelemmeda technologies.  I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind";
      }
    }
    setAboutText(bioText);
  }, [sliderValue]);

  const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1, delay: 1, ease: "easeInOut" },
    },
  };
  const wordArray = aboutText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const childVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },

    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div
      className="  relative z-10 mt-24 pb-[10rem] pt-8  sm:pt-[10rem] min-[1700px]:pt-0 "
      id="about"
    >
      <Reveal>
        <h1 className="bg-transparent pb-8 text-4xl font-bold text-text-color-bold">
          ABOUT ME
        </h1>
      </Reveal>

      <div className="">
        <div className="flex items-center gap-x-4">
          <label
            htmlFor="bio-length"
            className="whitespace-nowrap text-xl font-semibold text-text-color-bold"
          >
            bio length
          </label>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64ffda"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-y-[10px] rotate-[80deg] bg-transparent"
          >
            <motion.path
              ref={ref}
              variants={svgVariants}
              initial="hidden"
              animate={controls}
              stroke="none"
              d="M0 0h24v24H0z"
            />
            <motion.path
              ref={ref}
              variants={svgVariants}
              initial="hidden"
              animate={controls}
              d="M12 3h5v5"
            />
            <motion.path
              ref={ref}
              variants={svgVariants}
              initial="hidden"
              animate={controls}
              d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"
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

      <div
        key={aboutText}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="  flex max-w-[860px] flex-wrap text-wrap  py-4 pb-[5rem] text-xl font-semibold text-text-color-light"
      >
        {wordArray.map((text, index) => (
          <span
            variants={childVariant}
            key={index}
            className="mx-[2px] xl:text-3xl "
          >
            {text}
          </span>
        ))}
      </div>
      <div className=" w-[250px] pb-5 text-xl text-white sm:ml-16">
        <a
          href="src/assets/Nahom_Abraham_Resume.pdf"
          download
          className="z-10 hover:font-bold"
          onClick={notify}
        >
          <ButtonAnimation>
            <p className="z-10">RESUME</p>
          </ButtonAnimation>
          <Toaster />
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
