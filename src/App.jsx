import React from "react";
import { twMerge } from "tailwind-merge";
import HeroSection from "./Components/HeroSection/HeroSection";
import { TracingBeam } from "./Components/ui/tracing-beam";

import "./App.css";
import NavBar from "./Components/SharedLayout/NavBar";
import AboutSection from "./Components/AboutSection/AboutSection";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TracingBeam className="">
        <NavBar />
        <div className="px-10">
          <AboutSection />
        </div>
      </TracingBeam>
    </div>
  );
};

export default App;
