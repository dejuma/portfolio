"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import links from "./Navbar-links";
import SocialLink from "../Shared/SocialLink";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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
        {/* Use the DesktopNav component for the main navigation */}
        <DesktopNav links={links} />

        <div onClick={handleNav} className="md:hidden text-black">
          <AiOutlineMenu color="white" size={30} />
        </div>
      </div>
      {/* Use the MobileNav component for the mobile menu */}
      <MobileNav
        nav={nav}
        handleNav={handleNav}
        links={links}
        setNav={setNav}
      />
    </div>
  );
};

export default Navbar;
