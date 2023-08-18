import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center mb-[-5px]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-gray-100">
            Hello, I&apos;m <span className="text-[#7C78FB]">Oluwadunsin</span>
          </h1>
          <h1 className="py-2 text-gray-100">A Software Engineer</h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            I am a Junior Software Engineer with a solid background in software
            development and testing. My expertise includes programming languages
            like Java, SQL, C++, Python, React.js, and HTML/CSS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/olesin/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 bg-[#e4e7ed] text-[#1f2937] cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>

            <Link href="https://github.com/dejuma" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 bg-[#e4e7ed] text-[#1f2937] cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>

            <Link href="mailto:info@olesin.me">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 bg-[#e4e7ed] text-[#1f2937] cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>

            <Link href="https://github.com/dejuma" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 bg-[#e4e7ed] text-[#1f2937] cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
