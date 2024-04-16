import React from "react";
import Reveal from "../../utils/Reveal";

const AboutSection = () => {
  return (
    <div>
      {/* <p className="short">I am Nahom Abraham, a web developer. </p>
      <p className="mid-long">
        I'm Nahom Abraham, a web developer and software engineering student at
        Kombolcha Institute of Technology. My web development journey started in
        2022, always eager to learn new tech..
      </p>
      <p className="medium">
        I'm Nahom Abraham, a web developer and software engineering student at
        Kombolcha Institute of Technology. Since 2022, I've been designing and
        developing websites, always striving to learn and improve in the dynamic
        world of technology. Currently, I'm working with React and Tailwind
      </p> */}
      <Reveal>
        <h1 className="py-4 text-4xl font-bold text-white ">ABOUT ME</h1>
      </Reveal>
      <p className="long py-4 text-white">
        I'm Nahom Abraham, a web developer and software engineering student at
        Kombolcha Institute of Technology. My passion for web development began
        in 2022, and I've been designing and developing websites ever since.
        Coding, for me, is more than just a tool – it's a way to express myself.
        Since my first HTML "Hello World" program, I've felt like I've found my
        comfort zone. The thrill of creating something new solidified this.
        Beyond code, I enjoy music and football.
      </p>
    </div>
  );
};

export default AboutSection;
