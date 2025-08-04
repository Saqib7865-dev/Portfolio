import { IoLogoLinkedin } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-surface dark:bg-dark-surface flex flex-col gap-y-10 md:gap-y-18 items-center pt-14 pb-7 px-6 md:px-20 border-t border-border-light dark:border-dark-border">
      <div className="container grid grid-cols-2 md:grid-cols-3 gap-y-10 md:items-center md:w-4/5">
        <div className="flex flex-col h-full gap-y-3">
          <h4 className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary text-lg">
            Pages
          </h4>
          <ul className="flex flex-col gap-y-1 md:gap-y-3">
            <li>
              <a
                href="/"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-all ease-out duration-300 uppercase hover:translate-x-1 transform block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-all ease-out duration-300 uppercase text-sm hover:translate-x-1 transform block"
              >
                All Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-all ease-out duration-300 uppercase text-sm hover:translate-x-1 transform block"
              >
                Journey
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col h-full gap-y-3">
          <h4 className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary text-lg">
            Social Links
          </h4>
          <ul className="flex flex-col gap-y-3">
            <li>
              <a
                href="/"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary uppercase text-sm flex items-center gap-x-2 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 ease-out group hover:translate-x-1 transform"
              >
                <IoLogoLinkedin className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />{" "}
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary uppercase text-sm flex items-center gap-x-2 hover:text-text-primary dark:hover:text-dark-text-primary transition-all duration-300 ease-out group hover:translate-x-1 transform"
              >
                <ImGithub className="text-lg group-hover:text-surface-900 dark:group-hover:text-white transition-colors duration-300" />{" "}
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col h-full gap-y-3">
          <h4 className="font-roboto font-semibold text-text-primary dark:text-dark-text-primary text-lg">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-y-3">
            <li>
              <a
                href="mailto:m.saqib.a7865@gmail.com"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary uppercase text-sm flex items-center gap-x-2 hover:text-info-600 dark:hover:text-info-400 transition-all duration-300 ease-out group hover:translate-x-1 transform"
              >
                <MdEmail className="text-lg group-hover:text-info-600 dark:group-hover:text-info-400 transition-colors duration-300" />{" "}
                m.saqib.a7865@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+923121928921"
                className="font-roboto font-semibold text-text-secondary dark:text-dark-text-secondary uppercase text-sm flex items-center gap-x-2 hover:text-success-600 dark:hover:text-success-400 transition-all duration-300 ease-out group hover:translate-x-1 transform"
              >
                <FaPhoneAlt className="text-base group-hover:text-success-600 dark:group-hover:text-success-400 transition-colors duration-300" />{" "}
                +92 312 1928 921
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
