import React from "react";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="w-full py-40 flex items-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold mb-0 uppercase">Resume</h2>
        </div>
        <div className="grid gap-5 justify-center">
          <div className="col-span-4">
            {/* Experience Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-primary font-bold mb-0 text-[#E2C6BC]">
                  Experience
                </h2>
                {/* Download resume button */}
                {/* Note: Set the link href target to a PDF file within your project */}
                <Link
                  className="px-4 py-3 inline-flex items-center mt-4 text-white bg-blue-500  uppercase rounded hover:bg-blue-600 transition-colors"
                  href="/assets/docs/JOlesinCV.pdf"
                  download={"JOlesinCV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Link>
              </div>
              {/* Experience Card 1 */}
              <div className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]">
                <div className="card-body p-5">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mb-4">
                    <div className="bg-light p-4 rounded-xl mb-4 lg:mb-0">
                      <div className="text-primary font-bold mb-2">
                        2019 - Present
                      </div>
                      <div className="font-bold text-[#E2C6BC]">
                        Web Developer
                      </div>
                      <div className="text-muted">Stark Industries</div>
                      <div className="text-muted">Los Angeles, CA</div>
                    </div>
                    <div className="lg:ml-8">
                      <div className="text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus laudantium, voluptatem quis repellendus eaque
                        sit animi illo ipsam amet officiis corporis sed aliquam
                        non voluptate corrupti excepturi maxime porro fuga.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Card 2 */}
              <div className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]">
                <div className="card-body p-5">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mb-4">
                    <div className="bg-light p-4 rounded-xl mb-4 lg:mb-0">
                      <div className="text-primary font-bold mb-2">
                        2017 - 2019
                      </div>
                      <div className="font-bold text-[#E2C6BC]">
                        SEM Specialist
                      </div>
                      <div className="text-muted">Wayne Enterprises</div>
                      <div className="text-muted">Gotham City, NY</div>
                    </div>
                    <div className="lg:ml-8">
                      <div className="text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus laudantium, voluptatem quis repellendus eaque
                        sit animi illo ipsam amet officiis corporis sed aliquam
                        non voluptate corrupti excepturi maxime porro fuga.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Education Section */}
            <section>
              <h2 className="text-secondary font-bold mb-4 text-[#E2C6BC]">
                Education
              </h2>
              {/* Education Card 1 */}
              <div className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]">
                <div className="card-body p-5">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mb-4">
                    <div className="bg-light p-4 rounded-xl mb-4 lg:mb-0">
                      <div className="text-secondary font-bold mb-2">
                        2015 - 2017
                      </div>
                      <div className="mb-2">
                        <div className="font-bold text-[#E2C6BC]">
                          Barnett College
                        </div>
                        <div className="text-muted">Fairfield, NY</div>
                      </div>
                      <div className="italic text-gray-100">
                        <div className="text-muted">Master&apos;s</div>
                        <div className="text-muted">Web Development</div>
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <div className="text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus laudantium, voluptatem quis repellendus eaque
                        sit animi illo ipsam amet officiis corporis sed aliquam
                        non voluptate corrupti excepturi maxime porro fuga.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education Card 2 */}
              <div className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]">
                <div className="card-body p-5">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mb-4">
                    <div className="bg-light p-4 rounded-xl mb-4 lg:mb-0">
                      <div className="text-secondary font-bold mb-2">
                        2011 - 2015
                      </div>
                      <div className="mb-2">
                        <div className="font-bold text-[#E2C6BC]">ULA</div>
                        <div className="text-muted">Los Angeles, CA</div>
                      </div>
                      <div className="italic text-gray-100">
                        <div className="text-muted">Undergraduate</div>
                        <div className="text-muted">Computer Science</div>
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <div className="text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus laudantium, voluptatem quis repellendus eaque
                        sit animi illo ipsam amet officiis corporis sed aliquam
                        non voluptate corrupti excepturi maxime porro fuga.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Divider */}
            <div className="pb-5"></div>
            {/* Skills Section */}
            <section>
              {/* Skillset Card */}
              <div className="card shadow border-0 rounded-xl mb-5 bg-[#1F2937]">
                <div className="card-body p-5">
                  {/* Professional skills list */}
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
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        SEO/SEM Marketing
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Statistical Analysis
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Web Development
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Network Security
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Adobe Software Suite
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        User Interface Design
                      </div>
                    </div>
                  </div>
                  {/* Languages list */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent rounded-full p-2 mr-3">
                        <i className="bi bi-code-slash text-white"></i>
                      </div>
                      <h3 className="font-bold text-2xl text-[#E2C6BC]">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          Languages
                        </span>
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        HTML
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        CSS
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        JavaScript
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Python
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Ruby
                      </div>
                      <div className="bg-light rounded-lg p-4 h-full text-[#111827]">
                        Node.js
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
