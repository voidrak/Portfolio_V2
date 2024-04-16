import React, { useEffect, useState } from "react";
import Reveal from "../../utils/Reveal";

const AboutSection = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [aboutText, setAboutText] = useState(
    "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. Since 2022, I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind",
  );
  useEffect(() => {
    console.log(sliderValue);

    let bioText = "";
    switch (sliderValue) {
      case 1: {
        bioText = "I am Nahom Abraham, a web developer.";
        break;
      }
      case 2: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. My web development journey started in 2022, always eager to learn new tech";
        break;
      }
      case 3: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. Since 2022, I've been designing and developing websites, always striving to learn and improve in the dynamic world of technology. Currently, I'm working with React and Tailwind";
        break;
      }
      case 4: {
        bioText =
          "I'm Nahom Abraham, a web developer and software engineering student at Kombolcha Institute of Technology. My passion for web development began in 2022, and I've been designing and developing websites ever since. Coding, for me, is more than just a tool – it's a way to express myself. Since my first HTML 'Hello World' program, I've felt like I've found my comfort zone. The thrill of creating something new solidified this.Beyond code, I enjoy music and football.";
        break;
      }
      default:
        {
          bioText =
            "I'm Nahom Abraham, a web developer and software engineering student at Kombolch";
        }
        console.log(bioText);
        console.log(sliderValue);
        setAboutText(bioText);
    }
  }, [sliderValue]);

  return (
    <div className="mt-24">
      <Reveal>
        <h1 className="py-8 text-4xl font-bold text-text-color-bold ">
          ABOUT ME
        </h1>
      </Reveal>

      <div className="">
        <div className="">
          <label htmlFor="bio-length" className="text-xl text-text-color-bold ">
            bio length
          </label>
          <br />
          <input
            onChange={(e) => {
              setSliderValue(e.target.value);
            }}
            value={sliderValue}
            type="range"
            step="1"
            min="1"
            max="4"
            className="mt-4 w-[90%] max-w-[460px] cursor-pointer "
          />
        </div>
      </div>
      <p className="py-4 text-white">{aboutText}</p>
    </div>
  );
};

export default AboutSection;
