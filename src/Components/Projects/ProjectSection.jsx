import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "../../utils/Reveal";
const ProjectSection = () => {
  return (
    <div>
      <Reveal>
        <h1 className="bg-transparent pb-8 text-4xl font-bold uppercase text-text-color-bold">
          Projects
        </h1>
      </Reveal>
      <motion.div
        className={`scrollbar scrollbar-thumb-gray-200   scrollbar-thumb-rounded-full  relative my-16   h-[90vh] space-y-8 overflow-y-scroll `}
      >
        <div className=" overscroll-contain *:h-[50vh] ">
          <div className="grid grid-cols-2 place-content-between  items-center  gap-x-8">
            <div className="">
              <img src="https://placehold.co/704x388" alt="" className="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold text-text-color-bold">
                Let's party
              </h1>
              <p className="max-w-[490px] text-xl text-text-color-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatis
                id sed aperiam eaque debitis, mollitia ipsa error ipsam quasi
                fugiat atque dolores amet libero?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 place-content-between  items-center  gap-x-8">
            <div className="order-2">
              <img src="https://placehold.co/704x388" alt="" className="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold text-text-color-bold">
                Let's party
              </h1>
              <p className="max-w-[490px] text-xl text-text-color-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatis
                id sed aperiam eaque debitis, mollitia ipsa error ipsam quasi
                fugiat atque dolores amet libero?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-content-between  items-center  gap-x-8">
            <div className="">
              <img src="https://placehold.co/704x388" alt="" className="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold text-text-color-bold">
                Let's party
              </h1>
              <p className="max-w-[490px] text-xl text-text-color-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatis
                id sed aperiam eaque debitis, mollitia ipsa error ipsam quasi
                fugiat atque dolores amet libero?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-content-between  items-center  gap-x-8">
            <div className="order-2">
              <img src="https://placehold.co/704x388" alt="" className="" />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold text-text-color-bold">
                Let's party
              </h1>
              <p className="max-w-[490px] text-xl text-text-color-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatis
                id sed aperiam eaque debitis, mollitia ipsa error ipsam quasi
                fugiat atque dolores amet libero?
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
