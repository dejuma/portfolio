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
      "Developed development pipelines within an Agile framework, documenting and specifying them to meet project requirements.",
      "Conducted research on appropriate technologies and de-risked concepts in sandboxes, collaborating with DevOps engineers for review.",
      "Prioritized tasks by liaising with the local DevOps engineer.",
      "Created and iteratively improved simple pipelines, working closely with development teams to ensure reliable and robust solutions.",
      "Extracted relevant metrics from the build pipeline for the software product.",
      "Virtualized a legacy development pipeline and successfully deployed it on a project, demonstrating technical proficiency to the development team.",
      "Demonstrated ownership and accountability for assigned work areas.",
    ],
  },
  {
    date: "Sept 2021 - August 2022",
    position: "Graduate Engineer - Software/System Engineer",
    company: "THALES",
    description: [
      "Ground truth data in a video file",
      "Create frontend using Django to create easy access to data.",
      "Identify issues and create solutions to them to help the sector.",
    ],
  },
  {
    date: "March 2021 - Sept 2021",
    position: "Test Analyst",
    company: "TYSY MANAGED SERVICES EMEA",
    description: [
      "Analysing and interpreting business requirements to formulate comprehensive testing strategies.",
      "Breaking down complex tasks to test applications, IVR systems, and telephony systems based on Procedure, Requirement, and Solution Documents.",
      "Collaborating with the team to brainstorm innovative approaches for tackling new testing challenges.",
      "Developing end-to-end test cases and scripts to ensure comprehensive test coverage.",
      "Conducting manual tests and documenting test outcomes, including any incidents identified.",
      "Managing defects and issues raised during testing, ensuring proper tracking and resolution.",
      "Providing valuable feedback and recommendations to the TMS Test Team and Project Team to improve product quality and processes.",
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
