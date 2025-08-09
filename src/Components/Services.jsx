import React, { memo } from "react";
import { FaCode, FaVideo, FaCube } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, fast, and modern websites with React, Tailwind CSS, and other cutting-edge technologies to bring ideas to life.",
      icon: <FaCode className="text-5xl text-gray-700" />,
      bgColor: "bg-gradient-to-r from-blue-100 to-blue-200",
      hoverColor: "hover:from-blue-200 hover:to-blue-300",
      link: "https://github.com/Bhushan20-oss",
    },
    {
      title: "Video Editing",
      description:
        "Creating stunning videos, smooth transitions, and engaging reels using professional editing tools to make stories stand out.",
      icon: <FaVideo className="text-5xl text-gray-700" />,
      bgColor: "bg-gradient-to-r from-pink-100 to-pink-200",
      hoverColor: "hover:from-pink-200 hover:to-pink-300",
      link: "https://www.instagram.com/bhushan__20_/p/DJQ8kWiSkFP/", 
    },
    {
      title: "Painting & 3D Modeling",
      description:
        "Designing creative artworks, hand-painted visuals, and realistic 3D models from paper crafts to digital sculptures — blending traditional art with modern techniques.",
      icon: <FaCube className="text-5xl text-green-400" />,
      bgColor: "bg-gradient-to-r from-green-100 to-green-200",
      hoverColor: "hover:from-green-200 hover:to-green-300",
      link: "https://www.instagram.com/bhushan__20_/reel/CuD8NAWoBIC/?hl=zh-cn", // Add your project link here
    },
  ];

  return (
    <section
      className="w-full min-h-screen py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Services <span className="text-blue-400">Provided by Me</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${service.bgColor} ${service.hoverColor} p-6 sm:p-8 rounded-2xl shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer flex flex-col`}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-4 text-center leading-relaxed text-sm sm:text-base flex-grow">
                {service.description}
              </p>
              <div className="mt-6 text-center">
                <span className="inline-block px-5 py-2 bg-white text-gray-800 rounded-full shadow hover:bg-gray-100 transition duration-300 text-sm sm:text-base">
                  Learn More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
