import React, { memo } from 'react';
import ChromaGrid from './ChromaGrid';

const items = [
  { 
    image: './images/tech/html.png',
    title: "HTML",
    subtitle: "I have used it to develop simple web applications.",
    handle: "@html",
    borderColor: "#E44D26",
    gradient: "linear-gradient(145deg, #E44D26, #000)",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    proficiency: 95
  },
  {
    image: './images/tech/css.png',
    title: "CSS",
    subtitle: "I have used it for styling web pages.",
    handle: "@css",
    borderColor: "#1572B6",
    gradient: "linear-gradient(145deg, #1572B6, #000)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    proficiency: 90
  },
  {
    image: './images/tech/js.png',
    title: "JavaScript",
    subtitle: "I have used it to make websites interactive.",
    handle: "@javascript",
    borderColor: "#F7DF1E",
    gradient: "linear-gradient(145deg, #F7DF1E, #000)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    proficiency: 90
  },
  {
    image: './images/tech/node.png',
    title: "Node.js",
    subtitle: "I have used it as a backend runtime environment.",
    handle: "@nodejs",
    borderColor: "#68A063",
    gradient: "linear-gradient(145deg, #68A063, #000)",
    url: "https://nodejs.org",
    proficiency: 70
  },
  {
    image: './images/tech/java.png',
    title: "Java",
    subtitle: "I have used it to learn DSA and other programming concepts.",
    handle: "@java",
    borderColor: "#f89820",
    gradient: "linear-gradient(145deg, #f89820, #000)",
    url: "https://www.java.com",
    proficiency: 86
  },
  {
    image: './images/tech/react.png',
    title: "React.js",
    subtitle: "I have used it to develop modern and attractive web applications.",
    handle: "@react",
    borderColor: "#61DAFB",
    gradient: "linear-gradient(145deg, #61DAFB, #000)",
    url: "https://react.dev",
    proficiency: 75
  },
  {
    image: './images/tech/py.png',
    title: "Python",
    subtitle: "I have used it for custom model building and automation.",
    handle: "@python",
    borderColor: "#3776AB",
    gradient: "linear-gradient(145deg, #3776AB, #000)",
    url: "https://www.python.org",
    proficiency: 70
  },
  {
    image: './images/tech/tw.png',
    title: "Tailwind CSS",
    subtitle: "I have used it with React for styling websites.",
    handle: "@tailwind",
    borderColor: "#38BDF8",
    gradient: "linear-gradient(145deg, #38BDF8, #000)",
    url: "https://tailwindcss.com",
    proficiency: 85
  },
  {
    image: './images/tech/mysql.png',
    title: "MySQL",
    subtitle: "I have used it to write queries for backend databases.",
    handle: "@mysql",
    borderColor: "#4479A1",
    gradient: "linear-gradient(145deg, #4479A1, #000)",
    url: "https://www.mysql.com",
    proficiency: 86
  },
  {
    image: './images/tech/mongo.png',
    title: "MongoDB",
    subtitle: "I am currently learning this NoSQL database.",
    handle: "@mongodb",
    borderColor: "#4DB33D",
    gradient: "linear-gradient(145deg, #4DB33D, #000)",
    url: "https://www.mongodb.com",
    proficiency: 30
  }
];

const Skills = () => {
  return (
    <div className="bg-gray-900 p-5">
      <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-8 hover:caret-amber-300 mt-20 px-4">
        PROGRAMMING Languages which I have Explored
      </h2>
      <div className="min-h-full min-w-full relative bg-gray-900 flex justify-center px-2 sm:px-6">
        <ChromaGrid
          items={items.map(item => ({
            ...item,
            onClick: () => window.open(item.url, "_blank") // Makes each skill clickable
          }))}
          radius={250}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          className="gap-4 sm:gap-6 justify-center flex-wrap"
          imgClassName="w-16 h-16 sm:w-20 sm:h-20 object-contain" // Scales nicely for mobile
        />
      </div>
    </div>
  );
};

export default memo(Skills);
