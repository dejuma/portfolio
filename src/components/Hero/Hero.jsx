import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Junior Software Engineer with a solid background in software
            development and testing. My expertise includes programming languages
            like Java, SQL, C++, Python, React.js, and HTML/CSS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg showdow-grey-400 p-6 bg-[#ecf0f3] cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/olesin/" target="blank">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg showdow-grey-400 p-6 bg-[#ecf0f3] cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/dejuma" target="blank">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg showdow-grey-400 p-6 bg-[#ecf0f3] cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/olesin/" target="blank">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg showdow-grey-400 p-6 bg-[#ecf0f3] cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/dejuma" target="blank">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
