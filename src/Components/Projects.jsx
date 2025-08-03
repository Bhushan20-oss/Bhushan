import React from "react";
import CardSwap, { Card } from "./CardSwap";
import SplitText from "./SplitText"

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Projects = () => {
  return (<>
   
          
     <SplitText
  text="PROJECTS"
  className=" ml-40 mt-10 text-center text-4xl sm:text-7xl font-bold text-amber-500 hover:text-white transition duration-300"
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
    <p className=" text-white text-lg font-semibold mt-30 ml-30 origin-top-left">
      Some of the projects which i had devlopd during my Enginerring Journey
      <br/>
      which helped me to gain real world problem sloving these projects 
      <br />
      These project help me to build my fundemental strong
    </p>

    <div className=" cursor-pointer relative h-80 mt-0.5">
       
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
         
        <Card>
          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 hover:shadow-indigo-500/40 transition-shadow duration-300">
            <h3 className="text-3xl font-semibold mb-3 text-black font-serif">
              Agri-smart Portal using ML
            </h3>

            <img
              src="/images/project1.png"
              alt="Project 1"
              className="w-full h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
            />

            <p className="text-lg text-gray-950 leading-relaxed">
              A comprehensive web-based platform using{" "}
              <span className="text-white font-medium">Next.js</span> to assist
              farmers—especially paddy cultivators—by providing early detection
              of crop diseases and pests, and paddy guide.
              <br />
              <br />
              Designed and deployed a{" "}
              <span className="text-white font-medium">
                CNN-based hybrid ML model
              </span>{" "}
              to identify crop diseases from leaf images with high accuracy.
              <br />
              <br />
              Integrated the model via a{" "}
              <span className="text-white font-medium">FastAPI backend</span>
              , enabling real-time image classification and automated
              agricultural advice.
              <br />
              <br />
              Enabled users to receive tailored crop disease management
              recommendations, helping improve productivity and reduce losses.
              <br />
              <br />
              Built an intuitive, mobile-responsive frontend using{" "}
              <span className="text-white font-medium">Next.js</span>, focused
              on ease of use for rural farmers.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white hover:shadow-indigo-500/40 transition-shadow duration-400">
            <h3 className="text-4xl font-serif font-semibold mb-3 text-black">
              Focus On TODAY
            </h3>

            <img
              src="/images/project2.png"
              alt="Project 2"
              className="w-full h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
            />

            <p className="text-lg text-gray-950 leading-relaxed">
              A web portal that helps us to be{" "}
              <span className="text-white font-medium">FOCOUS</span> and perform
              our daily task without getiing distracted.
              <br />
              <br />
              Designed and deployed using{" "}
              <span className="text-white font-medium">
                HTML 5, CSS, and JAVASCRIPT
              </span>{" "}
              to learn JAVASCRIPT various fuctions.
              <br />
              <br />
              Enabled users to add more task and to be focoused and be
              productive everyday.
              <br />
              <br />
              Built an intuitive, mobile-responsive frontend using{" "}
              <span className="text-white font-medium">
                HTML,CSS, JAVAScript
              </span>
              , focused on ease of use.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white hover:shadow-indigo-500/40 transition-shadow duration-400">
            <h3 className="text-4xl font-serif font-semibold mb-3 text-black">
              Coffe web app
            </h3>

            <img
              src="/images/project2.png"
              alt="Project 2"
              className="w-full h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
            />

            <p className="text-lg text-gray-950 leading-relaxed">
              A web portal that helps{" "}
              <span className="text-white font-medium">customers </span> To order coffe and other itmes from 
              web site through table no.
              <br />
              <br />
              Designed and deployed using{" "}
              <span className="text-white font-medium">
                React,Tailwind-Css, Nodejs and Mysql.
              </span>{" "}
              to provide best services to the Customer,Admin and  employee.
              <br />
              <br />
              Enables Admin to manage customer Empoyee and see weeky report and and manage other task such as to add new items etc.
              <br />
              <br />
              Built an intuitive, mobile-responsive frontend using{" "}
              <span className="text-white font-medium">
                Reactjs and Tailwind-css.
              </span>
              , focused on ease of use.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-amber-400 hover:shadow-indigo-500/40 transition-shadow duration-400">
            <h3 className="text-4xl font-serif font-semibold mb-3 text-black">
              To-Do-mobile App
            </h3>

            <img
              src="/images/project2.png"
              alt="Project 2"
              className="w-full h-[200px] object-cover rounded-lg mb-4 border border-indigo-500/30"
            />

            <p className="text-lg text-gray-950 leading-relaxed">
              A To do application for mobile devices {" "}
              <span className="text-white font-medium">TO-mark </span> and help users 
              to make sure that they complete them.
              <br />
              <br />
              Designed and deployed using{" "}
              <span className="text-white font-medium">
                Dart/flutter,Django,mongo-db.
              </span>{" "}
              which was developd during internship combine project and i was in frontend .
              <br />
              <br />
              Enabled users to add delete update and perform curd opertion and we had use JWt Authentication.
              <br />
              <br />
              Built an intuitive, mobile-app frontend using{" "}
              <span className="text-white font-medium">
                flutter and dart
              </span>
              , focused on ease of use.
            </p>
          </div>
        </Card>
      </CardSwap>
    </div>
    </>
  );
};

export default Projects;
