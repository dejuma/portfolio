"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import links from "./Navbar-links";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#111827");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/projects/")) {
      setNavBg("transparent");
    } else {
      setNavBg("#111827");
    }
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}`, transition: "0.3s ease" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
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
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="md:hidden text-black">
          <AiOutlineMenu color="white" size={30} />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/logo-side.png"
                  width={87}
                  height={35}
                  alt="logo"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  text-black"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-[#1f2937] ">
                Lets Build something awseome
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((link) => (
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937]"
                  key={link.id}
                >
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {" "}
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 2-full text-[#1f2937] sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/olesin/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/dejuma" target="_blank">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/olesin/"
                    target="_blank"
                  >
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/dejuma" target="_blank">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
