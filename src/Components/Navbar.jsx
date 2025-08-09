import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent z-100 shadow-xl">
        <div className="px-4 py-4 flex flex-col sm:flex-row sm:justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold mb-2 sm:mb-0">
            Bhushan.dev
          </Link>
          <div className="space-x-4 sm:space-x-6 flex flex-wrap justify-center text-white font-medium">
            <a
              href="#home"
              className="hover:text-amber-400 transition duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-amber-400 transition duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-amber-400 transition duration-200"
            >
              Projects
            </a>
            <a
              href="#gallery"
              className="hover:text-amber-400 transition duration-200"
            >
              Gallery
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
