import React from "react";
import Link from "next/link";
import { experienceData, educationData, skillsData } from "./ResumeData";

import { AiOutlineFileText } from "react-icons/ai";

const Resume = () => {
  return (
    <div className="w-full py-10 lg:py-20 xl:py-40 flex items-center">
      <div className="max-w-7xl w-full h-full mx-auto p-2 justify-center">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold mb-0 uppercase">Resume</h2>
        </div>
        <div className="grid gap-5 justify-center lg:grid-cols-2 xl:grid-cols-4">
          <div className="col-span-4">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-primary font-bold mb-0 text-[#E2C6BC]">
                  Experience
                </h2>
                <Link
                  className="px-4 py-3 inline-flex items-center mt-4 text-white bg-blue-500 uppercase rounded hover:bg-blue-600 transition-colors"
                  href="/assets/docs/JOlesinCV.pdf"
                  download={"JOlesinCV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineFileText /> {/* Add the FontAwesome icon */}
                  Resume
                </Link>
              </div>
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]"
                >
                  <div className="card-body p-5">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mb-4">
                      <div className="bg-light p-4 rounded-xl mb-4 lg:w-40 lg:mb-0 w-full ">
                        <div className="text-primary font-bold mb-2">
                          {item.date}
                        </div>
                        <div className="font-bold text-[#E2C6BC]">
                          {item.position}
                        </div>
                        <div className="text-muted">{item.company}</div>
                      </div>
                      <div className="lg:ml-8 min-w-full lg:min-w-0">
                        {" "}
                        {/* Remove min-w for small screens */}
                        <ul className="list-disc pl-6">
                          {item.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <section>
              <h2 className="text-secondary font-bold mb-4 text-[#E2C6BC]">
                Education
              </h2>
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]"
                >
                  <div className="card-body p-5">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mb-4">
                      <div className="bg-light p-4 rounded-xl mb-4 lg:w-40 lg:mb-0 w-full">
                        <div className="text-primary font-bold mb-2">
                          {item.date}
                        </div>
                        <div className="mb-2">
                          <div className="font-bold text-[#E2C6BC]">
                            {item.school}
                          </div>
                        </div>
                        <div className="italic text-gray-100">
                          <div className="text-muted">{item.degreeType}</div>
                          <div className="text-muted">{item.degree}</div>
                        </div>
                      </div>
                      <div className="lg:ml-8">
                        <ul className="list-disc pl-6">
                          {item.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <section>
              <div className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]">
                <div className="card-body p-5">
                  <div className="mb-5">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent rounded-full p-2 mr-3">
                        <i className="bi bi-tools text-white"></i>
                      </div>
                      <h3 className="font-bold text-2xl text-[#E2C6BC]">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          Professional Skills
                        </span>
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {skillsData.professional.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-light rounded-lg p-4 h-full "
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent rounded-full p-2 mr-3">
                        <i className="bi bi-tools text-white"></i>
                      </div>
                      <h3 className="font-bold text-2xl text-[#E2C6BC]">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          Languages
                        </span>
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {skillsData.languages.map((language, index) => (
                        <div
                          key={index}
                          className="bg-light rounded-lg p-4 h-full flex items-center"
                        >
                          {language.icon}{" "}
                          <span className="ml-2">{language.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
