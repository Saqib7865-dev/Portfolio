import { Link } from "react-router-dom";
import projectImg from "../assets/mern-stack.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import Projects from "../data/Projects";

const AllProjects = () => {
  const [searchedProject, setSearchedProject] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  useEffect(() => {
    const filteredProjects = Projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchedProject.toLowerCase()) ||
        project.category.toLowerCase().includes(searchedProject.toLowerCase())
    );
    setFilteredProjects(filteredProjects);
  }, [searchedProject]);

  const checkValidity = (tag) => {
    let resp = filteredProjects.filter(
      (item) =>
        item.title.toLowerCase().includes(tag.toLowerCase()) ||
        item.category.toLowerCase().includes(tag.toLowerCase())
    );
    if (resp.length > 0) return true;
    return false;
  };

  return (
    <div className="p-5 sm:p-10 md:p-20 bg-hero-gradient min-h-11/12">
      <h2
        className="font-roboto font-semibold text-3xl uppercase text-center text-primary-900 dark:text-dark-text-primary mb-4"
        data-aos="fade-up"
      >
        All Projects
      </h2>
      <div className="py-5 md:py-10">
        <form className="md:bg-background dark:bg-dark-surface p-1 md:py-3 md:px-4 w-full font-roboto md:border md:border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary md:shadow-lg rounded-lg hover:shadow-xl flex justify-between items-center gap-2 gap-x-4 flex-col md:flex-row">
          <select
            onChange={(e) => setSelectedValue(e.target.value)}
            name="category"
            id="category"
            className="bg-background dark:bg-dark-surface p-2 md:py-3 md:px-4 w-full font-roboto outline-none border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted shadow-lg rounded-lg transition-all duration-300 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 hover:shadow-xl appearance-none"
          >
            <option
              value=""
              selected
              disabled
              className="text-text-muted dark:text-dark-text-muted"
            >
              Select Project Category
            </option>
            <option
              value="frontend"
              className="text-text-primary dark:text-dark-text-primary"
            >
              Frontend Projects
            </option>
            <option
              value="Landing_Page"
              className="text-text-primary dark:text-dark-text-primary"
            >
              Landing Pages
            </option>
            <option
              value="backend"
              className="text-text-primary dark:text-dark-text-primary"
            >
              Backend Projects
            </option>
            <option
              value="mern"
              className="text-text-primary dark:text-dark-text-primary"
            >
              MERN Stack Projects
            </option>
          </select>
          <input
            type="text"
            name="fullname"
            required
            value={searchedProject}
            id="fullname"
            className="bg-background dark:bg-dark-surface p-2 md:py-3 md:px-4 w-full font-roboto outline-none border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted shadow-lg rounded-lg transition-all duration-300 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 hover:shadow-xl"
            placeholder="Search Project"
            tabIndex={0}
            autoComplete="off"
            onChange={(e) => {
              setSearchedProject(e.target.value);
            }}
          />
        </form>

        {(selectedValue === "" || selectedValue === "Landing_Page") &&
          checkValidity("Landing_Page") && (
            <div className="landingpages py-5 md:py-14">
              <h3 className="py-5 text-text-primary dark:text-dark-text-primary relative w-full z-10 font-bold text-lg after:content-[''] after:w-full after:h-px after:bg-dark-surface-alt after:absolute after:left-0 after:right-0 after:bottom-2 after:shadow">
                Landing Pages
              </h3>
              <div className="projects-container grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 md:gap-8 w-full items-stretch pt-6">
                {filteredProjects.map((project, idx) => {
                  return (
                    project.category === "Landing_Page" && (
                      <Link to="/project/1" data-aos="fade-right" key={idx}>
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
                              <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
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
                    )
                  );
                })}
              </div>
            </div>
          )}

        {(selectedValue === "" || selectedValue === "frontend") &&
          checkValidity("frontend") && (
            <div className="frontend py-14">
              <h3 className="py-5 text-text-primary dark:text-dark-text-primary relative w-full z-10 font-bold text-lg after:content-[''] after:w-full after:h-px after:bg-dark-surface-alt after:absolute after:left-0 after:right-0 after:bottom-2 after:shadow">
                Frontend Projects
              </h3>
              <div className="projects-container grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 md:gap-8 w-full items-stretch pt-6">
                {filteredProjects.map((project, idx) => {
                  return (
                    project.category === "frontend" && (
                      <Link to="/project/1" data-aos="fade-right" key={idx}>
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
                              <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
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
                    )
                  );
                })}
              </div>
            </div>
          )}

        {(selectedValue === "" || selectedValue === "backend") &&
          checkValidity("backend") && (
            <div className="backend py-14 hidden">
              <h3 className="py-5 text-text-primary dark:text-dark-text-primary relative w-full z-10 font-bold text-lg after:content-[''] after:w-full after:h-px after:bg-dark-surface-alt after:absolute after:left-0 after:right-0 after:bottom-2 after:shadow">
                Backend Projects
              </h3>
              <div className="projects-container grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 md:gap-8 w-full items-stretch pt-6">
                {filteredProjects.map((project, idx) => {
                  return (
                    project.category === "backend" && (
                      <Link to="/project/1" data-aos="fade-right" key={idx}>
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
                              <span className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:items-center xl:gap-x-2 mt-2">
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
                    )
                  );
                })}
              </div>
            </div>
          )}

        {(selectedValue === "" || selectedValue === "mern") &&
          checkValidity("mern") && (
            <div className="mern py-14">
              <h3 className="py-5 text-text-primary dark:text-dark-text-primary relative w-full z-10 font-bold text-lg after:content-[''] after:w-full after:h-px after:bg-dark-surface-alt after:absolute after:left-0 after:right-0 after:bottom-2 after:shadow">
                MERN Stack Projects
              </h3>
              <div className="projects-container grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 md:gap-8 w-full items-stretch pt-6">
                {filteredProjects.map((project, idx) => {
                  return (
                    project.category === "mern" && (
                      <Link to="/project/1" data-aos="fade-right" key={idx}>
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
                    )
                  );
                })}
              </div>
            </div>
          )}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-card-gradient hover:bg-surface-alt dark:hover:bg-dark-surface-alt border border-border dark:border-dark-border px-6 py-3 cursor-pointer text-text-primary dark:text-dark-text-primary hover:text-primary-600 dark:hover:text-primary-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out font-roboto font-medium flex items-center gap-x-2 group"
          data-aos="fade-up"
          onClick={() => history.back()}
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
};

export default AllProjects;
