import React, { useState, useEffect } from "react";
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
import SVGComponent from "./Components/ui/SVGComponent";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <SVGComponent />
  ) : (
    <ReactLenis root>
      <>
        <HeroSection />
        <TracingBeam className="">
          <NavigationBar />
          <div className="relative px-4  ">
            <AboutSection />
            <ProjectSection />
            <TechStack />
          </div>
        </TracingBeam>

        <ContactSection />
      </>
    </ReactLenis>
  );
};

export default App;
