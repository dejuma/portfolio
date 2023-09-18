import React from "react";
import Link from "next/link";

const SocialLink = ({ href, icon, label }) => {
  return (
    <Link href={href} aria-label={label}>
      <div className="rounded-full shadow-lg shadow-gray-400 p-6 bg-[#e4e7ed] text-[#1f2937] cursor-pointer hover:scale-110 ease-in duration-300">
        {icon}
      </div>
    </Link>
  );
};

export default SocialLink;
