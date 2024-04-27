import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { twMerge } from "tailwind-merge";
import HeroSection from "./Components/HeroSection/HeroSection";
import { TracingBeam } from "./Components/ui/tracing-beam";

import "./App.css";

import AboutSection from "./Components/AboutSection/AboutSection";
import ProjectSection from "./Components/Projects/ProjectSection";
import NavigationBar from "./Components/NavBar/NavigationBar";
import TechStack from "./Components/SkillSection/TechStack";
import ContactSection from "./Components/Contact/ContactSection";

const App = () => {
  return (
    <ReactLenis root>
      <>
        <HeroSection />
        <TracingBeam className="">
          <NavigationBar />
          <div className="relative mx-auto  ">
            <AboutSection />
            <ProjectSection />
            <TechStack />
          </div>
        </TracingBeam>
        {/* <CircleDivider /> */}
        <ContactSection />
      </>
    </ReactLenis>
  );
};

export default App;
