import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed text-center p-3 dark:text-white text-gray-900 w-full flex h-[70px] bg-transparent z-50">
      <nav className="flex relative w-full h-[70px] bg-transparent">
        {/* Sidebar
        <Sidebar /> */}
        <div className="flex items-center justify-between w-full h-16 cursor-pointer bg-transparent px-4">
          <span className="text-2xl">
            <a
              href="#"
              className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-70 hover:opacity-100 "
            >
              Kamlesh
            </a>
          </span>
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center z-50 gap-5">
            <ThemeToggle />

            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              <span
                className={`block w-7 h-1 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-gray-800 dark:bg-white rounded my-1 transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
          {/* Nav links */}

          <ul
            className={`flex-col md:flex-row md:flex items-center gap-8 font-sans text-lg cursor-pointer absolute md:static top-[55px] left-0 w-full md:w-auto transition-all duration-300 md:pr-10 ${
              open
                ? "flex dark:bg-gray-900/90 bg-gray-100 py-10 pb-80"
                : "hidden md:flex md:bg-transparent"
            } transition-all duration-300 z-40`}
          >
            <li
              onClick={() => setOpen(false)}
              className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center"
            >
              <a href="#">Home</a>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center"
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center"
            >
              <a href="#skill">Skill</a>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center"
            >
              <a href="#Work">Project</a>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="hover:scale-110 active:scale-95 transition-all duration-200 opacity-60 hover:opacity-100 py-2 md:py-0 text-center"
            >
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="fixed hidden top-6 right-4 z-50 md:flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
