"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import links from "./Navbar-links";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavLinkClick = () => {
    setNav(false);
  };

  return (
    <div className="fixed w-full top-0 left-0 h-20 shadow-xl z-[100] transition-all duration-500">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          {" "}
          <Image src="/assets/logo.png" width={125} height={50} alt="logo" />
        </Link>
        <ul className="hidden md:flex space-x-5">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className="text-white font-medium text-lg ml-10 uppercase hover:border-b"
                href=""
                onClick={handleNavLinkClick} // Close the sidebar on link click
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {nav && (
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-1000">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/logo-side.png"
                width={87}
                height={35}
                alt="logo"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets Build something awesome
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((link) => (
                <li className="py-4 text-sm" key={link.id}>
                  <Link href={link.url} onClick={handleNavLinkClick}>
                    {/* Close the sidebar on link click */}
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {" "}
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 2-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/olesin/"
                    target="blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/dejuma" target="blank">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/olesin/"
                    target="blank"
                  >
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/dejuma" target="blank">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
