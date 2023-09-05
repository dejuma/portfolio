import React from "react";
import Link from "next/link";

import SocialLink from "./SocialLinks";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 lg:mb-0">
          <p className="text-lg font-semibold">© 2023 | Oluwadunsin Olesin</p>
          <p className="text-center text-gray-400 text-sm lg:block sm:block md:block xl:block 2xl:block">
            Built using Next.js and Tailwind CSS
          </p>
        </div>
        <div className="flex space-x-4">
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
    </footer>
  );
};

export default Footer;
