import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Image
            src="/assets/404-illustration.png"
            alt="404 illustration"
            className="w-72"
            width={1200}
            height={1200}
          />
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mt-0">Oops! Page not found</h2>
            <p className="text-lg text-gray-300">
              The requested paged could not be found.
            </p>
          </div>
          <Link
            className="block px-4 py-2 mt-4 text-white bg-blue-500  uppercase rounded hover:bg-blue-600 transition-colors"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
