import React from "react";
import { motion } from "framer-motion";
const SVGComponent = () => {
  const letterVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 3 },
    },
  };
  const pathVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 1 },
    },
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className=" size-[250px]"
      >
        <g>
          <motion.g
            variants={letterVariants}
            initial="initial"
            animate="animate"
            id="B"
            transform="translate(31, 33)"
            fill="#64FFDA"
            fontFamily="system-ui,Calibre-Medium, Calibre,sans-serif"
            fontSize={50}
            fontWeight={400}
            letterSpacing={4.16666603}
          >
            <text>
              <tspan x={0.141666985} y={33}>
                {"N"}
              </tspan>
            </text>
          </motion.g>
          <motion.path
            variants={pathVariants}
            initial="initial"
            animate="animate"
            stroke="#64FFDA"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5          L 11, 27          L 11, 72          L 50, 95          L 89, 73          L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
};

export default SVGComponent;
