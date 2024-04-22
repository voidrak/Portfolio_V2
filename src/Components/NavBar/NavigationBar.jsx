import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Curve from "./Curve";
const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navBarLink = [
    { title: "About", href: "#" },
    { title: "Skills", href: "#" },
    { title: "Project", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const menuSlide = {
    initial: {
      x: "calc(100% + 100px)",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: {
      x: "80px",
    },
    enter: (i) => ({
      x: "0px",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
    }),
    exit: (i) => ({
      x: "80px",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
    }),
  };

  return (
    <div className="fixed right-0 top-0 z-50 ">
      <div
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className=" fixed right-2 top-0 z-40 m-[20px] flex  h-[80px] w-[80px] items-center justify-center rounded-full bg-first-accent-color "
      >
        <div
          className={`w-full bg-transparent before:relative before:top-[5px] before:m-auto  before:block before:h-[2px] before:w-[40%] before:bg-white after:relative after:top-[-5px]  after:m-auto after:block after:h-[2px] after:w-[40%] after:bg-white ${isNavOpen ? "before:top-[-1px]  before:rotate-[-45deg] after:top-[1px]  after:rotate-[45deg]" : ""} before:transition-all before:duration-200  after:transition-all after:duration-200 `}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isNavOpen && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-[100vh] w-[100vw] max-w-[481px] bg-black  text-text-color-bold "
          >
            <div className="   flex justify-between p-[100px]">
              <div className="  mt-20 flex w-full flex-col gap-4 text-[56px]">
                <div className="  border-b border-text-color-light text-base  ">
                  <p className="pb-2 text-text-color-light">Navigation</p>
                </div>
                {navBarLink.map((item, index) => (
                  <motion.a
                    custom={index}
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    href={item.href}
                    className="    z-10 font-[300] first-letter:uppercase hover:text-first-accent-color"
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationBar;
