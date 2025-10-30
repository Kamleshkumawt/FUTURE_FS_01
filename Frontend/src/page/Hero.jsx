import React from "react";
import Nav from "../components/Nav";
import profileImage from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="dark:bg-gradient-to-b from-gray-800 to-gray-900 bg-gray-100 w-full min-h-screen">
      <Nav />
      <div className="wrapper max-w-7xl mx-auto pt-25 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center items-start gap-8 w-full md:w-2/3">
          <h1 className="text-[#663399] tracking-[8px] text-3xl sm:text-4xl font-bold mb-2 animate-pulse">
            KAMLESH KUMAWAT
          </h1>
          <h2 className="text-4xl sm:text-6xl font-extrabold dark:text-white text-gray-800 mb-4">
            FULL-STACK <br /> WEB DEVELOPER
          </h2>
          <p className="text-lg sm:text-xl dark:text-gray-300 text-gray-700 mb-6 max-w-xl">
            Hi, I'm Kamlesh! I craft modern, scalable web applications using the
            MERN stack and more. With a passion for clean code, and problem
            solving, I love building products that make a difference. I enjoy
            collaborating, learning new tech, and sharing knowledge with the
            community.
          </p>
          <div className="gap-4 mb-6 hidden md:flex">
            <a
              href="#Work"
              className="p-4 border border-white rounded-xl cursor-pointer font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 transition-transform"
            >
              See the Latest Works
            </a>
            <a
              href="#Contact"
              className="p-4 border border-white dark:bg-white bg-gray-400 dark:text-gray-900 text-gray-50 rounded-xl cursor-pointer font-semibold dark:hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-12 text-gray-400 animate-bounce cursor-pointer "
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => {
                const aboutSection = document.getElementById("About");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {/* Mouse outline */}
              <rect x="6" y="2" width="12" height="20" rx="6" ry="6" />
              {/* Scroll wheel */}
              <line x1="12" y1="6" x2="12" y2="10" strokeLinecap="round" />
            </svg>
            <span
              className="text-gray-400 text-base  cursor-pointer dark:hover:text-white hover:text-gray-800 transition -mt-2"
              onClick={() => {
                const aboutSection = document.getElementById("About");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Scroll to explore more
            </span>
          </div>
        </div>
        <img
          className="w-64 h-64 md:w-80 md:h-90 object-cover rounded-2xl dark:shadow-xl  shadow-xs m-8 mb-40 hidden md:block dark:drop-shadow-amber-50  drop-shadow-gray-900 drop-shadow-sm"
          // src="https://static.vecteezy.com/system/resources/thumbnails/042/055/246/small_2x/ai-generated-businessman-portrait-portrait-of-businessman-png.png"
          src={profileImage}
          alt="Kamlesh Kumwt Portrait"
        />
      </div>
      {/* <div className="text-[10vw] absolute left-0 bottom-0 w-full font-sans whitespace-nowrap text-[#ffffff09] pointer-events-none select-none">
        Writer • Content Creator • Influencer
      </div> */}
    </div>
  );
};

export default Hero;
