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
    meta,
    starbucks,
    tesla,
    shopify,
    acude,
    holytime,
    aco,
    threejs,
    angular,
    capacitor,
    ionic,
    java,
    jesus,
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
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Angular Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
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
    {
      name: "capacitor",
      icon: capacitor,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "ionic",
      icon: ionic,
    },
    {
      name: "java",
      icon: java,
    },


  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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