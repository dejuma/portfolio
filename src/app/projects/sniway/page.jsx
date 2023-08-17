import React from "react";
import Image from "next/image";
import sniwayImg from "/public/assets/sniway.png";
import { RiRadioButtonFill } from "react-icons/ri";

const Sniway = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={sniwayImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-grey-100 z-10 p-2">
          <h2 className="py-2">Sniway Entertainment</h2>
          <h3> React JS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase">Project</p>
          <h2>Overview</h2>
          <p className="py-2">🚀 Exciting News! 🚀</p>{" "}
          <p className="py-2">
            I&apos;m thrilled to share that I had the incredible opportunity to
            collaborate with Sniway Entertainment, the visionary artist
            management company, to bring their digital presence to the
            forefront! 🎉 Introducing the new and enhanced Sniway Entertainment
            website, powered by the capabilities of React JS and elegantly
            hosted on Vercel. 🌐
          </p>{" "}
          <p className="py-2">
            🎵 Now, connecting with your favorite artists is easier and more
            immersive than ever. With this cutting-edge platform, you can delve
            into the artists&apos; portfolios, discographies, and upcoming
            events, all at your fingertips. 🎶
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sniway;
