import React from "react";
import Link from "next/link";

const DesktopNav = ({ links }) => {
  return (
    <nav>
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
    </nav>
  );
};

export default DesktopNav;
