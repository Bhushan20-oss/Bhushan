import React from 'react'
import SplitText from "./SplitText"
import Galaxy from './Galaxy'
import ProfileCard from './profile/ProfileCard';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
const Home = () => {
  return (
<>
<div className="min-h-screen flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 py-10 text-white">
  {/* Left: Heading and Paragraph */}
  <div className="w-full sm:w-1/2 space-y-4 text-center sm:text-left mb-8 sm:mb-0 mt-25">
    <h2 className="text-6xl ">Hi, I'm</h2>
  <SplitText
  text="BHUSHAN BHOMKAR"
  className=" text-center text-4xl sm:text-7xl font-bold text-amber-500 hover:text-white transition duration-300"
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

    <h2 className="text-xl sm:text-3xl text-white">
  
    </h2>

    <p className="text-base sm:text-3xl text-gray-400">
      I’m passionate about creating beautiful and functional websites and applications that solve real-world problems.
    </p>

    <button className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-xl text-white transition duration-300 shadow-lg hover:scale-105">
      View My Work
    </button>
  </div>

  {/* Right: Image */}
  {/* <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
    <img
      src="images/bhushan.png"
      alt="Bhushan"
      className="w-3/4 sm:w-auto rounded-3xl shadow-lg object-cover hover:scale-105 transition duration-500 ease-in-out"
    />
  </div> */}

  <ProfileCard
  name="Bhushan Bhomkar"
  title="Software Engineer"
  handle="bhushan__20_"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./images/bhushan.png"
   grainUrl = "./images/.png"
   iconUrl = "./images/bhushan.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
</div>

    </>
  )
}

export default Home
