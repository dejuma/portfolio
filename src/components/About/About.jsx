import React from "react";
import Image from "next/image";
import aboutImg from "/public/assets/about.png";

const AboutContent = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center bg-[#111827]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#E2C6BC]">
            About
          </p>
          <h2 className="py-4 text-gray-100">Who I Am</h2>
          <p className="py-2">
            As a Junior Software Engineer with a solid background in software
            development and testing, I have approximately 3 years of experience
            working with front-end and back-end technologies. Proficient in
            programming languages such as Java, SQL, C++, Python (Django),
            Next.js and HTML/CSS (Tailwind). I am well-versed in Web Application
            Architecture, Software Design Principles, and Software Design
            Patterns. I have a strong interest in object-oriented programming,
            design patterns, functional programming, domain-driven design, and
            microservices.
          </p>
          <p className="py-2">
            I hold a degree in Software Engineering from Bournemouth University,
            where I gained expertise in databases, web programming, system
            design, software quality and testing, as well as software system
            modeling. My dissertation project involved website redevelopment for
            Crossways and Villages U3A, showcasing my skills in practical
            application.
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full rounded-xl h-auto m-auto shadow-xl shadow-gray-400 p-1 flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={aboutImg}
            alt="about"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
