import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isInText }) => {
  const size = isInText ? 300 : 35;

  const circle = useRef(null);
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const moveCircle = (x, y) => {
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    }
  };

  const animate = () => {
    moveCircle(mouse.current.x, mouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div
      ref={circle}
      style={{
        width: size,
        height: size,
      }}
      className="cursor pointer-events-none   fixed left-0 top-0 hidden rounded-full    bg-red-500 mix-blend-difference md:block"
    />
  );
};

export default Cursor;
