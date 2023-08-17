import React from "react";
import { BsCodeSlash } from "react-icons/bs";

const Resume1 = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase flex items-center">
          <BsCodeSlash />
          <span className="ml-2">Language</span>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
      </div>
    </div>
  );
};

export default Resume1;
