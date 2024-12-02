import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = 
  `"Transforming ideas into meaningful user experiences, where thoughtful design and precise code come together to create seamless, impactful interactions."`



export const ABOUT_TEXT = `
  Hi, I'm Ana Bartos—a Full Stack Developer specializing in Front End, skilled in HTML, CSS, React, JavaScript, TypeScript, Tailwind CSS, and Bootstrap, with end-to-end development experience using Node.js and Python. Currently enhancing my UX/UI design expertise with Figma, I bring empathy, teamwork, and communication skills from my background as a physiotherapist, ensuring client-focused and innovative solutions. Committed to continuous learning and delivering impactful results.`
     

export const EXPERIENCES = [
 
  {
    year: "2023 - Present",
    role: "Full stack developer in training",
    company: "Freelance",
    description: `Currently enhancing my skills in front-end and full stack development, with knowledge of HTML, CSS, JavaScript, TypeScript, and React. I’m committed to continuous learning and practical application of these technologies through personal projects and hands-on practice. Actively working on understanding design principles, problem-solving, and developing user-centered digital solutions.`,
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
  },
  {
    year: "2014 - 2022",
    role: "Physioterapist",
    company: "Freelance",
    description: `Developed personalized treatment plans and rehabilitation programs with a focus on problem-solving and attention to detail. Conducted patient assessments with effective communication and adaptability, applying manual therapy techniques to foster empathy in care. Utilized digital health management tools for efficient patient data and scheduling.`,
    technologies: ["Patient management software", "Digital health tools"],
  },
  {
    year: "2009 - 2013",
    role: "Physioterapist",
    company: "various (Spain and France)",
    description: `Provided individualized treatment in various settings, including home care, rehabilitation centers, and hospitals.
    Collaborated with multidisciplinary teams for holistic patient recovery.
    Integrated digital tools for patient management, data entry, and communication.`,
    technologies: ["Patient management software", "Digital health tools"],
  },
];

export const PROJECTS = [
  {
    title: "Guitar shop",
    image: project1,
    description:"A web app that showcases a guitar collection and allows users to manage a shopping cart. It offers features to browse products, add them to the cart, adjust quantities, and view the total cost.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"],
    link:"https://guitarla-shop-react-ts.netlify.app/"
  },
  {
    title: "Calorie tracker App",
    image: project2,
    description:"This project is an application that allows users to record activities, either related to food or exercise, and track the calories consumed and burned. Users can also add, edit, and delete activities through an interactive form",    
    technologies: ["HTML",  "JavaScript", "TypeScript", "React", "Tailwincss"],
    link:"https://calorie-tracker-app-react-typescript.netlify.app/"
  },
  {
    title: "Cripto rates App",
    image: project3,
    description:"Crypto Tracker is a React, TypeScript web application that allows users to track cryptocurrency prices in real time. Built with Vite, Zustand, and Axios, this app provides real-time quotes for cryptocurrencies.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    link:"https://crypto-rates-app.netlify.app//"

  },
  {
    title: "Wheather finder App",
    image: project4,
    description:"A simple web application that lets users search for weather information of cities worldwide. It uses the OpenWeatherMap API to display current, maximum, and minimum temperatures, along with error handling for invalid cities or missing fields.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    link:"https:/wheather-finder-app.netlify.app/"

  },
  {
    title: "Cinnamoon",
    image: project5,
    description:"Recipes and healthy lifestyle application web, developed with React.js and Python & Flask. A collaboration with Debora Diaz, this is our final project for 4Geeks full stack software developer.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Python"],
    link:"https://github.com/anabartos/Cinnamoon"

  }
];

export const CONTACT = {
  phoneNo: "+34 661038199 ",
  email: "ana.l.bartos@gmail.com"
};
