import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-16 rounded-b-4xl flex flex-col">
      <div className="w-full">
        <h3 className="text-4xl sm:text-5xl font-bold text-amber-300 hover:text-white transition duration-300 text-center sm:text-left mb-6">
          ABOUT ME
        </h3>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto sm:mx-0 mb-12 text-center sm:text-left leading-relaxed">
          I am Bhushan Bhomkar, a software developer and motivated learner who
          completed a degree in Information Technology from Goa College of
          Engineering in 2025. I enjoy traveling to new places and exploring. I
          also enjoy creating reels and editing photos.
        </p>

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
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4 text-cyan-400">💻</div>
              <h3 className="text-xl font-semibold text-white mb-2">10TH SSC</h3>
              <p className="text-gray-300 text-sm mb-2">
                FROM DR.K.B HEDGEWAR HIGH SCHOOL.
              </p>
              <p className="text-white text-sm mb-4 font-extrabold">MARCH 2019</p>
              <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300">
                See Certificate
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4 text-cyan-400">✏️</div>
              <h3 className="text-xl font-semibold text-white mb-2">12TH SCIENCE</h3>
              <p className="text-gray-300 text-sm mb-4">
                FROM DCT'S DENPO COLLEGE OF ARTS SCIENCE COMMERCE.
              </p>
              <p className="text-white text-sm mb-4 font-extrabold">MARCH 2021</p>
              <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300">
                See Certificate
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4 text-cyan-400">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                BE IN INFORMATION TECHNOLOGY
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                FROM GOA COLLEGE OF ENGINEERING.
              </p>
              <p className="text-white text-sm mb-4 font-extrabold">AUGUST 2025</p>
              <button className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300">
                See Certificate
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
