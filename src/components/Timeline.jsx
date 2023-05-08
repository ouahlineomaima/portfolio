import React from "react";
import ProjectCard from "./ProjectCard";

const Timeline = ({ projects }) => {
  return (
    <div className="flex flex-row relative mt-10 mb-10 max-w-[100vw] object-scale-down">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} maxWidth={`${100 / projects.length}%`} />
        ))}
      <hr className="absolute w-full border-t-2 border-gray-300 top-1/2" />
    </div>
  );
};

export default Timeline;
