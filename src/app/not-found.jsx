import Link from "next/link";
import Image from "next/image";
import React from "react";
import links from "@/components/NavBar/Navbar-links";
import Navbar from "@/components/NavBar/Navbar";

const NotFound = () => {
  const imageHeight = 50;
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center space-y-6 mt-12">
        <Image
          src="/assets/404-illustration.png"
          alt="404 illustration"
          className="w-72"
          width={1200}
          height={1200}
        />
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold">Oops! Page not found</h2>
          <p className="text-lg">The requested resource could not be found.</p>
        </div>
        <Link
          href="/"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
