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
  mongodb,
  git,
  figma,
  docker,

  upworkIcon,
  


  
  threejs,
  Candlestick,
  kisima,
  Genius,
  foodieImage,
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
    title: "Front-End developer",
    icon: web,
  },
  {
    title: "Fullstack developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Digital marketer",
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "NextJS & ExpressJS Enhancement Project",
    company_name: "Upwork",
    icon: upworkIcon,
    iconBg: "#6F42C1",
    date: "January 2024 - Present",
    points: [
    "Successfully completed an Upwork project, enhancing an event platform by updating UI and RestAPI with NextJS and ExpressJS.",
    "Achieved seamless integration of the two frameworks, resulting in a modern, responsive design primed for future scalability.",
    "Showcased strong proficiency in React, NextJS, Express, MaterialUI, TailwindCSS, GraphQL, Redux, and Redux Toolkit.",
    "Demonstrated the ability to write clean, efficient, and well-documented code for optimal project execution.",
    ],
    },

  
    {
      title: "ReactJS & TypeScript Developer",
      company_name: "Upwork",
      icon: upworkIcon,
      iconBg: "#6F42C1",
      date: "December 2023",
      points: [
      "Supported an ongoing Upwork project, connecting dotnet backend with ReactJS + TypeScript frontend.",
      "Enhanced user interfaces for desktop, tablet, and mobile, ensuring a polished and responsive design.",
      "Developed new ReactJS components, aligning with coding standards and project requirements.",
      "Collaborated effectively with cross-functional teams and participated in constructive code reviews.",
      "Flexible schedule tailored to EST timezone for optimal project collaboration."
      ],
      },
      {
        title: "React.js UI Developer",
        company_name: "Upwork",
        icon: upworkIcon,
        iconBg: "#6F42C1",
        date: "November 2023",
        points: [
        "Developed and implemented user interface components using React.js concepts and workflows, including Redux, Flux, and Webpack.",
        "Translated designs and wireframes into high-quality, responsive UI code for an enhanced user experience.",
        "Collaborated seamlessly with backend developers and team members to establish objectives and design cohesive, functional codes.",
        "Wrote application interface codes using JavaScript, following React.js workflows for efficient development.",
        "Demonstrated proficiency in understanding and implementing state management in React components."
        ],
        }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Benjamin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Benjamin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Benjamin optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Genius",
    description:
    "Explore a cutting-edge web application powered by Next.js and Shadcn components, offering a visually appealing user interface. Our app integrates the OpenAI API for intelligent and dynamic chat responses, providing a seamless and engaging conversational experience. Embrace the future of natural language processing with our project, combining modern design elements with powerful AI capabilitie",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:Genius,
    source_code_link: "https://github.com/",
  },
  {
    name: "kisima jangwani",
    description:
    "Kisima Jangwani is a heartfelt website crafted with vanilla JavaScript, HTML, and CSS, serving as a digital hub for a non-profit organization dedicated to community development and STEM mentorship initiatives in the serene region of Kisima, located in Isiolo County. Discover the impactful journey of our team as we work towards positive change, highlighted through insightful updates, vivid visuals, and a dedicated showcase of our community-focused activities. Join us on this meaningful venture, where technology and compassion converge to create a brighter future for Kisima and its residents.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kisima,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trading bots",
    description:
      " Forex Bots Landing Page is a React-based project with Tailwind CSS for styling. This landing page serves as a demonstration of my proficiency in building dynamic web interfaces. Utilizing React for seamless interactivity and Tailwind CSS for efficient styling, this project underscores my skills in creating engaging and responsive web applications within the context of financial technology, specifically focused on Forex bots.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image:Candlestick,
    source_code_link: "https://github.com/",
  },
  {
    name: "Foodie",
    description:
    "Indulge your senses at Foodie, a delectable restaurant serving a symphony of flavors. Our simple yet elegant landing page offers a sneak peek into the culinary wonders that await you. Crafted with precision using HTML, CSS, and JavaScript, the page mirrors the essence of our restaurant. Join us on this virtual journey where the aroma of exquisite dishes mingles with the warmth of our hospitality. Explore our menu, catch glimpses of our cozy ambiance, and anticipate a dining experience that goes beyond the ordinary. Welcome to Foodie – where every visit is a feast for the senses.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: foodieImage, 
    source_code_link: "https://github.com/", 
}

];

export { services, technologies, experiences, testimonials, projects, };
