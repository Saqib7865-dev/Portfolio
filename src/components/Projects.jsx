import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import { Element } from "react-scroll";
import projects from "../data/Projects";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <Element name="projects">
      <section className="bg-hero-gradient flex flex-col gap-y-10 py-6 px-3 overflow-x-hidden md:pt-16 md:px-20 md:pb-10">
        <div className="flex flex-col gap-y-18 items-center">
          <h4
            className="font-roboto text-xl md:text-3xl font-bold uppercase text-primary-900 dark:text-dark-text-primary"
            data-aos="fade-up"
          >
            Projects
          </h4>
          <div className="projects-container grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-4 md:gap-8 w-full items-center">
            {projects.slice(0, 6).map((project, idx) => (
              <Link
                to={`/project/${project.id}`}
                data-aos="fade-right"
                key={idx}
              >
                <div className="project bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded-xl shadow-xl border border-border dark:border-dark-border backdrop-blur-sm group">
                  <div className="img relative overflow-hidden rounded-t-xl">
                    <div className="absolute inset-0 bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <img
                      src={project.main_img}
                      alt={project.title}
                      className="md:max-h-64 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="body py-6 px-4 flex flex-col gap-y-3">
                    <h4 className="text-xl uppercase font-bold font-roboto text-text-primary dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="font-semibold font-roboto text-text-secondary dark:text-dark-text-secondary">
                      Tech Stack:{" "}
                      <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row flex-wrap xl:items-center xl:gap-x-2 mt-2">
                        {project.stack.map((st, stid) => (
                          <span
                            key={stid}
                            className={`font-roboto bg-info-100 dark:bg-info-900/30 w-fit rounded-lg text-sm px-3 py-1 font-normal border ${st.color}`}
                          >
                            {st.name}
                          </span>
                        ))}
                      </span>
                    </p>
                    <span>
                      <span className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary">
                        Description:
                      </span>
                      <p className="text-justify font-roboto mt-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {project.description.slice(
                          0,
                          project.id === 3 ? 180 : 200
                        )}{" "}
                        ...{" "}
                        <Link
                          to={`/project/${project.id}`}
                          className="font-bold text-primary-500 dark:text-dark-text-primary"
                        >
                          Read more
                        </Link>
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* <Link to="/project/2" data-aos="fade-up">
              <div className="project bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded-xl shadow-xl border border-border dark:border-dark-border backdrop-blur-sm group">
                <div className="img relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    src={projectImg}
                    alt="E-Commerce Platform"
                    className="md:max-h-64 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="body py-6 px-4 flex flex-col gap-y-3">
                  <h4 className="text-xl uppercase font-bold font-roboto text-text-primary dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    E-Commerce Platform
                  </h4>
                  <p className="font-semibold font-roboto text-text-secondary dark:text-dark-text-secondary">
                    Tech Stack:{" "}
                    <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
                      <span className="font-roboto bg-success-100 dark:bg-success-900/30 w-fit rounded-lg text-sm px-3 py-1 text-success-600 dark:text-success-400 font-normal border border-success-200 dark:border-success-800">
                        Next.js
                      </span>
                      <span className="font-roboto bg-accent-100 dark:bg-accent-900/30 w-fit rounded-lg text-sm px-3 py-1 text-accent-600 dark:text-accent-400 font-normal border border-accent-200 dark:border-accent-800">
                        Firebase
                      </span>
                      <span className="font-roboto bg-primary-100 dark:bg-primary-900/30 w-fit rounded-lg text-sm px-3 py-1 text-primary-600 dark:text-primary-400 font-normal border border-primary-200 dark:border-primary-800">
                        Stripe
                      </span>
                    </span>
                  </p>
                  <span>
                    <span className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary">
                      Description:
                    </span>
                    <p className="text-justify font-roboto mt-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      A full-featured e-commerce solution with payment
                      integration, inventory management, and user analytics.
                      Built with modern technologies for optimal performance and
                      scalability.
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/project/3" data-aos="fade-left">
              <div className="project bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded-xl shadow-xl border border-border dark:border-dark-border backdrop-blur-sm group">
                <div className="img relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    src={projectImg}
                    alt="Portfolio Website"
                    className="md:max-h-64 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="body py-6 px-4 flex flex-col gap-y-3">
                  <h4 className="text-xl uppercase font-bold font-roboto text-text-primary dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    Portfolio Website
                  </h4>
                  <p className="font-semibold font-roboto text-text-secondary dark:text-dark-text-secondary">
                    Tech Stack:{" "}
                    <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
                      <span className="font-roboto bg-info-100 dark:bg-info-900/30 w-fit rounded-lg text-sm px-3 py-1 text-info-600 dark:text-info-400 font-normal border border-info-200 dark:border-info-800">
                        React
                      </span>
                      <span className="font-roboto bg-primary-100 dark:bg-primary-900/30 w-fit rounded-lg text-sm px-3 py-1 text-primary-600 dark:text-primary-400 font-normal border border-primary-200 dark:border-primary-800">
                        Framer Motion
                      </span>
                      <span className="font-roboto bg-accent-100 dark:bg-accent-900/30 w-fit rounded-lg text-sm px-3 py-1 text-accent-600 dark:text-accent-400 font-normal border border-accent-200 dark:border-accent-800">
                        GSAP
                      </span>
                    </span>
                  </p>
                  <span>
                    <span className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary">
                      Description:
                    </span>
                    <p className="text-justify font-roboto mt-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      A modern, animated portfolio showcasing web development
                      projects with smooth transitions, interactive elements,
                      and optimized performance across all devices.
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/project/3" data-aos="fade-left">
              <div className="project bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded-xl shadow-xl border border-border dark:border-dark-border backdrop-blur-sm group">
                <div className="img relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    src={projectImg}
                    alt="Portfolio Website"
                    className="md:max-h-64 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="body py-6 px-4 flex flex-col gap-y-3">
                  <h4 className="text-xl uppercase font-bold font-roboto text-text-primary dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    Portfolio Website
                  </h4>
                  <p className="font-semibold font-roboto text-text-secondary dark:text-dark-text-secondary">
                    Tech Stack:{" "}
                    <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
                      <span className="font-roboto bg-info-100 dark:bg-info-900/30 w-fit rounded-lg text-sm px-3 py-1 text-info-600 dark:text-info-400 font-normal border border-info-200 dark:border-info-800">
                        React
                      </span>
                      <span className="font-roboto bg-primary-100 dark:bg-primary-900/30 w-fit rounded-lg text-sm px-3 py-1 text-primary-600 dark:text-primary-400 font-normal border border-primary-200 dark:border-primary-800">
                        Framer Motion
                      </span>
                      <span className="font-roboto bg-accent-100 dark:bg-accent-900/30 w-fit rounded-lg text-sm px-3 py-1 text-accent-600 dark:text-accent-400 font-normal border border-accent-200 dark:border-accent-800">
                        GSAP
                      </span>
                    </span>
                  </p>
                  <span>
                    <span className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary">
                      Description:
                    </span>
                    <p className="text-justify font-roboto mt-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      A modern, animated portfolio showcasing web development
                      projects with smooth transitions, interactive elements,
                      and optimized performance across all devices.
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/project/3" data-aos="fade-left">
              <div className="project bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded-xl shadow-xl border border-border dark:border-dark-border backdrop-blur-sm group">
                <div className="img relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    src={projectImg}
                    alt="Portfolio Website"
                    className="md:max-h-64 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="body py-6 px-4 flex flex-col gap-y-3">
                  <h4 className="text-xl uppercase font-bold font-roboto text-text-primary dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    Portfolio Website
                  </h4>
                  <p className="font-semibold font-roboto text-text-secondary dark:text-dark-text-secondary">
                    Tech Stack:{" "}
                    <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
                      <span className="font-roboto bg-info-100 dark:bg-info-900/30 w-fit rounded-lg text-sm px-3 py-1 text-info-600 dark:text-info-400 font-normal border border-info-200 dark:border-info-800">
                        React
                      </span>
                      <span className="font-roboto bg-primary-100 dark:bg-primary-900/30 w-fit rounded-lg text-sm px-3 py-1 text-primary-600 dark:text-primary-400 font-normal border border-primary-200 dark:border-primary-800">
                        Framer Motion
                      </span>
                      <span className="font-roboto bg-accent-100 dark:bg-accent-900/30 w-fit rounded-lg text-sm px-3 py-1 text-accent-600 dark:text-accent-400 font-normal border border-accent-200 dark:border-accent-800">
                        GSAP
                      </span>
                    </span>
                  </p>
                  <span>
                    <span className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary">
                      Description:
                    </span>
                    <p className="text-justify font-roboto mt-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      A modern, animated portfolio showcasing web development
                      projects with smooth transitions, interactive elements,
                      and optimized performance across all devices.
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/project/3" data-aos="fade-left">
              <div className="project bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded-xl shadow-xl border border-border dark:border-dark-border backdrop-blur-sm group">
                <div className="img relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-border-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    src={projectImg}
                    alt="Portfolio Website"
                    className="md:max-h-64 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="body py-6 px-4 flex flex-col gap-y-3">
                  <h4 className="text-xl uppercase font-bold font-roboto text-text-primary dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    Portfolio Website
                  </h4>
                  <p className="font-semibold font-roboto text-text-secondary dark:text-dark-text-secondary">
                    Tech Stack:{" "}
                    <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
                      <span className="font-roboto bg-info-100 dark:bg-info-900/30 w-fit rounded-lg text-sm px-3 py-1 text-info-600 dark:text-info-400 font-normal border border-info-200 dark:border-info-800">
                        React
                      </span>
                      <span className="font-roboto bg-primary-100 dark:bg-primary-900/30 w-fit rounded-lg text-sm px-3 py-1 text-primary-600 dark:text-primary-400 font-normal border border-primary-200 dark:border-primary-800">
                        Framer Motion
                      </span>
                      <span className="font-roboto bg-accent-100 dark:bg-accent-900/30 w-fit rounded-lg text-sm px-3 py-1 text-accent-600 dark:text-accent-400 font-normal border border-accent-200 dark:border-accent-800">
                        GSAP
                      </span>
                    </span>
                  </p>
                  <span>
                    <span className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary">
                      Description:
                    </span>
                    <p className="text-justify font-roboto mt-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      A modern, animated portfolio showcasing web development
                      projects with smooth transitions, interactive elements,
                      and optimized performance across all devices.
                    </p>
                  </span>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
        <div className="see-all w-full text-end md:pr-10">
          <Link to="/all-projects" data-aos="fade-left">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-btn-primary-gradient rounded-lg blur-sm opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
              <button className="relative border-2 border-border dark:border-dark-border bg-card-gradient hover:bg-btn-primary-gradient px-6 py-3 rounded-lg shadow-lg hover:shadow-xl active:shadow-md hover:border-primary-500 dar:hover:text-white active:text-white text-text-secondary dark:text-dark-text-secondary hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out font-roboto cursor-pointer text-xs md:text-base font-semibold uppercase tracking-wide backdrop-blur-sm">
                See All Projects
              </button>
            </div>
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
