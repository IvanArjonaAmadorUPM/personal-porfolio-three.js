import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    acude,
    holytime,
    aco,
    threejs,
    jesus,
    politecnica,
    lodz,
    brooktec,
    deloitte,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java developer",
      icon: mobile,
    },
    {
      title: "Angular Developer",
      icon: backend,
    },
    {
      title: "Mobile developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {  
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Software engineering",
      company_name: "Polytechnic University of Madrid",
      icon: politecnica,
      iconBg: "#61a5b8",
      date: "Sep 2018 - Jun 2022",
      points: [
        "My academic journey included coursework in data structures, algorithms, and software design.",
        "learning various programming languages, including Java, Python, C, and more, enriching my skill set and versatility in software development.",
        "Diving into subjects like software architecture and requirements analysis during my studies, designing robust systems.",
        "Optimizing operating systems and fine-tuning parallel systems for improved performance.",
      ],
    },
    {
      title: "Information engineering",
      company_name: "Polytechnic University of Madrid",
      icon: politecnica,
      iconBg: "#61a5b8",
      date: "Sep 2018 - Dec 2022",
      points: [
        "Exploring the intricacies of network systems, gaining insights into their design and functionality.",
        "Delving into the world of security and encryption, honing skills to protect data and systems from vulnerabilities.",
        "Applying mathematical concepts to software development, I harness the power of precision in algorithm design and optimization.",
        "Exploring computer system design and its core principles to build efficient solutions.",
      ],
    },
    {
      title: "Software engineering (Erasmus) ",
      company_name: "Polytechnic university of Lodz",
      icon: lodz,
      iconBg: "#a37b76",
      date: "Sep 2020 - Mar 2021",
      points: [
        "Broade my horizons, both culturally and academically, as I had the opportunity to study and collaborate with students from diverse backgrounds.",
        "Explore different teaching methods and educational systems, which enriched my academic repertoire.",
        "Erasmus gave me the chance to embrace new experiences, break out of my comfort zone, and enhancing my English language proficiency.",
        "Expand my skill set by learning new programming languages and innovative software development approaches.",
      ],
    },
    {
      title: "Intern Developer",
      company_name: "Brooktec",
      icon: brooktec,
      iconBg: "#52453f",
      date: "Feb 2022 - July 2022",
      points: [
        "Learning and developing web and mobile applciations and using Angular, Ionic, Capacitor and Node",
        "Contributing to real-world projects during my internship, sharpening my skills and making meaningful contributions to the team",
        "Development of new functionalities and the maintenance of ongoing projects.",
        "I had the privilege of learning from seasoned professionals with over a decade of experience.",
      ],
    },
    {
      title: "Software analyst",
      company_name: "Deloitte",
      icon: deloitte,
      iconBg: "#86BC25",
      date: "Jan 2023 - Present",
      points: [
        "Developing, migration and maintaining web applications using Angular and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Working closely with clients to guarantee the timely delivery and superior quality of software solutions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Trabajar con Iván fue un auténtico aprendizaje para mí. Su pasión por el desarrollo software estaba presente cada día al trabajar en equipo manteniendo una buena comunicación asertiva y efectiva, resolución de problemas y atención al detalle.",
      name: "Jesús Jerez",
      designation: "Software developer",
      company: "Giesecke+Devrient",
      image: jesus,
    },
  ];
  
  const projects = [
    {
      name: "ACUDE",
      description: "The project focuses on a mobile application for emergency personnel (firefighters, medical staff, police...) to decrease emergency vehicle response times and enhance their tracking capabilities.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android-studio",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: acude,
      source_code_link: "https://github.com/IvanArjonaAmadorUPM/acude",
    },
    {
      name: "Holytime",
      description:
      "Holytime is a mobile application that provides tourists with tourist information and creates personalized itineraries based on their tastes and preferences, optimizing their time in the city.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Ionic",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: holytime,
      source_code_link: "https://github.com/IvanArjonaAmadorUPM/Hollytime",
    },
    {
      name: "ACO Algorithm",
      description:
        "This project used my own ACO (Ant Colony Optimization) algorithm to create a serve which generate personalized itineraries for tourists based on their input preferences.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "ACO Algorithm",
          color: "green-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "pink-text-gradient",
        },
      ],
      image: aco,
      source_code_link: "https://github.com/IvanArjonaAmadorUPM/holytime-backend",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };