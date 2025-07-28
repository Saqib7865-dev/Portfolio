import aboutImg from "../assets/About-Img1.jpeg";
import { useEffect } from "react";
import Aos from "aos";
import { Element } from "react-scroll";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <Element name="about">
      <section className="bg-hero-gradient flex flex-col gap-y-10 md:gap-y-18 items-center px-4 py-12 lg:p-20 scroll-smooth">
        <h4
          className="font-roboto text-xl sm:text-2xl md:text-3xl font-bold uppercase text-primary-900 dark:text-dark-text-primary"
          data-aos="fade-up"
        >
          About Me
        </h4>
        <div className="container flex flex-col w-full items-center gap-y-10 md:gap-y-12">
          <div className="section-1 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row gap-x-10 items-center justify-center w-full md:max-w-full">
            <div className="textPart bg-card-gradient p-6 md:p-8 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm">
              <p
                className="font-roboto text-justify w-full md:max-w-11/12 text-text-primary dark:text-dark-text-secondary leading-relaxed"
                data-aos="fade-right"
              >
                My name is{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  Muhammad Saqib Ali
                </span>
                , and I am a passionate web developer based in Lahore, Pakistan.
                My journey into web development began in 2021, shortly after I
                enrolled in my Bachelor's degree in Computer Science. Fueled by
                curiosity and determination, I started learning through YouTube
                tutorials and intensive courses led by renowned instructors such
                as{" "}
                <span className="font-semibold text-accent-600 dark:text-accent-400">
                  Angela Yu
                </span>
                .
              </p>
              <br />
              <p
                className="font-roboto text-justify w-full md:max-w-11/12 text-text-primary dark:text-dark-text-secondary leading-relaxed"
                data-aos="fade-right"
              >
                Over time, I developed a strong foundation in frontend
                development, building multiple responsive and visually engaging
                projects—both by following tutorials and through self-driven
                exploration. I take pride in{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  crafting beautiful user interfaces
                </span>{" "}
                and implementing{" "}
                <span className="font-semibold text-accent-600 dark:text-accent-400">
                  complex interactive logic
                </span>{" "}
                that delivers a seamless user experience.
              </p>
            </div>
            <div className="img">
              <div className="relative">
                <div className="absolute inset-0 bg-border-gradient rounded-lg blur-sm opacity-75"></div>
                <img
                  src={aboutImg}
                  alt="Muhammad Saqib Ali"
                  className="relative w-full min-w-40 rounded-lg border-2 border-border dark:border-dark-border shadow-xl"
                  data-aos="flip-right"
                />
              </div>
            </div>
          </div>

          <div className="section-2 flex flex-col gap-y-10 lg:gap-x-10 lg:gap-y-0 lg:flex-row items-center justify-center w-full md:max-w-full">
            <div className="img">
              <div className="relative hidden lg:inline-block">
                <div className="absolute inset-0 bg-border-gradient rounded-lg blur-sm opacity-75"></div>
                <img
                  src={aboutImg}
                  alt="Muhammad Saqib Ali"
                  className="relative w-full min-w-40 rounded-lg border-2 border-border dark:border-dark-border shadow-xl"
                  data-aos="flip-left"
                />
              </div>
            </div>
            <div className="textPart md:flex md:flex-col md:items-end">
              <div className="bg-card-gradient p-6 md:p-8 rounded-xl border border-border dark:border-dark-border shadow-lg backdrop-blur-sm">
                <p
                  className="font-roboto text-justify w-full md:max-w-11/12 text-text-primary dark:text-dark-text-secondary leading-relaxed"
                  data-aos="fade-right"
                >
                  With a solid grasp of{" "}
                  <span className="font-semibold text-warning-600 dark:text-warning-400">
                    JavaScript
                  </span>
                  , I moved on to mastering{" "}
                  <span className="font-semibold text-info-600 dark:text-info-400">
                    ReactJS
                  </span>
                  , a journey I continue to build on today. Additionally, I have
                  worked professionally as a{" "}
                  <span className="font-semibold text-success-600 dark:text-success-400">
                    Next.js developer
                  </span>
                  , where I contributed to the development of a fully API-driven
                  website, built from the ground up using modern frontend
                  practices.
                </p>
                <br />
                <p
                  className="font-roboto text-justify w-full md:max-w-11/12 text-text-primary dark:text-dark-text-secondary leading-relaxed"
                  data-aos="fade-right"
                >
                  To formalize and deepen my expertise, I earned{" "}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    international MERN Stack certification
                  </span>{" "}
                  through{" "}
                  <span className="font-semibold text-accent-600 dark:text-accent-400">
                    NAVTTC
                  </span>
                  , and a{" "}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    national-level MERN Stack certification
                  </span>{" "}
                  through{" "}
                  <span className="font-semibold text-accent-600 dark:text-accent-400">
                    ShellShift
                  </span>
                  . During my time at ShellShift, I created a dedicated{" "}
                  <span className="font-semibold text-info-600 dark:text-info-400">
                    technology blog platform
                  </span>{" "}
                  for my instructor—a project that now serves as a resource hub
                  for future students seeking guidance, notes, and articles on
                  web technologies.
                </p>
                <br />
                <p
                  className="font-roboto text-justify w-full md:max-w-11/12 text-text-primary dark:text-dark-text-secondary leading-relaxed"
                  data-aos="fade-right"
                >
                  Today, I continue to refine my skills in modern frontend
                  frameworks and look forward to building applications that are
                  not only efficient and scalable but also offer exceptional
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
