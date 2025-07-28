import { BsSend } from "react-icons/bs";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";
import { Element } from "react-scroll";

const Contact = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(`https://formspree.io/f/xnnveddl`, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    const result = await response.json();
    if (result.ok || result.success) {
      toast.success(
        "Thanks for visiting. Developer will contact you shortly.",
        {
          duration: 4000,
          position: "top-center",
          style: {
            background: "green",
            color: "white",
          },
        }
      );
      e.target.reset();
    } else {
      alert("There was an error submitting the form.");
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <Element name="contact">
      <section className="bg-hero-gradient flex flex-col gap-y-10 md:gap-y-18 items-center p-5 md:p-20">
        <h4
          className="font-roboto text-xl sm:text-2xl md:text-3xl font-bold uppercase text-primary-900 dark:text-dark-text-primary"
          data-aos="fade-up"
        >
          Contact Form
        </h4>
        <div className="container md:grid md:grid-cols-1 md:gap-x-10 w-full items-center">
          <div
            className="left flex flex-col gap-y-6 justify-center"
            data-aos="fade-right"
          >
            <form
              className="flex flex-col items-start gap-y-4"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                name="fullname"
                required
                id="fullname"
                className="bg-background dark:bg-dark-surface p-2 md:py-3 md:px-4 w-full font-roboto outline-none border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted shadow-lg rounded-lg transition-all duration-300 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 hover:shadow-xl"
                placeholder="Full Name"
                tabIndex={0}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                required
                id="email"
                className="bg-background dark:bg-dark-surface p-2 md:py-3 md:px-4 w-full font-roboto outline-none border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted shadow-lg rounded-lg transition-all duration-300 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 hover:shadow-xl"
                placeholder="Email"
                tabIndex={0}
                autoComplete="off"
              />
              <textarea
                name="message"
                required
                id="msg"
                className="bg-background dark:bg-dark-surface p-2 md:py-3 md:px-4 w-full font-roboto outline-none border border-border dark:border-dark-border resize-none text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted shadow-lg rounded-lg transition-all duration-300 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 hover:shadow-xl"
                placeholder="Message"
                tabIndex={0}
                rows={6}
              ></textarea>
              <button
                type="submit"
                className="bg-btn-primary-gradient hover:bg-btn-primary-gradient text-white p-2 md:py-3 md:px-6 transition-all duration-500 ease-out font-roboto font-medium rounded-lg cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-x-2 w-full text-sm md:text-base border border-primary-600 dark:border-primary-500 hover:border-primary-700 dark:hover:border-primary-400"
              >
                Send Message{" "}
                <BsSend className="text-sm md:text-base font-roboto font-semibold transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
