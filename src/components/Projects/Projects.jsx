import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectData from "./ProjectData";

const ProjectsContent = () => {
  return (
    <div className="w-full min-h-94vh flex flex-col">
      {" "}
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full flex-grow">
        {" "}
        <p className="uppercase text-xl pt-20 tracking-widest text-[#E2C6BC]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {ProjectData.map((val, index) => {
            return (
              <ProjectItem
                key={index}
                imgsrc={val.imgsrc}
                alt={val.alt}
                title={val.title}
                text={val.text}
                source={val.source}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
