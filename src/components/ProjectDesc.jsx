import userImg from "../assets/Header-Img.jpg";
import { useEffect, useState } from "react";
import Aos from "aos";
import Projects from "../data/Projects";
import { useParams } from "react-router-dom";
const ProjectDesc = () => {
  const { projID } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  useEffect(() => {
    let project = Projects.find((project) => project.id == projID);
    setSelectedProject(project);
  }, [projID]);

  useEffect(() => {
    const desc = selectedProject?.description.split("break");
    setDesc(desc);
  }, [selectedProject]);

  return (
    <div className="py-10 px-5 md:p-20 bg-surface dark:bg-dark-surface min-h-screen">
      <h2
        className="font-roboto font-semibold text-xl md:text-3xl uppercase text-center text-text-primary dark:text-dark-text-primary"
        data-aos="fade-up"
      >
        {selectedProject?.title}
      </h2>

      <div className="proj-desc-section py-10 md:py-20">
        <img
          src={selectedProject?.main_img}
          alt="Project Image"
          className="rounded-lg shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
        />

        <div className="desc py-5 md:py-10">
          <h4
            className="text-lg md:text-xl font-roboto font-semibold mb-2 md:mb-5 text-text-primary dark:text-dark-text-primary tracking-wider"
            data-aos="fade-up"
          >
            Description
          </h4>

          <p
            className="font-roboto flex flex-col gap-y-6 text-justify pb-5 md:pb-10 text-text-secondary dark:text-dark-text-secondary leading-relaxed"
            data-aos="fade-up"
          >
            {desc?.map((des, id) => (
              <span className="tracking-wider" key={id}>
                {des}
              </span>
            ))}
          </p>

          <h4
            className="text-lg md:text-xl font-roboto font-semibold mb-2 md:mb-5 text-text-primary dark:text-dark-text-primary"
            data-aos="fade-up"
          >
            Screenshots from project
          </h4>
          <div className={`images grid lg:grid-cols-2 gap-4 pb-10 pt-5`}>
            {selectedProject?.supportedImages.map((imgsrc, id) => (
              <div className="relative" key={id} data-aos="fade-right">
                <div className="absolute inset-0 rounded-lg blur-sm opacity-75"></div>
                <img
                  src={imgsrc}
                  alt={`${selectedProject.title} supported image`}
                  className="relative w-full min-w-40 rounded-lg border-2 border-border dark:border-dark-border shadow-xl"
                  data-aos="flip-right"
                />
              </div>
            ))}
          </div>

          <div className="tech-stack" data-aos="fade-up">
            <span className="text-lg md:text-xl font-roboto font-semibold text-text-primary dark:text-dark-text-primary inline-block mb-3">
              Tech Stack:
            </span>
            <ol
              className={`list-decimal grid grid-cols-2 md:grid-cols-4 font-normal text-base ml-6 md:ml-8 gap-2 text-text-secondary dark:text-dark-text-secondary`}
            >
              {selectedProject?.stack.map((st, id) => (
                <li className="py-1" key={id}>
                  {st.name}
                </li>
              ))}
            </ol>
          </div>

          <div className="tech-stack pt-10" data-aos="fade-up">
            <span className="text-lg md:text-xl font-roboto font-semibold text-text-primary dark:text-dark-text-primary inline-block mb-3">
              Github:{" "}
              <a
                href="https://github.com/Saqib7865-dev"
                target="_blank"
                className="text-base text-blue-500 pl-5 uppercase"
                title="https://github.com/Saqib7865-dev"
              >
                Visit Repository
              </a>
            </span>
          </div>
        </div>
      </div>

      <div
        className="reviews-section bg-background dark:bg-dark-background p-5 md:p-10 rounded-lg shadow-lg border border-border dark:border-dark-border"
        data-aos="fade-up"
      >
        <h4 className="font-semibold text-base md:text-xl font-roboto border-b border-border dark:border-dark-border pb-3 mb-6 text-text-primary dark:text-dark-text-primary">
          Reviews
        </h4>

        <div className="user-reviews py-6 relative min-h-56">
          <div className="review-1 flex items-start gap-x-4 mb-6">
            <div className="img flex-shrink-0">
              <img
                src={userImg}
                alt="user"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md border-2 border-border dark:border-dark-border"
              />
            </div>

            <div className="right flex-grow">
              <div className="username text-text-muted dark:text-dark-text-muted font-roboto flex items-center gap-x-2 mb-2">
                <p className="text-sm md:text-base font-medium">saqibdev</p>
                <span className="text-xs opacity-75">4m ago</span>
              </div>
              <div className="comment text-text-secondary dark:text-dark-text-secondary font-roboto text-sm md:text-base">
                Impressive.
              </div>
            </div>
          </div>

          <div className="add-review absolute bottom-0 w-full bg-surface-alt dark:bg-dark-surface-alt rounded-lg p-4 border border-border-light dark:border-dark-border-light">
            <div className="flex items-center gap-x-3 mb-3">
              <img
                src={userImg}
                alt="user"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md border border-border dark:border-dark-border flex-shrink-0"
              />
              <input
                type="text"
                placeholder="Add a review"
                className="text-text-secondary dark:text-dark-text-secondary font-roboto outline-none border-b border-border dark:border-dark-border bg-transparent w-full pb-2 text-sm md:text-base placeholder-text-muted dark:placeholder-dark-text-muted focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
              />
            </div>

            <div className="buttons flex items-center justify-end gap-x-2">
              <button className="text-xs md:text-sm px-3 py-1.5 font-roboto rounded-md cursor-pointer text-text-muted dark:text-dark-text-muted hover:text-text-secondary dark:hover:text-dark-text-secondary hover:bg-surface dark:hover:bg-dark-surface transition-all duration-200">
                Cancel
              </button>
              <button className="text-xs md:text-sm px-3 py-1.5 font-roboto rounded-md cursor-pointer bg-btn-primary-gradient text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="border border-border dark:border-dark-border px-6 py-2 cursor-pointer text-text-primary dark:text-dark-text-primary rounded-md shadow-sm mt-6 bg-background dark:bg-dark-background hover:bg-surface-alt dark:hover:bg-dark-surface-alt transition-all duration-200 font-roboto"
        data-aos="fade-up"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>
    </div>
  );
};

export default ProjectDesc;
