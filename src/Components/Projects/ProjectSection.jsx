import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import projectData from "../../data/projectData";
import Reveal from "../../utils/Reveal";

const ProjectSection = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="main relative mb-[100vh] py-32">
      <Reveal>
        <h1 className="bg-transparent pb-48 text-4xl font-bold uppercase text-text-color-bold">
          Projects
        </h1>
      </Reveal>
      <div ref={container} className="main">
        {projectData.map((project, index) => {
          const targetScale = 1 - (projectData.length - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              project={project}
              i={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, i, progress, targetScale, range }) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="cardContainer sticky top-7 flex h-[90vh] translate-x-1 items-center justify-center"
    >
      <motion.div
        className={`card relative mx-auto flex  min-w-[320px] max-w-[1000px]  translate-x-2 flex-col rounded-2xl md:min-h-[600px]`}
        style={{
          scale,
          backgroundColor: project.color,
          top: `calc(-10% +  ${i * 50}px)`,
        }}
      >
        <h2 className="my-2 text-center text-[18px] font-bold sm:text-[28px] ">
          {project.title}
        </h2>
        <div className="body grid items-center gap-y-4 px-2">
          <div className="imageContainer relative mx-auto overflow-hidden rounded-lg">
            <motion.img
              src={project.imgSrc}
              style={{ scale: imageScale }}
              alt="project image"
              className="h-full w-full"
            />
          </div>
          <div className="description">
            <p className="text-base first-letter:text-[28px] sm:hidden">
              {project.shortDescription}
            </p>
            <p className="hidden text-base first-letter:text-[28px] sm:block">
              {project.description}
            </p>
            <div className="my-2 ml-4 flex items-center gap-x-4 font-semibold ">
              <div className="flex items-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="cursor-pointer text-[14px] underline underline-offset-2"
                >
                  Demo
                </a>
              </div>
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-2 cursor-pointer text-[14px] underline underline-offset-2"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
