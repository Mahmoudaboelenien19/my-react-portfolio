import { AiFillGithub, AiFillHtml5, AiOutlineWhatsApp } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { BsGit, BsStripe } from "react-icons/bs";
import { DiCss3Full, DiJavascript1, DiMongodb, DiSass } from "react-icons/di";
import { GrLinkedinOption, GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import typeScriptToDoImg from "../images/projects/frontend-todolist.jpg";
import MernToDoImg from "../images/projects/mern todo.jpg.jpg";
import CrudCastle from "../images/projects/crudCatle.jpg.jpg";
import Zimart from "../images/projects/zimart.jpg";
import wheatherEye from "../images/projects/wheatherEye.jpg.jpg";
import CashFlow from "../images/projects/cashFLow.jpg.jpg";
import {
  SiExpress,
  SiGraphql,
  SiPassport,
  SiPostgresql,
  SiThealgorithms,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandRedux } from "react-icons/tb";

import OOPSVG from "../../components/widgets/Svgs/OOPSVG";
import FigmaIcon from "../../components/widgets/Svgs/FigmaIcon";
import CLoudinarySvg from "../../components/widgets/Svgs/CLoudinarySvg";
import GmailSvg from "../../components/widgets/Svgs/GmailSvg";
export const linkArr = [
  { link: "home", id: "main-page" },
  { link: "services", id: "service" },
  { link: "portfolio", id: "projects-home" },
  { link: "about", id: "about" },
  { link: "experience", id: "experience" },
  // { link: "reviews", id: "testimonials" },
  { link: "contact", id: "contact" },
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
    date: "may - june 2022",

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
    date: "jun - sep 2022",
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
    date: "oct - jan 2023",
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
      { Icon: SiTailwindcss, clr: "#48C2F8", name: "tailwind css" },

      { clr: "#f7df1e", Icon: DiJavascript1, name: "JavaScript" },
      { clr: "#61dafb", Icon: GrReactjs, name: "ReactJS" },

      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      {
        clr: "black",
        Icon: SiThealgorithms,
        name: " Algorithm",
      },
      { clr: "var(--svg)", Icon: OOPSVG, name: "OOP" },
    ],
  },
  {
    essentials: [
      { clr: "#007ACC", Icon: SiTypescript, name: "TypeScript" },
      { Icon: TbBrandRedux, clr: "#7044B5", name: "Redux toolkit" },
      { clr: "#F05032", Icon: BsGit, name: "Git" },
      { clr: "", Icon: FigmaIcon, name: "figma" },
      { clr: "", Icon: CLoudinarySvg, name: "cloudinary" },
    ],
  },
];

