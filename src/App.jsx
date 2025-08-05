import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Callingapis from './Components/Callingapis';
import Galaxy from './Components/Galaxy';
import Projects from './Components/Projects';
import Gallary from './Components/Gallary'

const App = () => {
  return (
    <>
     <Navbar />
    <div className="min-h-screen w-full overflow-x-hidden bg-transparent">
      {/* Home Section with Galaxy Background */}
      <section className="relative w-full min-h-screen">
        {/* Galaxy Background */}
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
      <section className="bg-gradient-to-b from-gray-800 via-gray-950 to-gray-950 text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-24">
          <About />
        </div>
      </section>


<section className="bg-gradient-to-b from-gray-950 via-gray-800 to-gray-800 text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-24">
      <Projects/>
      </div>
      </section>

      {/* API Section */}
      {/* <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 text-white">
        <div className="px-4 sm:px-6 md:px-12 lg:px-24">
          <Callingapis />
        </div>
      </section> */}

      <Gallary/>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default App;
