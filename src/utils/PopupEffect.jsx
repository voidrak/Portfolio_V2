import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const PopupEffect = ({ children }) => {
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true, amount: "all" });
  const controls = useAnimation();
  const portalVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1, ease: [0.11, 0, 0.5, 0] },
    },
  };
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={mainRef}
      variants={portalVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default PopupEffect;
