import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });
  const mainControls = useAnimation();
  const revelVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={revelVariants}
      initial="hidden"
      animate={mainControls}
      className="bg-transparent"
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
