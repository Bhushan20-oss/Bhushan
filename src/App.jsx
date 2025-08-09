import React, { Suspense, lazy, useEffect } from "react";

// Lazy imports
const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Components/Home"));
const Footer = lazy(() => import("./Components/Footer"));
const About = lazy(() => import("./Components/About"));
const Galaxy = lazy(() => import("./Components/Galaxy"));
const Projects = lazy(() => import("./Components/Projects"));
const Gallary = lazy(() => import("./Components/Gallary"));
const Contact = lazy(() => import("./Components/Contact"));
const Skills = lazy(() => import("./Components/Skills"));
const Services = lazy(() => import("./Components/Services"));

const App = () => {
  // 🔹 Scroll Throttle for smooth performance
  useEffect(() => {
    const handleScroll = () => {
      // Example: console.log("Scrolling...");
      // You can add scroll-triggered animations here
    };

    let throttled = false;
    const throttleScroll = () => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          handleScroll();
          throttled = false;
        }, 100); // Lower = more responsive, Higher = better performance
      }
    };

    window.addEventListener("scroll", throttleScroll);
    return () => window.removeEventListener("scroll", throttleScroll);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
          Loading...
        </div>
      }
    >
      <Navbar />
      <div className="min-h-screen w-full overflow-x-hidden bg-transparent">
        {/* Home Section */}
        <section id="home" className="relative w-full min-h-screen">
          <Home />
          <div className="absolute inset-0 w-full h-full -z-10 bg-gray-950">
            <Galaxy
              mouseRepulsion={true}
              mouseInteraction={true}
              density={1.5}
              glowIntensity={0.5}
              saturation={0.8}
              hueShift={240}
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-gradient-to-b from-gray-800 via-gray-950 to-gray-950 text-white"
        >
          <div className="px-4 sm:px-6 md:px-12 lg:px-24">
            <About />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-gradient-to-b from-gray-950 via-gray-800 to-gray-800 text-white"
        >
          <div className="px-4 sm:px-6 md:px-12 lg:px-24">
            <Projects />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <Gallary />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 text-white"
        >
          <Skills />
        </section>

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
