import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLink from "../Shared/SocialLink";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MobileNav = ({ nav, handleNav, links, setNav }) => {
  return (
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
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <SocialLink
                href="https://www.linkedin.com/in/olesin/"
                icon={<FaLinkedinIn />}
                label="LinkedIn"
                target="_blank"
              />

              <SocialLink
                href="https://github.com/dejuma"
                icon={<FaGithub />}
                label="GitHub"
                target="_blank"
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
    </div>
  );
};

export default MobileNav;
