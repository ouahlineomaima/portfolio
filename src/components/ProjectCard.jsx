import React from "react";
import planet1 from '../assets/img/planets/planet 1.png'

const ProjectCard = ({ project, index, maxWidth }) => {
  const isEven = index % 2 === 0;
  const positionClass = isEven ? 'top' : 'bottom';

  return (
    <div className={`flex ${isEven ? 'flex-col mb-[21rem]' : 'flex-col mt-[21rem]'} items-center mx-10 border-2 border-gray-300 rounded p-3`} style={{ maxWidth }}>
      <div className="flex-shrink-0 w-24 h-24  flex items-center justify-center">
        <img src={planet1} alt="" />
      </div>
      <div className={`mt-4  ${positionClass} flex-1`}>
        <h3 className="font-bold text-lg mb-2 ">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.shortDescription}</p>
        <p className="text-gray-700 mb-4">{project.tools}</p>
        <p className="text-gray-700 mb-4">{project.time}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">View Details...</a>
      </div>
    </div>
  );
};

export default ProjectCard;
