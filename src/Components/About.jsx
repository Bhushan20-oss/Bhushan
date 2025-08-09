import React, { memo } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-16 rounded-b-4xl flex flex-col">
      <div className="w-full">
        <section id="about" className="bg-gray-900 text-gray-100 py-12 px-6">
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-200 mb-4">
                I’m{" "}
                <strong className="text-white">Bhushan Bhomkar</strong>, a
                passionate software developer and lifelong learner with a degree
                in
                <span className="font-semibold">
                  {" "}
                  Information Technology
                </span>{" "}
                from{" "}
                <span className="font-semibold">
                  Goa College of Engineering
                </span>{" "}
                (Class of 2025).
              </p>

              <p className="text-gray-300 mb-4">
                I thrive on turning ideas into functional, user-friendly digital
                experiences — whether it’s{" "}
                <span className="font-medium text-white">
                  building sleek front-ends
                </span>
                ,{" "}
                <span className="font-medium text-white">integrating APIs</span>
                , or crafting{" "}
                <span className="font-medium text-white">
                  full-stack applications
                </span>
                .
              </p>

              <p className="text-gray-300 mb-6">
                Beyond the screen, I’m a creator at heart. I love{" "}
                <span className="font-medium text-white">
                  traveling to new places
                </span>
                , capturing moments through{" "}
                <span className="font-medium text-white">photography</span>, and
                crafting{" "}
                <span className="font-medium text-white">
                  engaging reels and visual edits
                </span>
                . I also enjoy{" "}
                <span className="font-medium text-white">
                  making 3D paper models
                </span>
                , <span className="font-medium text-white">painting</span>, and
                exploring other forms of art.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Bhushan20-oss"
                  className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-2 px-4 rounded-md shadow transition-transform duration-300 ease-out hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1JgdOU_7kgELUzEIx0wcKXAKhJllVR8w8/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gray-700 hover:bg-gray-800 text-gray-200 font-medium py-2 px-4 rounded-md transition-transform duration-300 ease-out hover:scale-105"
                >
                  View Resume
                </a>
              </div>
            </div>

            <aside className="bg-gray-800 rounded-xl ml-10 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Location:</strong> Goa, India
                </li>
                <li>
                  <strong className="text-white">Degree:</strong> BE — Information
                  Technology (2025)
                </li>
                <li>
                  <strong className="text-white">Interests:</strong> Travel ·
                  Photography · 3D Paper Modeling · Painting
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm uppercase text-gray-400 mb-2">
                  Creative side
                </h4>
                <p className="text-gray-300 text-sm">
                  I combine technical skills with visual creativity — building
                  polished UIs and bringing tactile ideas to life with paper 3D
                  models and paintings.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="text-2xl text-amber-50 mb-6 font-semibold text-center sm:text-left">
            Education Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 ease-out">
    <div className="text-4xl mb-4 text-cyan-400">💻</div>
    <h3 className="text-xl font-semibold text-white mb-2">10TH SSC</h3>
    <p className="text-gray-300 text-sm mb-2">
      FROM DR.K.B HEDGEWAR HIGH SCHOOL.
    </p>
    <p className="text-white text-sm mb-4 font-extrabold">MARCH 2019</p>
    <a
      href="https://drive.google.com/file/d/18RQEsjdVHNOuq4Wd4Eo0Ab2ScpUB5MYo/view?usp=drive_link"
      target="10th"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors duration-300"
    >
      See Certificate
    </a>
  </div>

  {/* Card 2 */}
  <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 ease-out">
    <div className="text-4xl mb-4 text-cyan-400">✏️</div>
    <h3 className="text-xl font-semibold text-white mb-2">12TH SCIENCE</h3>
    <p className="text-gray-300 text-sm mb-4">
      FROM DCT'S DENPO COLLEGE OF ARTS SCIENCE COMMERCE.
    </p>
    <p className="text-white text-sm mb-4 font-extrabold">MARCH 2021</p>
    <a
      href="https://drive.google.com/file/d/1dMj3ZbOWZSx6VNXMA4QGVTvAy0w8xerD/view?usp=drive_link"
      target="12th"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors duration-300"
    >
      See Certificate
    </a>
  </div>

  {/* Card 3 */}
  <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 ease-out">
    <div className="text-4xl mb-4 text-cyan-400">📊</div>
    <h3 className="text-xl font-semibold text-white mb-2">
      BE IN INFORMATION TECHNOLOGY
    </h3>
    <p className="text-gray-300 text-sm mb-4">
      FROM GOA COLLEGE OF ENGINEERING.
    </p>
    <p className="text-white text-sm mb-4 font-extrabold">AUGUST 2025</p>
    <a
      href="https://drive.google.com/file/d/1b3gRX2augxlVTg-ke3pO9Oyvq1mLQHBg/view?usp=drive_link"
      target="Engineering"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors duration-300"
    >
      See Certificate
    </a>
  </div>
</div>

        </motion.div>
      </div>
    </div>
  );
};

export default memo(About);
