import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectData from "./ProjectData";

const ProjectsContent = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        {/* <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 border-0 rounded" />
        </h1> */}
        <p className="uppercase text-xl tracking-widest text-[#E2C6BC]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
