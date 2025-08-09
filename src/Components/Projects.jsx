import React, { memo } from "react";
import CardSwap, { Card } from "./CardSwap";
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Projects = () => {
  return (
    <>
      <SplitText
        text="PROJECTS"
        className="ml-4 sm:ml-20 mt-6 sm:mt-10 text-center text-3xl sm:text-7xl font-bold text-amber-500 hover:text-white transition duration-300"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <p className="text-white text-base sm:text-lg font-semibold mt-6 sm:mt-10 mx-4 sm:mx-20">
        Some of the projects I developed during my engineering journey
        <br />
        have helped me tackle real-world problems and improve my problem-solving skills.
        <br />
        These projects also played a key role in strengthening my fundamentals.
      </p>

      <div className="cursor-pointer relative min-h-[400px] mt-4 sm:mt-2 px-4 sm:px-0">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {/* Project 1 */}
          <Card>
            <a
              href="https://github.com/Bhushan20-oss/Agrismart-portal-for-farmers-using-ML"
              target="Agri-smart"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-black font-serif">
                  Agri-smart Portal using ML
                </h3>
                <img
                  src="/images/project1.png"
                  alt="Project 1"
                  className="w-full h-48 sm:h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
                />
                <p className="text-base sm:text-sm text-gray-950 leading-relaxed flex-grow">
                  A comprehensive web-based platform using{" "}
                  <span className="text-white font-medium">Next.js</span> to assist farmers—especially paddy cultivators—by providing early detection of crop diseases and pests, and paddy guide.
                  <br />
                  Designed and deployed a{" "}
                  <span className="text-white font-medium">CNN-based hybrid ML model</span>{" "}
                  to identify crop diseases from leaf images with high accuracy.
                  <br />
                  Integrated the model via a{" "}
                  <span className="text-white font-medium">FastAPI backend</span>, enabling real-time image classification and automated agricultural advice.
                </p>
              </div>
            </a>
          </Card>

          {/* Project 2 */}
          <Card>
            <a
              href="https://github.com/Bhushan20-oss/Focous_on"
              target="Focous ON"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white hover:shadow-indigo-500/40 transition-shadow duration-400 h-full flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-serif font-semibold mb-3 text-black">
                  Focus On TODAY
                </h3>
                <img
                  src="/images/project2.png"
                  alt="Project 2"
                  className="w-full h-48 sm:h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
                />
                <p className="text-base sm:text-sm text-gray-950 leading-relaxed flex-grow">
                  A web portal that helps us to be{" "}
                  <span className="text-white font-medium">FOCOUS</span> and perform our daily task without getting distracted.
                  <br />
                  Designed and deployed using{" "}
                  <span className="text-white font-medium">HTML 5, CSS, and JAVASCRIPT</span>{" "}
                  to learn JAVASCRIPT various functions.
                  <br />
                  Enabled users to add more tasks and stay focused and productive every day.
                </p>
              </div>
            </a>
          </Card>

          {/* Project 3 */}
          <Card>
            <a
              href="https://github.com/Bhushan20-oss/Coffee_Web_App"
              target="Coffee"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white hover:shadow-indigo-500/40 transition-shadow duration-400 h-full flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-serif font-semibold mb-3 text-black">
                  Coffee web app
                </h3>
                <img
                  src="/images/coffee.png"
                  alt="Project 3"
                  className="w-full h-48 sm:h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
                />
                <p className="text-base sm:text-sm text-gray-950 leading-relaxed flex-grow">
                  A web portal that helps{" "}
                  <span className="text-white font-medium">customers</span> order coffee and other items from the website through table numbers.
                  <br />
                  Designed and deployed using{" "}
                  <span className="text-white font-medium">React, Tailwind-CSS, Node.js, and MySQL</span>{" "}
                  <br />
                  Enables Admin to manage customers, employees, and view weekly reports, as well as manage tasks like adding new items.
                  <br />
                  Built an intuitive, mobile-responsive frontend using{" "}
                  <span className="text-white font-medium">React.js and Tailwind-CSS</span>, focused on ease of use.
                </p>
              </div>
            </a>
          </Card>

          {/* Project 4 */}
          <Card>
            <a
              href="https://github.com/Bhushan20-oss/Todo-App"
              target="To do app"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-amber-400 hover:shadow-indigo-500/40 transition-shadow duration-400 h-full flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-serif font-semibold mb-3 text-black">
                  To-Do Mobile App
                </h3>
                <img
                  src="/images/projecttodo.png"
                  alt="Project 4"
                  className="w-full h-48 sm:h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
                />
                <p className="text-base sm:text-sm text-gray-950 leading-relaxed flex-grow">
                  A To-Do application for mobile devices{" "}
                  <span className="text-white font-medium">TO-mark</span> to help users ensure they complete their tasks.
                  <br />
                  Designed and deployed using{" "}
                  <span className="text-white font-medium">Dart/Flutter, Django, and MongoDB</span>{" "}
                  during an internship combined project, where I worked on the frontend.
                  <br />
                  Enabled users to add, delete, update, and perform CRUD operations, with JWT Authentication.
                  <br />
                  Built an intuitive, mobile-app frontend using{" "}
                  <span className="text-white font-medium">Flutter and Dart</span>, focused on ease of use.
                </p>
              </div>
            </a>
          </Card>
        </CardSwap>
      </div>
    </>
  );
};

export default memo(Projects);
