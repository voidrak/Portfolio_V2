import React, { useEffect, useRef } from "react";
import Reveal from "../../utils/Reveal";

import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTime,
  useTransform,
} from "framer-motion";
import MagneticAnimation from "../../utils/MagneticAnimation";
import Portal from "./Portal";
const TechStack = () => {
  const ref = useRef(null);
  const container = useRef(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  const lineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1, delay: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <div ref={container} id="skills" className="    ">
      <Reveal>
        <div className="  relative  mx-auto w-[250px] overflow-x-hidden bg-transparent  pb-24  text-4xl font-bold text-text-color-bold  ">
          TECH STACK
          <motion.div
            ref={ref}
            variants={lineVariants}
            initial="hidden"
            animate={controls}
            className="absolute left-0  top-12  h-[5px] w-[220px] origin-left bg-first-accent-color  "
          ></motion.div>
        </div>
      </Reveal>
      <div className=" mb-[10vh] flex items-center justify-center xl:justify-around xl:pl-[5rem]">
        <Reveal>
          <div className="relative hidden max-w-[677px] xl:block">
            <Portal />
          </div>
        </Reveal>
        <div className="xl:translate-x-[10rem]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-text-color-bold"> Languages</h1>
            <div className=" mt-8 flex w-[90vw] max-w-[560px]  flex-wrap  justify-center   ">
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E"
                  alt="JavaScript"
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>

              <MagneticAnimation>
                <img
                  src=" https://img.shields.io/badge/C++-%2300599C.svg?logo=c%2B%2B&logoColor=white "
                  alt=" c++ "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src=" https://img.shields.io/badge/Css-%231572B6.svg?logo=css3&logoColor=white "
                  alt="css3  "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white  "
                  alt=" html "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src="  https://img.shields.io/badge/JAVA-%23ED8B00.svg?logo=openjdk&logoColor=white"
                  alt=" java "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src=" https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white "
                  alt="Markdown  "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl text-text-color-bold">Framework/Library</h1>
            <div className=" mt-8 flex w-[90vw] max-w-[560px]  flex-wrap  justify-center   ">
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB"
                  alt="react"
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src=" https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white "
                  alt=" tailwindcss "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl text-text-color-bold">Database</h1>
            <div className=" mt-8 flex w-[90vw] max-w-[560px]  flex-wrap  justify-center   ">
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=plastic&logo=microsoft%20sql%20server&logoColor=white"
                  alt="Microsoft Server "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src=" https://img.shields.io/badge/mysql-%2300000f.svg?style=plastic&logo=mysql&logoColor=white "
                  alt=" mysql "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src=" https://img.shields.io/badge/Firebase-039BE5?style=plastic&logo=Firebase&logoColor=white "
                  alt="Firebase  "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl text-text-color-bold">Version Control</h1>
            <div className=" mt-8 flex w-[90vw] max-w-[560px]  flex-wrap  justify-center   ">
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/git-%23F05033.svg?style=plastic&logo=git&logoColor=white"
                  alt="git "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white "
                  alt=" github "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl text-text-color-bold">Design</h1>
            <div className=" mt-8 flex w-[90vw] max-w-[560px]  flex-wrap  justify-center   ">
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/Adobe%20XD-470137?style=plastic&logo=Adobe%20XD&logoColor=#FF61F6"
                  alt=" Adobe "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
              <MagneticAnimation>
                <img
                  src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=plastic&logo=figma&logoColor=white "
                  alt="figma  "
                  className=" mx-8  my-3 scale-x-[1.5] scale-y-[1.6] cursor-pointer "
                />
              </MagneticAnimation>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        style={{ height: height }}
        className="circleContainer relative mx-auto mt-[100px]          "
      >
        <div className="circle  absolute  left-[-10%]   z-10  h-[1550%] w-[120%] rounded-b-[50%] bg-bg-color shadow-box-shadow"></div>
      </motion.div>
    </div>
  );
};

export default TechStack;
