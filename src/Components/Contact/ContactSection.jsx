import React, { useState, useEffect, useRef } from "react";
import ButtonAnimation from "../../utils/ButtonAnimation";
import Reveal from "../../utils/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";
import MagneticAnimation from "../../utils/MagneticAnimation";
import Cursor from "../ui/Cursor";
const ContactSection = () => {
  const [isInContact, setIsInContact] = useState(false);
  const [isInText, setIsInText] = useState(false);
  const ref = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });
  const isInViewSvg = useInView(svgRef, { once: true, amount: "all" });
  const mainControls = useAnimation();
  const svgControls = useAnimation();
  const itemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
      ease: [0.11, 0, 0.5, 0],
      type: "spring",
    },
  };
  const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1, delay: 1, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (isInViewSvg) {
      svgControls.start("visible");
    }
  }, [isInViewSvg]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      id="contact"
      onMouseEnter={() => {
        setIsInContact(true);
      }}
      onMouseLeave={() => {
        setIsInContact(false);
      }}
      className=" relative mt-16 h-[100vh] overflow-hidden  bg-[#141516]  font-LockerRoom  text-white "
    >
      <div className="relative mx-auto w-full max-w-[1900px]   bg-[#141516] ">
        <motion.div
          onMouseEnter={() => {
            setIsInText(true);
          }}
          onMouseLeave={() => {
            setIsInText(false);
          }}
          ref={ref}
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
          className="  w-full overflow-hidden px-4 pt-[8rem] text-[45px] min-[425px]:text-[64px] min-[501px]:text-[80px] md:leading-[10rem] min-[781px]:text-[100px] lg:text-[155px] xl:px-8"
        >
          <motion.div variants={itemVariants} className=" w-full text-left">
            LET'S WORK
          </motion.div>
          <motion.div variants={itemVariants} className=" w-full text-right">
            TOGETHER
          </motion.div>
        </motion.div>
        {isInContact && <Cursor isInText={isInText} />}
        <div className="   relative  mx-auto mt-16  flex w-full max-w-[1200px] translate-y-[-10vh]  flex-col  pr-4 max-[500px]:mt-[10rem] md:translate-y-[-5vh]  min-[1700px]:translate-y-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[80px] md:ml-[2vw] md:translate-x-[2rem] lg:size-[100px]  lg:translate-x-[10rem] xl:size-[120px]"
          >
            <motion.path
              ref={svgRef}
              variants={svgVariants}
              initial="hidden"
              animate={svgControls}
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <motion.path
              ref={svgRef}
              variants={svgVariants}
              initial="hidden"
              animate={svgControls}
              d="M7 7l10 10"
              stroke="#51d2b9"
            />
            <motion.path
              ref={svgRef}
              variants={svgVariants}
              initial="hidden"
              animate={svgControls}
              d="M17 8l0 9l-9 0"
              stroke="#51d2b9"
            />
          </svg>
          <div className="  ml-auto flex  translate-y-[-5rem]       flex-col text-lg min-[375px]:text-[20px] min-[501px]:text-[25px]   ">
            <ButtonAnimation>
              <a
                href="mailto:nahomabrahamofficial@gmail.com  "
                className="  z-10  rounded-full     min-[680px]:p-8 "
              >
                nahomabraham@gmail.com
              </a>
            </ButtonAnimation>
            <ButtonAnimation>
              <a
                href="tel:  +251921607264"
                className="  z-10  rounded-full  min-[680px]:p-8 "
              >
                +251921607264
              </a>
            </ButtonAnimation>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-10 px-4 py-8 ">
        <h1 className="my-4 text-xl uppercase text-text-color-light">
          Socials
        </h1>
        <div className="flex flex-wrap gap-x-8 text-xl min-[600px]:text-3xl">
          <a
            href="https://github.com/voidrak"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-x-2  hover:text-first-accent-color  "
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </a>

          <a
            href="http://www.linkedin.com/in/voidrak"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-x-2  hover:text-first-accent-color  "
          >
            Linkedin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </a>

          <a
            href="https://twitter.com/voidrak"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-x-2  hover:text-first-accent-color  "
          >
            Twitter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
