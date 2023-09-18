// ResumeData.js
import {
  FaJava,
  FaDatabase,
  FaCode,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaLinux,
} from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";

export const experienceData = [
  {
    date: "Sept 2022 - Present",
    position: "Graduate Engineer - DevOps/Software IVVQ Testing",
    company: "THALES",
    description: [
      "Developed development pipelines within an Agile framework, documented and specified them to meet project requirements.",
      "Designed and implemented a modular and extensible CI framework, streamlining the development process and improving project efficiency and consistency.",
      "Prioritised tasks by collaborating with another DevOps engineer.",
      "Created and iteratively improved simple pipelines, working closely with development teams to ensure reliable and robust solutions.",
      "Developed a Python script automating project-specific CI pipeline creation, reducing manual setup efforts and ensuring reproducibility.",
      "Collaborated with cross-functional teams to gather requirements, define project scopes, and ensure the CI framework met diverse project needs.",
      "Established clear documentation and training materials, facilitating knowledge sharing and new team member onboarding."
    ],
  },
  {
    date: "Sept 2021 - August 2022",
    position: "Graduate Engineer - Software/System Engineer",
    company: "THALES",
    description: [
      "Ground-truthed drone data within video files to enhance data accuracy and reliability.",
      "Provided direct programming support to the Algorithm Engineer, contributing to the efficient development and optimisation of algorithms.",
      "Designed and developed a user-friendly frontend for streamlined data access, improving data utilisation across the organisation.",
      "Identified operational issues and devised effective solutions, increasing efficiency and effectiveness within the sector.",
      "Collaborated in software development within the architecture team, including architecture refinement, delivery of high-quality code with rigorous unit testing, and resolution of critical static analysis issues, ensuring robust and reliable software delivery"
    ],
  },
  {
    date: "March 2021 - Sept 2021",
    position: "Test Analyst",
    company: "TYSY MANAGED SERVICES EMEA",
    description: [
      "Analysed and interpreted business requirements to formulate comprehensive testing strategies.",
      "Devised testing strategies for applications, IVR and telephony systems based on Procedure, Requirement, and Solution Documents.",
      "Brainstormed innovative approaches with the team to address new testing challenges.",
      "Developed end-to-end test cases and scripts, ensuring comprehensive test coverage.",
      "Conducted manual tests and documented test outcomes, including incident identification.",
      "Managed defects and issues raised during testing, ensuring proper tracking and resolution.",
      "Provided valuable feedback and recommendations to the TMS Test and Project Team, leading to product quality and process improvements."
    ],
  },
  // Add more experience items...
];

export const educationData = [
  {
    date: "2015 - 2019",
    school: "Bournemouth University",
    degreeType: "Bachelor's",
    degree: "Software Engineering",
    description: [
      "Course units include: Databases, Web Programming, System Design, Software Quality and Testing, Management in Computing and Software System Modelling.",
      "Dissertation: Website Redevelopment for Crossways and Villages U3A",
    ],
  },
  // Add more education items...
];

export const skillsData = {
  professional: [
    "QA Analyst (QA Lead)",
    "Manual Testing",
    "Software IVVQ Testing",
  ],
  languages: [
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "C++", icon: <FaCode /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <BiLogoDjango /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <FaReact /> }, // You can change the icon as needed
    { name: "HTML & CSS", icon: <FaCss3Alt /> },
    { name: "Linux", icon: <FaLinux /> },
    // ... other languages
  ],
  // Add more skill categories...
};
