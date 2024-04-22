import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import Reveal from "../../utils/Reveal";
import Cards from "./ProjectCards";
import TestCards from "./TestCards";
import Cards2 from "./Cards2";
const ProjectSection = () => {
  return (
    <div className="sticky top-0 ">
      <Reveal>
        <h1 className="bg-transparent pb-4 text-4xl font-bold uppercase text-text-color-bold">
          Projects
        </h1>
      </Reveal>
      <motion.div
        className={`scrollbar-thumb-rounded-full    my-8  h-[90vh] space-y-8   overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-gray-200 `}
      >
        <div className=" relative cursor-pointer  overscroll-contain pb-24  *:h-[80vh]">
          {/* <Cards /> */}
          <Cards2 />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
