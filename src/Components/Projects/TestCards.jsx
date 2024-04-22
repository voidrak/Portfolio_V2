import React, { useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const TestCards = ({ order }) => {
  const projectCards = [
    {
      index: 1,
      title: "Let's party",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatisid sed aperiam eaque debitis, mollitia ipsa error ipsam quasifugiat atque dolores amet libero?",
      imgSrc: "https://placehold.co/704x388",
    },
    {
      index: 2,
      title: "Let's party",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatisid sed aperiam eaque debitis, mollitia ipsa error ipsam quasifugiat atque dolores amet libero?",
      imgSrc: "https://placehold.co/704x388",
    },
    {
      index: 3,
      title: "Let's party",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatisid sed aperiam eaque debitis, mollitia ipsa error ipsam quasifugiat atque dolores amet libero?",
      imgSrc: "https://placehold.co/704x388",
    },
    {
      index: 4,
      title: "Let's party",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis velit aperiam nam? Voluptatem doloribus, perspiciatisid sed aperiam eaque debitis, mollitia ipsa error ipsam quasifugiat atque dolores amet libero?",
      imgSrc: "https://placehold.co/704x388",
    },
  ];

  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 0.7, 1], [800, 0, 0]);

  return (
    <div className=" debug   sticky top-[50px]   my-8  grid h-[90vh]     grid-cols-2 items-center gap-x-8  space-y-8 overflow-x-hidden overflow-y-scroll     py-24 scrollbar  scrollbar-thumb-gray-200 ">
      <div className={`${order % 2 === 0 ? "order-2" : ""}  `}>
        <h1 className=" py-2 text-5xl font-bold text-text-color-bold">
          {projectCards[1].title}
        </h1>
        <p className="max-w-[490px] text-xl text-text-color-light ">
          {projectCards[1].description}
        </p>
      </div>

      <motion.div
        style={{
          x: x,
        }}
        className=""
      >
        <img src={projectCards[1].imgSrc} alt="" className=" " />
      </motion.div>
    </div>
  );
};

export default TestCards;
