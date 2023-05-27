import { AiFillCode, AiFillHtml5 } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsBootstrapFill, BsGit } from "react-icons/bs";
import { DiCss3Full, DiJavascript1, DiMongodb, DiSass } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiPostgresql,
  SiThealgorithms,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
export const linkArr = [
  { link: "home", id: "main-page" },
  { link: "service", id: "service" },
  { link: "about", id: "about" },
  { link: "portfolio", id: "projects-home" },
  { link: "contact", id: "contact" },
  { link: "reviews", id: "testimonials" },
  { link: "experience", id: "experience" },
];

export const botArr = [
  {
    id: 0,
    question: " ",
    ans: [
      "hi, I am Mahmoud's Bot 😊",
      "I just do Mahmoud's work.",
      "How can I help you",
    ],
  },
  {
    id: 1,
    question: "👋 I just need to say Hello.",
    ans: ["Hello There 😊.", "Do you enjoy my portfolio ?"],
  },
  {
    id: 2,
    question: "Tell me about your most challenging project ?",
    ans: [
      "my most challenging project is my e-commerce app.",
      "the reason is it was my first time using Graphql and Apollo.",
      "but it was interesting for me.",
    ],
  },
  {
    id: 3,
    question: "What technologies and programming languages ​​are you good at?",
    ans: [
      "first I want to show that I'm an Engineer.but I didn't find my passion at that carrer.",
      "so ,I looked for a career I like and I find this at web development.",
      "as a MERN Stack I am good in both frontend and backend.",
      "I am good at frontend,I am good at HTML5,CSS3,SASS,React,Vanila JAVASCRIPT.",
      "for React I am good with usibg alot for package such as Apollo,React-hook-form ,react-router-dom , redux-Toolki ,query-client and the most prefered package for me Framer Motion ",
      " In Backend I am good at express ,Graphql,RestFul Api ,JWT,I need to increase my skills at node's treatment with fileSystem.",
      "I am good for both PostgreSQL and MongoDB including Mongoose",
    ],
  },
  {
    id: 4,
    question: "What are your next plans ?",
    ans: [
      "This is my upcoming plan.",
      "I need to increase my Framer-Motion skills",
      "I will start studing ThreeJs",
      "finally start Data Structure.",
    ],
  },
];

export const skillsArr = [
  {
    head: "the decision to learn web development",
    date: "may 2022",
    clr: "var(--third)",
    Icon: BiCodeAlt,
    content: [
      "Shifting from electrical engineering to web development was Life-altering.",
      "Web development fascinated me with its blend of creativity and problem-solving.",
      "My previous exposure to C++ in college made web development appealing.",
      "Web development allowed me to channel creativity and technical expertise.",
    ],
  },
  {
    head: "the start to learn",
    date: "may 2022 - june 2022",

    Icon: DiCss3Full,
    clr: "#2965f1",
    content: [
      "By the end of June, I completed the EGFWD Web Development challenger track powered by Udacity.",
      "Explored CSS and HTML fundamentals with practical exercises.",
      "Gained proficiency in building responsive and visually appealing websites.",
      "Acquired a solid foundation in WordPress development and customization.",
    ],
    link: "https://drive.google.com/file/d/1zzGQXqoIY2jwguCvOnfchWoKsR7wJfR2/view",
    linkDes: " Web Development challenger track.",
  },

  {
    head: "going in depth in JavaScript",
    date: "jun 2022 - sep 2022",
    clr: "#f7df1e",
    Icon: DiJavascript1,
    content: [
      "In the middle of September, I completed the Professional Front-End Web Development program powered by Udacity.",
      "Explored JavaScript in-depth, taking dedicated time to strengthen my programming skills.",
      "Built numerous personal projects to reinforce my proficiency in JavaScript.",
      "Acquired advanced knowledge and techniques in front-end web development.",
    ],
    link: "https://drive.google.com/file/d/1eOlSm3HfsHZWZbvmTI7eUp_8qY1XT6sT/view",
    linkDes: " Professional Front-End program.",
  },
  {
    head: "start Backend Development Journey",
    date: "oct 2022 - jan 2023",
    clr: " #339933",
    Icon: IoLogoNodejs,
    content: [
      "At the middle of January, I completed the Advanced Full-Stack Web Development program powered by Udacity.",
      "Explored Node.js, Express, PostgreSQL, and TypeScript in-depth.",
      "Built three significant projects , including two APIs and a full-stack project using TypeScript.",
      "Demonstrated proficiency in deploying full-stack projects on AWS.",
      "Acquired advanced skills in server-side development, database management, and TypeScript.",
      "Implemented robust APIs with Express and integrated them with PostgreSQL databases.",
      "Mastered the use of TypeScript for building scalable and maintainable web applications.",
    ],
    link: "https://drive.google.com/file/d/1pzpOyIutGuuWckFfQ20r9-O6fqIr3NAE/view",
    linkDes: " Advanced Full-Stack Web Development program.",
  },
  {
    head: "Main Portfolio Projects",
    date: "jan 2023 - Present ",
    clr: "#61dafb",
    Icon: GrReactjs,
    content: [
      "Worked on a series of main portfolio projects, showcasing my backend development skills.",
      "Implemented various functionalities and features using server-side technologies.",
      "Collaborated with a team to deliver high-quality and scalable web applications.",
      "Utilized technologies like Node.js, Express, databases, and APIs to build robust backends.",
      `For more detailed information about these projects, please refer to the "Projects" section below.`,
      "Built robust APIs using GraphQL to enhance data querying and manipulation.",
      "Utilized MongoDB for efficient and scalable database management.",
      "Developed dynamic and interactive user interfaces using React.",
      "Strengthened my skills in TypeScript, creating more robust and type-safe applications.",
    ],
  },
];

export const skillsIconsArr = [
  {
    backend: [
      { clr: " #339933", Icon: IoLogoNodejs, name: "node js" },
      {
        Icon: SiExpress,
        clr: "#fff",
        name: "ExpressJs",
      },
      {
        Icon: SiGraphql,
        clr: "#E10098",
        name: "GraphQL",
      },
      { name: "PostgresQl", Icon: SiPostgresql, clr: "#336791" },
      {
        name: "MongoDb",

        Icon: DiMongodb,
        clr: "#4DB33D",
      },
      {
        name: "RestFul API",
        clr: "black",
        Icon: TbApi,
      },
    ],
  },
  {
    frontend: [
      {
        name: "HTML 5",
        clr: "#E34F26",
        Icon: AiFillHtml5,
      },
      { Icon: DiCss3Full, clr: "#2965f1", name: "CSS3" },
      { clr: "#f7df1e", Icon: DiJavascript1, name: "JavaScript" },
      { clr: "#61dafb", Icon: GrReactjs, name: "ReactJS" },
      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      { clr: "#563d7c", Icon: BsBootstrapFill, name: "BootStrap" },
      { clr: "black", Icon: SiThealgorithms, name: "JavaScript Algorism" },
    ],
  },
  {
    essentials: [
      { clr: "#007ACC", Icon: SiTypescript, name: "TypeScript" },
      { clr: "#F05032", Icon: BsGit, name: "Git" },
    ],
  },
];
