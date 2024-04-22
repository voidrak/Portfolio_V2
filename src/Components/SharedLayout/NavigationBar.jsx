import React, { useState } from "react";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navBarLink = [
    { title: "About", href: "#" },
    { title: "Skills", href: "#" },
    { title: "Project", href: "#" },
    { title: "Contact", href: "#" },
  ];
  return (
    <div className="fixed right-0 top-0 z-[9999] ">
      <div
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className=" fixed right-2 top-0 m-[20px] flex h-[80px]  w-[80px] items-center justify-center rounded-full bg-first-accent-color "
      >
        <div
          className={`w-full bg-transparent before:relative before:top-[5px] before:m-auto  before:block before:h-[2px] before:w-[40%] before:bg-white after:relative after:top-[-5px]  after:m-auto after:block after:h-[2px] after:w-[40%] after:bg-white ${isNavOpen ? "before:top-[-1px] before:rotate-[-45deg]  after:rotate-[45deg]" : ""}  `}
        ></div>
      </div>
      {isNavOpen && (
        <div className="h-[100vh] w-[100vw] max-w-[481px] bg-black  "></div>
      )}
    </div>
  );
};

export default NavigationBar;
