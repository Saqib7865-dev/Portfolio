import { WiMoonAltWaxingCrescent6 } from "react-icons/wi";
import headerImg from "../assets/Header-Img.jpg";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    let isDark = localStorage.getItem("isDark");
    if (isDark && isDark == "true") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNavbar]);

  const handleThemeToggle = () => {
    document.querySelector("body").classList.toggle("dark");
    if (!document.querySelector("body").classList.contains("dark")) {
      localStorage.setItem("isDark", false);
      return;
    }
    localStorage.setItem("isDark", true);
  };

  return (
    <div className="z-50 dark:bg-dark-background bg-background transition-all duration-700 ease-in-out w-full py-3 flex items-center justify-between px-10 md:px-0 md:justify-around shadow max-w-screen sticky top-0">
      <RouterLink to="/">
        <div id="logo" className="rounded-full w-fit">
          <img
            src={headerImg}
            alt="Image"
            className="max-w-14 md:max-w-20 rounded-full"
          />
        </div>
      </RouterLink>
      <ul className="hidden items-center gap-x-4 md:flex">
        <li className="flex flex-col group">
          <ScrollLink
            to="/"
            spy={true}
            duration={100}
            smooth={true}
            offset={-100}
            className="font-roboto uppercase text-text-primary dark:text-dark-text-primary font-normal cursor-pointer transition-all duration-200 ease-in-out relative after:content-[''] after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:absolute after:transition-all after:duration-1000 after:ease-in-out after:-bottom-2 after:left-0 after:w-0"
            activeClass="after:right-0 after:w-full"
          >
            Home
          </ScrollLink>
        </li>

        <li className="flex flex-col group">
          <ScrollLink
            to="about"
            spy={true}
            duration={100}
            smooth={true}
            offset={-100}
            className="font-roboto uppercase text-text-primary dark:text-dark-text-primary font-normal cursor-pointer transition-all duration-200 ease-in-out relative after:content-[''] after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:absolute after:transition-all after:duration-1000 after:ease-in-out after:-bottom-2 after:left-0 after:w-0"
            activeClass="after:right-0 after:w-full"
          >
            About
          </ScrollLink>
        </li>

        <li className="flex flex-col group">
          <ScrollLink
            to="projects"
            spy={true}
            duration={100}
            smooth={true}
            offset={-100}
            className="font-roboto uppercase text-text-primary dark:text-dark-text-primary font-normal cursor-pointer transition-all duration-200 ease-in-out relative after:content-[''] after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:absolute after:transition-all after:duration-1000 after:ease-in-out after:-bottom-2 after:left-0 after:w-0"
            activeClass="after:right-0 after:w-full"
          >
            Project
          </ScrollLink>
        </li>
        <li className="flex flex-col group">
          <ScrollLink
            to="skills"
            spy={true}
            duration={100}
            smooth={true}
            offset={-100}
            className="font-roboto uppercase text-text-primary dark:text-dark-text-primary font-normal cursor-pointer transition-all duration-200 ease-in-out relative after:content-[''] after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:absolute after:transition-all after:duration-1000 after:ease-in-out after:-bottom-2 after:left-0 after:w-0"
            activeClass="after:right-0 after:w-full"
          >
            Skills
          </ScrollLink>
        </li>
        <li className="flex flex-col group">
          <ScrollLink
            to="contact"
            spy={true}
            duration={100}
            smooth={true}
            offset={-100}
            className="font-roboto uppercase text-text-primary dark:text-dark-text-primary font-normal cursor-pointer transition-all duration-200 ease-in-out relative after:content-[''] after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:absolute after:transition-all after:duration-1000 after:ease-in-out after:-bottom-2 after:left-0 after:w-0"
            activeClass="after:right-0 after:w-full"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div id="theme" className="hidden md:inline-block">
        <WiMoonAltWaxingCrescent6
          className="text-2xl cursor-pointer text-text-primary dark:text-dark-text-primary dark:hover:filter dark:hover:drop-shadow-[0_0_8px_#eab308] transition-all duration-700 ease-in-out"
          onClick={handleThemeToggle}
        />
      </div>

      {/* Small devices */}
      <div className="flex items-center justify-center space-x-4">
        <div
          className="hamburger md:hidden"
          onClick={() => setShowNavbar(true)}
        >
          <RxHamburgerMenu className="text-text-primary dark:text-dark-text-primary text-xl cursor-pointer" />
        </div>
        <div id="theme" className="inline-block md:hidden">
          <WiMoonAltWaxingCrescent6
            className="text-2xl cursor-pointer text-text-primary dark:text-dark-text-primary dark:hover:filter dark:hover:drop-shadow-[0_0_8px_#eab308] transition-all duration-700 ease-in-out"
            onClick={handleThemeToggle}
          />
        </div>
      </div>

      <div
        className={`sidebar md:hidden fixed top-0 bottom-0 p-5 bg-background dark:bg-dark-background w-screen min-h-screen transition-all duration-300 ease-in-out ${
          showNavbar ? "right-0" : "-right-[58rem]"
        }`}
      >
        <div className="topbar text-text-primary dark:text-dark-text-primary font-roboto text-end cursor-pointer">
          <span onClick={() => setShowNavbar(false)}>X</span>
        </div>
        <ul className="navlinks h-full flex flex-col gap-y-6 items-center justify-center">
          <li>
            <ScrollLink
              to="/"
              offset={-100}
              spy={true}
              smooth={true}
              duration={300}
              className="text-text-primary dark:text-dark-text-primary font-roboto font-semibold uppercase"
              activeClass="!text-blue-500 dark:!text-blue-400 cursor-pointer"
              onClick={() => setShowNavbar(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              offset={-100}
              spy={true}
              smooth={true}
              duration={300}
              className="text-text-primary dark:text-dark-text-primary font-roboto font-semibold uppercase cursor-pointer"
              activeClass="!text-blue-500 dark:!text-blue-400 cursor-pointer"
              onClick={() => setShowNavbar(false)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              offset={-100}
              spy={true}
              smooth={true}
              duration={300}
              className="text-text-primary dark:text-dark-text-primary font-roboto font-semibold uppercase cursor-pointer"
              activeClass="!text-blue-500 dark:!text-blue-400 cursor-pointer"
              onClick={() => setShowNavbar(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills"
              offset={-100}
              spy={true}
              smooth={true}
              duration={300}
              className="text-text-primary dark:text-dark-text-primary font-roboto font-semibold uppercase cursor-pointer"
              activeClass="!text-blue-500 dark:!text-blue-400"
              onClick={() => setShowNavbar(false)}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              offset={-100}
              spy={true}
              smooth={true}
              duration={300}
              className="text-text-primary dark:text-dark-text-primary font-roboto font-semibold uppercase cursor-pointer"
              activeClass="!text-blue-500 dark:!text-blue-400"
              onClick={() => setShowNavbar(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
