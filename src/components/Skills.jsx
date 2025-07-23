import { useEffect, useState } from "react";
import sideImg from "../assets/bg.svg";
import Aos from "aos";
import { Element } from "react-scroll";

const Skills = () => {
  const [fill, setFill] = useState(false);
  useEffect(() => {
    setFill(true);
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <Element name="skills">
      <section className="bg-hero-gradient flex flex-col gap-y-10 md:gap-y-18 items-center p-10 md:p-20">
        <h4
          className="font-roboto text-xl md:text-3xl font-bold uppercase text-primary-900 dark:text-dark-text-primary"
          data-aos="fade-up"
        >
          Skills
        </h4>
        <div className="container flex flex-col md:grid md:grid-cols-1 w-full md:items-center gap-10">
          <div className="left flex flex-col md:grid md:grid-cols-3 gap-y-10 gap-x-10 justify-center w-full">
            {/* HTML */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-accent-600 dark:text-accent-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  HTML
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  91%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[91%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-accent-500), var(--color-accent-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* CSS */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-primary-600 dark:text-primary-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  CSS
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  85%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[85%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-primary-500), var(--color-primary-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* Tailwind */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-info-600 dark:text-info-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  Tailwind
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  82%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[82%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-info-500), var(--color-info-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* Bootstrap */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-primary-700 dark:text-primary-300 font-semibold text-sm md:text-base uppercase tracking-wide">
                  Bootstrap
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  80%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[80%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-primary-600), var(--color-primary-700))`,
                  }}
                ></div>
              </div>
            </div>

            {/* JavaScript */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-warning-600 dark:text-warning-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  JavaScript
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  80%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[80%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-warning-500), var(--color-warning-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* React.js */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-info-600 dark:text-info-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  React.js
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  88%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[88%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-info-500), var(--color-info-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* Next.js */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-text-primary dark:text-dark-text-primary font-semibold text-sm md:text-base uppercase tracking-wide">
                  Next.js
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  75%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[75%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-surface-800), var(--color-surface-900))`,
                  }}
                ></div>
              </div>
            </div>

            {/* Node.js */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-success-600 dark:text-success-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  Node.js
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  65%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[65%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-success-500), var(--color-success-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* Express.js */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-text-primary dark:text-dark-text-primary font-semibold text-sm md:text-base uppercase tracking-wide">
                  Express.js
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  75%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[75%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-surface-700), var(--color-surface-800))`,
                  }}
                ></div>
              </div>
            </div>

            {/* MongoDB */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-success-600 dark:text-success-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  MongoDB
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  80%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[80%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-success-500), var(--color-success-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* MySQL */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-info-600 dark:text-info-400 font-semibold text-sm md:text-base uppercase tracking-wide">
                  MySQL
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  75%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[75%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-info-500), var(--color-info-600))`,
                  }}
                ></div>
              </div>
            </div>

            {/* GitHub */}
            <div
              className="skill bg-card-gradient p-4 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm flex flex-col gap-y-3 md:gap-y-4"
              data-aos="fade-right"
            >
              <div className="flex justify-between items-center">
                <div className="title font-roboto text-text-primary dark:text-dark-text-primary font-semibold text-sm md:text-base uppercase tracking-wide">
                  GitHub
                </div>
                <div className="percentage font-roboto text-text-secondary dark:text-dark-text-secondary text-xs md:text-sm font-medium">
                  60%
                </div>
              </div>
              <div className="w-full bg-surface-200 dark:bg-dark-surface-700 rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    fill ? "w-[60%]" : "w-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, var(--color-surface-700), var(--color-surface-800))`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="right hidden flex-col gap-y-6 justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-border-gradient rounded-full blur-lg opacity-30"></div>
              <div className="relative bg-card-gradient p-8 rounded-full border-2 border-border dark:border-dark-border shadow-2xl backdrop-blur-sm">
                <img
                  src={sideImg}
                  alt="Skills Illustration"
                  className="max-w-52 transition-transform duration-500 hover:scale-110 filter drop-shadow-lg dark:invert"
                  data-aos="flip-right"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h5 className="font-roboto text-lg font-bold text-primary-600 dark:text-primary-400 mb-2">
                Full Stack Developer
              </h5>
              <p className="font-roboto text-sm text-text-secondary dark:text-dark-text-secondary max-w-48">
                Passionate about creating scalable web applications with modern
                technologies
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
