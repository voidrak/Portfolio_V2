import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useAnimationControls,
} from "framer-motion";

const Cards2 = () => {
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
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animationControls = useAnimationControls();

  const leftCardVariants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const RightCardVariants = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        // delay: 1,
      },
    },
  };

  // Trigger the animation when the element becomes visible
  useEffect(() => {
    if (isInView) {
      animationControls.start("onscreen");
    }
  }, [isInView]);

  const mappedCards = projectCards.map((item, index) => (
    <motion.div
      key={index}
      className=" debug grid  min-h-[60vh] grid-cols-2 items-center gap-x-8  py-24"
    >
      <div className={`${index % 2 === 0 ? "order-2" : ""}  `}>
        <h1 className=" py-2 text-5xl font-bold text-text-color-bold">
          {item.title}
        </h1>
        <p className="max-w-[490px] text-xl text-text-color-light ">
          {item.description}
        </p>
      </div>
      <motion.div
        ref={ref}
        variants={leftCardVariants}
        initial="offscreen"
        animate={animationControls}
        // viewport={({ amount: "0.95" }, { once: true })}
        className=""
      >
        <img src={item.imgSrc} alt="" className=" " />
      </motion.div>
    </motion.div>
  ));

  return <div>{mappedCards}</div>;
};

export default Cards2;
