import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion, useCycle } from "framer-motion";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useCycle(false, true);
  const navBarLink = [
    { title: "About", href: "#" },
    { title: "Skills", href: "#" },
    { title: "Project", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  return (
    <div className="fixed left-[30px] top-0 z-[9999] mt-4 cursor-pointer bg-transparent text-white  lg:top-[50px] ">
      <div
        className="bg-transparent"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        {isNavOpen ? (
          <IoCloseSharp size={60} className="bg-transparent" />
        ) : (
          <GiHamburgerMenu size={50} className="bg-transparent" />
        )}
      </div>
      <AnimatePresence>
        {isNavOpen && (
          <motion.aside
            initial={{ x: -100 }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: -100, transition: { delay: 0.7, duration: 0.3 } }}
            className="mt-16  origin-left   bg-transparent "
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="grid space-y-10   bg-transparent"
            >
              {navBarLink.map((item, index) => (
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: "#64ffda" }}
                  key={index}
                  href={item.href}
                  className="bg-transparent text-4xl"
                >
                  {item.title}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
