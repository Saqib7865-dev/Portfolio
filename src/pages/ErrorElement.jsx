import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-hero-gradient dark:text-white transition-all duration-300">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-primary-600 dark:text-primary-300 font-roboto">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-surface-600 dark:text-dark-text-secondary mb-6 font-roboto">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-btn-primary-gradient text-white py-2 px-6 rounded font-bold hover:scale-105 transition-all duration-200 shadow"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
