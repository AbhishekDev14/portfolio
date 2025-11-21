// Skills Section Logo's
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import javascriptLogo from "./assets/javascript.png";
import reactjsLogo from "./assets/reactjs.png";
import angularLogo from "./assets/angular.png";
import reduxLogo from "./assets/redux.png";
import nextjsLogo from "./assets/nextjs.png";
import tailwindcssLogo from "./assets/tailwindcss.png";
import materialuiLogo from "./assets/materialui.png";
import bootstrapLogo from "./assets/bootstrap.png";
import firebaseLogo from "./assets/firebase.png";
import typescriptLogo from "./assets/typescript.png";
import gitLogo from "./assets/git.png";
import githubLogo from "./assets/github.png";
import vscodeLogo from "./assets/vscode.png";
import postmanLogo from "./assets/postman.png";

// Experience Section Logo's
import accenture from "./assets/accenture-logo.png";
import xebia from "./assets/xebia-logo.png";
import knoldus from "./assets/knoldus-logo.png";

// Education Section Logo's
import akgec from "./assets/AKGEC_1_0.png";
import dams from "./assets/logo.png";
import kendriya from "./assets/kendriya-logo.svg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Java Script", logo: javascriptLogo },
      { name: "Type Script", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: accenture,
    role: "Pakaged App Dvelopment Senior Analyst",
    company: "Accenture",
    date: "December 2024 - May 2025",
    desc: "Developed responsive UI components using React, TypeScript, and Tailwind CSS; integrated REST APIs with optimized state updates and refactored screens into modular, reusable components to improve maintainability.",
  },
  {
    id: 1,
    img: xebia,
    role: "Junior Consultant",
    company: "Xebia",
    date: "January 2023 - October 2024",
    desc: "Built feature-rich interfaces using React, Material UI, and Context API/Redux; enhanced performance through lazy loading, memoization, and optimized renders; and implemented API-driven pages with Axios/fetch and clean routing structures.",
  },
  {
    id: 2,
    img: knoldus,
    role: "Software Consultant",
    company: "Knoldus Inc",
    date: "September 2021 - August 2022",
    desc: "Created interactive dashboards using ReactJS, React Router, and Material UI; improved UI performance by 15% through component-level optimizations; and enhanced Angular modules using TypeScript, Bootstrap, and REST APIs.",
  },
];

export const education = [
  {
    id: 0,
    img: akgec,
    school: "Ajay Kumar Garg Engineering College",
    date: "August 2019 - June 2021",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: dams,
    school: "Dayanand Academy of Management Studies",
    date: "August 2016 - June 2019",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: kendriya,
    school: "Kendriya Vidyalaya, Kanpur",
    date: "Apr 2014 - March 2015",
    degree: "CBSE(XII)",
  },
  {
    id: 3,
    img: kendriya,
    school: "Kendriya Vidyalaya, Kanpur",
    date: "Apr 2012 - March 2013",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Task Manager App (ReactJS)",
    description:
      "Built a CRUD-based task manager using React Hooks and Context API, with local-storage sync and a fully responsive UI styled using Tailwind CSS.",
  },
  {
    id: 1,
    title: "React Dashboard",
    description:
      "Developed a responsive dashboard with reusable Material UI widgets, optimized routing and layout performance, and improved UI through debugging and user feedback while actively participating in agile ceremonies.",
  },
  {
    id: 2,
    title: "Angular Web Application",
    description:
      "Expanded interactive Angular modules with API-integrated forms, translated wireframes into responsive pages, optimized state handling to reduce re-renders, and collaborated with stakeholders for high-quality delivery.",
  },
  {
    id: 3,
    title: "Loan Recovery Platform",
    description:
      "Designed Lightning Web Components for EMI tracking and agent scheduling, integrating real-time tracking and geolocation APIs for improved field operations.",
  },
];
