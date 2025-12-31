import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[70vh]">
      <div className="space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          Arjun Thapa
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300">
          Developer | Designer
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">I build and I Design</p>
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-4 pt-6">
          <a
            href="https://github.com/ar-ju-n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/arjunthapa25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:att560112@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
