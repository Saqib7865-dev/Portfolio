import { useEffect, useState } from "react";
import sideImg from "../assets/HeroSectionSideImg.png";
import { HiExternalLink } from "react-icons/hi";
import { GoDownload } from "react-icons/go";
import resume from "../assets/Resume.pdf";
import styles from "../styles/HeroSection.module.css";
import { Element } from "react-scroll";

const HeroSection = () => {
  const text = `Passionate frontend developer with a strong command of React.js, Tailwind CSS, and responsive UI design. I specialize in crafting elegant user experiences, optimizing performance, and bringing creative ideas to life through clean, scalable code. Currently building modern, visually impressive web interfaces with a focus on usability and performance.`;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    const delay = deleting ? 20 : 30;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 1) {
          setDeleting(false);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [index, deleting]);

  return (
    <Element name="/">
      <section
        className={`flex items-center h-screen scroll-smooth w-full bg-hero-gradient`}
        id="home"
      >
        <div className="container flex flex-col gap-y-10 md:gap-y-16 md:grid md:grid-cols-2 md:gap-x-10 w-full items-center px-4 md:px-0 max-w-full">
          <div className="left flex flex-col items-center gap-y-6 sm:gap-y-8 justify-center w-full">
            <div className="headings flex flex-col gap-y-0.5 md:max-w-4/5 items-center justify-center">
              <h1
                className={`font-roboto font-bold uppercase text-text-primary dark:text-dark-text-primary transition-all duration-700 ease-in-out text-lg md:text-xl lg:text-2xl tracking-wider ${
                  pageLoaded ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                Muhammad Saqib Ali
              </h1>
              <p
                className={`font-roboto uppercase text-text-secondary dark:text-dark-text-secondary transition-all duration-700 ease-in-out text-xs md:text-sm lg:text-base tracking-wide ${
                  pageLoaded ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                MERN STACK DEVELOPER
              </p>
            </div>
            <p
              className={`text-justify font-roboto text-text-muted dark:text-dark-text-muted transition-all duration-1000 ease-in-out sm:max-w-4/5 md:max-w-full h-auto leading-relaxed tracking-wide text-sm lg:text-base md:pl-8 ${
                pageLoaded ? "translate-x-0" : "-translate-x-72"
              }`}
            >
              {text}
            </p>
            <div
              className={`buttons flex gap-4 w-full items-center justify-center`}
            >
              <a
                href={resume}
                download="MERN_Stack_Dev_Resume.pdf"
                className={`transition-all duration-1000 ${
                  pageLoaded ? "translate-y-0" : "translate-y-8"
                }`}
              >
                <button className="font-roboto text-xs md:text-base font-normal border border-success-500 rounded cursor-pointer text-success-500 p-2 hover:bg-success-500 hover:text-white active:bg-success-600 active:text-white transition-all duration-700 ease-in-out flex gap-x-2 whitespace-nowrap">
                  Download Resume{" "}
                  <GoDownload className="text-base md:text-xl" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/saqib-ali-350410237/"
                target="_blank"
                className={`transition-all duration-1000 ${
                  pageLoaded ? "translate-y-0" : "translate-y-8"
                }`}
              >
                <button className="font-roboto text-xs md:text-base font-normal border border-primary-500 rounded cursor-pointer text-primary-500 p-2 hover:bg-primary-500 active:bg-primary-600 active:text-white hover:text-white transition-all duration-700 ease-in-out w-fit flex gap-x-2">
                  LinkedIn <HiExternalLink className="text-base md:text-2xl" />
                </button>
              </a>
            </div>
          </div>
          <div className="right">
            <img
              src={sideImg}
              alt="Svg Here"
              className={`max-w-64 md:max-w-full transition-all duration-700 ease-in-out ${styles.linearAnimation}`}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default HeroSection;
