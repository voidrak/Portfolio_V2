import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticAnimation from "./MagneticAnimation";

const ButtonAnimation = ({
  children,
  backgroundColor = "#51d2b9",
  ...attributes
}) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const handleMouesEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const handleMouesLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <div
      onMouseEnter={(e) => {
        handleMouesEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouesLeave(e);
      }}
      className="relative my-4 ml-2 flex w-[85%]  -translate-y-16 items-center  justify-center overflow-hidden rounded-[3em] border border-[rgb(136,136,136)] px-[40px] py-2 hover:text-black min-[375px]:px-[60px] lg:-translate-y-0  lg:py-0  "
      // style={{ backgroundColor }}
      {...attributes}
    >
      {children}
      <div
        ref={circle}
        className="circle z absolute top-[100%] h-[150%] w-[100%] rounded-[50%] "
        style={{ backgroundColor }}
      ></div>
    </div>
  );
};

export default ButtonAnimation;
