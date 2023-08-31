import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProjectItem = (props) => {
  const { imgsrc, alt, title, text, source } = props;

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={imgsrc}
        alt={alt}
      />
      {source ? ( // Check if source is available
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{text}</p>
          {source.startsWith("/") ? ( // Check if it's an internal link or external URL
            <Link href={source} target="_blank">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          ) : (
            <a href={source} target="_blank" rel="noopener noreferrer">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </a>
          )}
        </div>
      ) : (
        // Display "Coming Soon" when details are not available
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-2xl text-white tracking-wider text-center">
            Coming Soon
          </h3>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
