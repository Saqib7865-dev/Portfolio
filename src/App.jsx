import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { IoMdArrowUp } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return () =>
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
  }, []);
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <div
        className={`floating-arrow-to-top w-10 h-10 rounded-full bg-blue-500/50 active:bg-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-600 text-gray-200 cursor-pointer ${
          scroll ? "flex" : "hidden"
        } items-center justify-center fixed bottom-5 right-5 transition-all duration-300 ease-in-out`}
      >
        <IoMdArrowUp
          className="text-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </>
  );
}

export default App;
