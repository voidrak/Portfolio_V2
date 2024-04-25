import React, { useEffect, useRef } from "react";
import Reveal from "../../utils/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";
const TechStack = () => {
  const ref = useRef(null);
  const controls = useAnimation();
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
    <div className=" w-full pb-[50vh]  ">
      <Reveal>
        <div className="    relative mx-auto w-[250px] bg-transparent  pb-24  text-4xl font-bold text-text-color-bold  ">
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
      <div className="">
        <div className="">
          <div className="">
            <h1 className="text-text-color-bold"> Languages</h1>
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
