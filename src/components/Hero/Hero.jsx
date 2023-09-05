"use client";

import React from "react";
import Typewriter from "./Typewriter";
import SocialLink from "../Shared/SocialLink";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center mb-[-10rem]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-gray-100">
            Hello, I&apos;m{" "}
            <span className="text-[#7C78FB]">
              <Typewriter
                text="Oluwadunsin"
                initialDelay={300}
                loopDelay={2000}
              />
            </span>
          </h1>
          <h1 className="py-2 text-gray-100">A Software Engineer</h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            I am a Junior Software Engineer with a solid background in software
            development and testing. My expertise includes programming languages
            like Java, SQL, C++, Python, React.js, and HTML/CSS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <SocialLink
              href="https://www.linkedin.com/in/olesin/"
              icon={<FaLinkedinIn />}
              label="LinkedIn"
            />

            <SocialLink
              href="https://github.com/dejuma"
              icon={<FaGithub />}
              label="GitHub"
            />

            <SocialLink
              href="mailto:info@olesin.me"
              icon={<AiOutlineMail />}
              label="Mail"
            />

            <SocialLink
              href="/contact"
              icon={<BsFillPersonLinesFill />}
              label="Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
