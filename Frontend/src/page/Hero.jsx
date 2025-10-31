import React from "react";
import Nav from "../components/Nav";
import profileImage from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="dark:bg-gradient-to-b from-gray-800 to-gray-900 bg-gray-100 w-full min-h-screen">
      <Nav />
      <div className="wrapper max-w-7xl mx-auto  text-center sm:text-start pt-25 px-4 flex flex-col md:flex-row items-center w-full justify-between">
        <div className="flex flex-col justify-center items-start gap-3 sm:gap-8 w-full text-center md:w-2/3">
          <div className="w-full flex items-center justify-center">
            <img
              className="w-30 h-30 object-cover rounded-full dark:shadow-xl  shadow-lg shadow-[hsl(var(--primary)/0.2)] md:hidden block dark:drop-shadow-amber-50  drop-shadow-gray-900 drop-shadow-sm"
              // src="https://static.vecteezy.com/system/resources/thumbnails/042/055/246/small_2x/ai-generated-businessman-portrait-portrait-of-businessman-png.png"
              src={profileImage}
              alt="Kamlesh Kumwt Portrait"
            />
          </div>
          <h1 className="text-[#663399] w-full tracking-[8px] text-lg flex sm:text-3xl justify-center sm:justify-start sm:items-start md:text-4xl font-extrabold sm:font-bold my-3 animate-pulse [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]">
            KAMLESH KUMAWAT
          </h1>
          
          <div className="flex items-center gap-3 mb-3 sm:mb-1">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-code w-5 h-5 text-[hsl(var(--primary))] sm:hidden flex"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <h2 className="text-lg w-full sm:text-4xl md:text-6xl flex sm:flex-col justify-center sm:justify-start sm:items-start  gap-2 sm:gap-1 font-bold sm:font-extrabold sm:dark:text-gray-100 dark:text-gray-400 text-gray-800">
            FULL - STACK <span> WEB DEVELOPER</span>
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-zap w-5 h-5 text-accent text-[hsl(var(--primary))] sm:hidden flex"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          </div>

          <p className="sm:text-lg md:text-xl text-center sm:text-start dark:text-gray-300 text-gray-700 mb-3 max-w-xl">
            Hi, I'm{" "}
            <span className="font-bold text-[#663399] [text-shadow:0_0_25px_hsl(var(--primary)/0.)]">
              Kamlesh
            </span>
            ! I craft
            <span className="font-semibold [text-shadow:0_0_25px_hsl(var(--primary)/0.3)] mx-1">
              modern, scalable web applications
            </span>
            using the{" "}
            <span className="font-semibold text-[#a484c4] [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]">
              MERN stack
            </span>{" "}
            and more. With a passion for
            <span className="font-semibold [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]  mx-1">
              clean code
            </span>{" "}
            and
            <span className="font-semibold text-[#bf16fdcb]  [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]  mx-1">
              problem solving
            </span>
            , I love building products that
            <span className="font-semibold text-[#d97affb3]  [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]  mx-1">
              make a difference
            </span>
            . I enjoy
            <span className="font-semibold [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]  mx-1">
              collaborating
            </span>
            ,
            <span className="font-semibold [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]  mx-1">
              learning new tech
            </span>
            , and
            <span className="font-semibold text-[#9c7ba8]  [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]  mx-1">
              sharing knowledge
            </span>{" "}
            with the community.
          </p>

          <div className="gap-4 w-full flex items-center justify-center md:justify-start mb-4 sm:mb-1">
            <a
              href="#Work"
              className="p-4 border  rounded-xl cursor-pointer font-medium bg-[hsl(var(--primary)/0.1)] border-[hsl(var(--primary)/0.3)]  text-[hsl(var(--primary))] transition-transform dark:hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]"
            >
              See the Latest Works
            </a>
            <a
              href="#Contact"
              className="p-4 border border-white dark:bg-white bg-[hsl(var(--primary))] dark:text-gray-900 text-gray-50 rounded-xl cursor-pointer font-semibold dark:hover:bg-gray-100 hover:scale-105 transition-transform dark:hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] dark:shadow-[0_0_25px_hsl(var(--primary)/0.3)]"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-3 sm:-mt-1 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-14 cursor-pointer hover:text-[hsl(var(--primary)/0.5)] transition-colors duration-300 text-[hsl(var(--primary))] hover:animate-pulse animate-bounce [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]"
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
              className="text-gray-400 text-base sm:flex hidden cursor-pointer dark:hover:text-white hover:text-gray-800 transition -mt-2"
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
