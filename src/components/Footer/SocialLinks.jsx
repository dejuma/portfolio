import React from "react";
import Link from "next/link";

const SocialLink = ({ href, icon, label }) => {
  return (
    <Link href={href} aria-label={label}>
      <div className="rounded-full p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600 transition duration-300">
        {icon}
      </div>
    </Link>
  );
};

export default SocialLink;
