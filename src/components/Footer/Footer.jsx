import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto px-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-semibold">© 2023 | Oluwadunsin Olesin</p>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/olesin/" target="_blank">
              <div className="rounded-full p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600 transition duration-300">
                <FaLinkedinIn />
              </div>
            </Link>

            <Link href="https://github.com/dejuma" target="_blank">
              <div className="rounded-full p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600 transition duration-300">
                <FaGithub />
              </div>
            </Link>

            <Link href="mailto:info@olesin.me">
              <div className="rounded-full p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600 transition duration-300">
                <AiOutlineMail />
              </div>
            </Link>

            <Link href="/about">
              <div className="rounded-full p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600 transition duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm">
          Built using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
