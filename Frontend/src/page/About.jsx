
const About = () => {
  return (
    <div
      className="h-full max-w-full flex flex-col gap-5 items-start justify-center px-2 py-8 md:px-8 md:py-6 bg-gray-100 dark:bg-gradient-to-b from-gray-800 to-gray-900  dark:text-white text-gray-900"
    >
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 mt-10  text-center border-l-amber-300 border-l-4 pl-2"  
        // bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent
      >
        About Me
      </h1>
      <p
        className="max-w-md sm:max-w-xl md:max-w-7xl text-sm sm:text-lg md:text-xl font-medium dark:text-gray-100 text-gray-900 text-start leading-relaxed px-2"
      >
        I am a passionate and driven{" "}
        <span className="font-semibold text-green-400">MERN Stack Developer</span>{" "}
        with 1 year of experience in building dynamic and scalable web applications. I have hands-on experience working with{" "}
        <span className="font-semibold text-blue-400">Node.js</span>,{" "}
        <span className="font-semibold text-green-400">MongoDB</span>,{" "}
        <span className="font-semibold text-blue-300">MySQL</span>, and{" "}
        <span className="font-semibold text-cyan-400">React</span>, and am continually expanding my skills to stay updated with the latest trends in web development.
        <br />
        <br />
        In addition to my core stack, I am proficient in{" "}
        <span className="font-semibold text-yellow-300">JavaScript</span>,{" "}
        <span className="font-semibold text-gray-300">Express.js</span>,{" "}
        <span className="font-semibold text-teal-300">Tailwind CSS</span>,{" "}
        <span className="font-semibold text-purple-300">Bootstrap</span>, and{" "}
        <span className="font-semibold text-pink-400">Framer Motion</span> for creating responsive, user-friendly, and visually appealing web applications. I am also learning{" "}
        <span className="font-semibold text-red-400">Cybersecurity</span> to enhance my ability to develop secure applications and systems.
        <br />
        <br />
        I have a strong foundation in{" "}
        <span className="font-semibold text-blue-400">C</span>,{" "}
        <span className="font-semibold text-blue-400">C++</span>, and Object-Oriented Programming (OOP), with a solid understanding of Data Structures & Algorithms. My goal is to leverage this knowledge to build scalable, efficient, and secure applications.
        <br />
        <br />
        I am always excited to learn new technologies and am currently exploring{" "}
        <span className="font-semibold text-cyan-300">DaisyUI</span> and{" "}
        <span className="font-semibold text-teal-300">Tailwind CSS</span> to create better user interfaces. I am looking for opportunities to apply my skills in real-world projects and collaborate with others in the tech community.
      </p>
      
      {/* <div
        className="w-full flex flex-col items-start gap-5 mt-8"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-start border-l-amber-300 border-l-4 pl-2">
          My Tech Stack
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
        <div className="mt-4 text-center text-sm sm:text-base md:text-lg text-gray-300 px-2">
          MERN Stack Developer | Node.js & Backend Developer | React | Express.js |
          MySQL | MongoDB | Data Structures | Problem Solver
        </div>
      </div> */}
    </div>
  );
};

export default About;