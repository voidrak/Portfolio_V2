import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { MacbookScroll } from "../ui/macbook-scroll";
const HeroSection = () => {
  const divRef = useRef(null);
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const mousemove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const moveDiv = (x, y) => {
    if (divRef.current) {
      gsap.set(divRef.current, { x, y, xPercent: -50, yPercent: -50 });
    }
  };

  const animate = () => {
    moveDiv(mouse.current.x, mouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div id="home" className="  relative cursor-none">
      <MacbookScroll />

      <a
        ref={divRef}
        href="#contact"
        className="  absolute left-0  top-0 z-40  hidden  h-[120px] w-[120px] cursor-none items-center justify-center rounded-full bg-black font-bold text-text-color-bold md:flex "
      >
        Contact Me
      </a>
    </div>
  );
};

export default HeroSection;