export const projects = [
  {
    msgOne: "MERN App",
    msgTwo: "graphQL",
    head: "Zimart",
    img: Zimart,
    skillsUsed: [
      { clr: "#007ACC", Icon: SiTypescript, name: "TypeScript" },
      { clr: "#61dafb", Icon: GrReactjs, name: "ReactJS" },
      { Icon: TbBrandRedux, clr: "#7044B5", name: "Redux toolkit" },
      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      { clr: "#635BFF", name: "Stripe", Icon: BsStripe },
      { Icon: SiPassport, name: "PassportJS", clr: "var(--third)" },
      {
        name: "RestFul API",
        clr: "var(--third)",
        Icon: TbApi,
      },
      {
        Icon: SiGraphql,
        clr: "#E10098",
        name: "GraphQL",
      },

      {
        Icon: SiExpress,
        clr: "var(--third)",

        name: "ExpressJs",
      },
      {
        name: "MongoDb",
        Icon: DiMongodb,
        clr: "#4DB33D",
      },
    ],
    code: "https://github.com/Mahmoudaboelenien19/mern-graphql-E-commerce",
    demo: "https://zimart-3deh.onrender.com/",
    tags: ["MERN App", "graphQL", "Typescript", "sass"],
  },

  {
    tags: ["MERN App", "Typescript", "sass"],
    msgOne: "MERN App",
    msgTwo: "sass",
    head: "listify",
    img: MernToDoImg,
    skillsUsed: [
      { clr: "#007ACC", Icon: SiTypescript, name: "TypeScript" },
      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      { clr: "#61dafb", Icon: GrReactjs, name: "ReactJS" },
      { Icon: TbBrandRedux, clr: "#7044B5", name: "Redux toolkit" },

      {
        name: "RestFul API",
        clr: "var(--third)",
        Icon: TbApi,
      },

      {
        Icon: SiExpress,
        clr: "var(--third)",

        name: "ExpressJs",
      },
      {
        name: "MongoDb",
        Icon: DiMongodb,
        clr: "#4DB33D",
      },
    ],
    code: "https://github.com/Mahmoudaboelenien19/Mern-toDoList",
    demo: "https://mern-app-v44r.onrender.com/",
  },
  {
    tags: ["Javascript", "PostgreSQL"],

    msgOne: "Javascript",
    msgTwo: "PostgreSQL",
    head: "CrudCastle",
    img: CrudCastle,
    skillsUsed: [
      {
        name: "HTML 5",
        clr: "#E34F26",
        Icon: AiFillHtml5,
      },
      { Icon: DiCss3Full, clr: "#2965f1", name: "CSS3" },
      { clr: "#f7df1e", Icon: DiJavascript1, name: "JavaScript" },

      { clr: "var(--svg)", Icon: OOPSVG, name: "OOP" },
      {
        name: "RestFul API",
        clr: "var(--third)",
        Icon: TbApi,
      },
      { name: "PostgresQl", Icon: SiPostgresql, clr: "#336791" },

      {
        Icon: SiExpress,
        clr: "var(--third)",
        name: "ExpressJs",
      },
      { clr: " #339933", Icon: IoLogoNodejs, name: "node js" },
    ],
    code: "https://github.com/Mahmoudaboelenien19/cruds",
    demo: "https://crudcastle.onrender.com/",
  },

  {
    msgOne: "React",
    msgTwo: "Sass",
    head: "WeatherEye",
    tags: ["React", "sass"],
    img: wheatherEye,
    skillsUsed: [
      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      { clr: "#61dafb", Icon: GrReactjs, name: "ReactJS" },
    ],
    code: "https://github.com/Mahmoudaboelenien19/WeatherEye",
    demo: "https://weathereye.onrender.com/",
  },
  {
    tags: ["React", "sass"],

    msgOne: "React",
    msgTwo: "Sass",
    head: "CashFlow",
    img: CashFlow,
    skillsUsed: [
      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      { clr: "#61dafb", Icon: GrReactjs, name: "ReactJS" },
    ],
    code: "https://github.com/Mahmoudaboelenien19/manage-budget",
    demo: "https://cashflow-2okh.onrender.com/",
  },
  {
    tags: ["Typescript", "sass"],
    msgOne: "Typescript",
    msgTwo: "sass",
    head: "advanced ToDo list",
    img: typeScriptToDoImg,
    skillsUsed: [
      { clr: "#007ACC", Icon: SiTypescript, name: "TypeScript" },
      { clr: "#CC6699", Icon: DiSass, name: "SASS" },
      { clr: "var(--svg)", Icon: OOPSVG, name: "OOP" },
    ],
    code: "https://github.com/Mahmoudaboelenien19/Typescript-Oop-Scss-to-do-list",
    demo: "https://mahmoudaboelenien19.github.io/Typescript-Oop-Scss-to-do-list/",
  },
];

export const iconsArr = [
  {
    id: 1,
    Icon: GrLinkedinOption,
    link: "https://www.linkedin.com/in/mahmoud-abo-elenien19/",
    title: "go to my linkedin",
  },
  {
    id: 2,
    Icon: AiFillGithub,
    link: "https://github.com/Mahmoudaboelenien19",
    title: "go to my github",
  },
  {
    id: 3,
    Icon: GmailSvg,

    title: "send me an Email",
    link: "mailto:m.aboelenien20020@gmail.com",
  },
  {
    id: 4,
    Icon: AiOutlineWhatsApp,
    title: "send me whatApp message",
    link: "https://wa.me/+201503636395",
  },
];
