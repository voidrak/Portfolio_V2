import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import projectData from "../../data/projectData";
import Reveal from "../../utils/Reveal";

const ProjectSection = () => {
  const containerRef = useRef(null);

  return (
    <div className=" main    relative mb-[100vh] mt-[50vh] py-32 ">
      <Reveal>
        <h1 className=" bg-transparent text-4xl  font-bold uppercase text-text-color-bold">
          Projects
        </h1>
      </Reveal>
      {projectData.map((project) => (
        <div
          ref={containerRef}
          className="cardContainer sticky top-0 flex h-[90vh] translate-x-1 items-center justify-center "
        >
          <div
            className={`card relative mx-auto flex   min-w-[320px] max-w-[1000px] translate-x-2  flex-col rounded-2xl    `}
            style={{ backgroundColor: project.color }}
          >
            <h2 className="my-2  text-center text-[18px] font-bold sm:text-[28px] ">
              {project.title}
            </h2>
            <div className="body grid items-center   gap-y-4  px-2     ">
              <div className="imageContainer relative   mx-auto   overflow-hidden rounded-lg   ">
                <motion.img
                  src={project.imgSrc}
                  alt="project image"
                  className="h-full w-full  "
                />
              </div>

              <div className="description      ">
                <p className="  text-base first-letter:text-[28px] sm:hidden  ">
                  {project.shortDescription}
                </p>
                <p className="  hidden text-base first-letter:text-[28px] sm:block  ">
                  {project.description}
                </p>
                <div className="my-2 ml-4 flex items-center gap-x-4 font-semibold ">
                  <div className=" flex items-center  ">
                    <a
                      href={project.link}
                      target="_blank"
                      className="  cursor-pointer  text-[14px] underline underline-offset-2 "
                    >
                      Demo
                    </a>
                  </div>
                  <div className="">
                    <a
                      href={project.link}
                      target="_blank"
                      className=" mt-2 cursor-pointer  text-[14px] underline underline-offset-2 "
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
