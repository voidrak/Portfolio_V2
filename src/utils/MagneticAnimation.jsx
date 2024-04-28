import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const MagneticAnimation = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = 0.5 * (clientX - (left + width / 2));
    const y = 0.5 * (clientY - (top + width / 2));
    setPosition({ x, y });
  };
  const mouseLeave = (e) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <Reveal>
      <motion.div
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        onClick={() => {
          console.log("object");
        }}
        ref={ref}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </Reveal>
  );
};

export default MagneticAnimation;
