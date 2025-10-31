import React from 'react'

const badgeList = [
  {
    src: "https://img.shields.io/badge/MERN-Stack-3DDC84?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MERN Stack",
  },
  {
    src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
    alt: "Node.js",
  },
  {
    src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    alt: "React",
  },
  {
    src: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
    alt: "Express.js",
  },
  {
    src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
  },
  {
    src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MongoDB",
  },
  {
    src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    alt: "JavaScript",
  },
  {
    src: "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "Tailwind CSS",
  },
  {
    src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    alt: "Bootstrap",
  },
  {
    src: "https://img.shields.io/badge/Framer_Motion-EA4C89?style=for-the-badge&logo=framer&logoColor=white",
    alt: "Framer Motion",
  },
  {
    src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  {
    src: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    alt: "C",
  },
  {
    src: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    alt: "C++",
  },
];

const Skill = () => {
  return (
    <div
      className="h-full max-w-full flex flex-col gap-5 items-start justify-center px-2 py-8 md:px-8 md:py-6 bg-gray-100 dark:bg-gradient-to-b from-gray-800 to-gray-900 dark:text-white text-gray-900"
    > 
     
      <div
        className="w-full flex flex-col items-start gap-5 mt-8"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-start border-l-amber-300 border-l-4 pl-2 [text-shadow:0_0_25px_hsl(var(--primary)/0.3)]">
          My  <span className="text-[hsl(var(--primary))]">Tech Stack</span>
        </h2>
        <div className="flex flex-wrap justify-start gap-2 sm:gap-3 px-2">
          {badgeList.map((badge, idx) => (
            <img
              key={idx}
              src={badge.src}
              alt={badge.alt}
              className="h-6 sm:h-8 md:h-10"
              loading="lazy"
            />
          ))}
        </div>
        <div className="mt-4 text-center text-sm sm:text-base md:text-lg dark:text-gray-300 text-gray-900 px-2">
          MERN Stack Developer | Node.js & Backend Developer | React | Express.js |
          MySQL | MongoDB | Data Structures | Problem Solver
        </div>
      </div>
       {/* Social Links Section - Fun & Modern UI */}
      <div className="w-full max-w-xl flex flex-col items-start gap-4 mt-5 ">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center pl-2 border-l-amber-300 border-l-4 flex items-center gap-2 [text-shadow:0_0_25px_hsl(var(--primary)/0.3)] ">
         My <span className="text-[hsl(var(--primary))]">Social Links</span>
        </h2>
        <p className="dark:text-gray-300 text-gray-900 text-start text-base sm:text-lg mb-2">
          Let's connect and have some fun! Follow, star, or DM me on your favorite platform. 🚀
        </p>
        <div className="flex gap-8 justify-center dark:text-gray-200 text-gray-900">
          <a href="https://github.com/Kamleshkumawt" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-10 w-10 rounded-full bg-gray-700 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)]  " />
              <span className="text-xs  mt-1">GitHub</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kamlesh-kumawat-598988330/" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-10 w-10 rounded-full bg-blue-700 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)]  " />
              <span className="text-xs mt-1">LinkedIn</span>
            </div>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="h-10 w-10 rounded-full bg-blue-400 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)]   " />
              <span className="text-xs mt-1">Twitter</span>
            </div>
          </a>
          <a href="mailto:kamleshkumwt12th@gmail.com" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="h-10 w-10 rounded-full bg-red-500 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)]   " />
              <span className="text-xs mt-1">Email</span>
            </div>
          </a>
          <a href="https://www.instagram.com/kamleshkumawat68" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-10 w-10 rounded-full bg-pink-500 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)] " />
              <span className="text-xs mt-1">Instagram</span>
            </div>
          </a>
        </div>
        <div className="mt-4 text-center text-sm dark:text-blue-200  text-blue-800">
          <span>✨ Let's build, share, and laugh together! ✨</span>
        </div>
      </div>
    </div>
  );
};

export default Skill