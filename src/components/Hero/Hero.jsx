import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Oluwadunsin</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer</h1>
        </div>
      </div>
    </div>
  );
};
