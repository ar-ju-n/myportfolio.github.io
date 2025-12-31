import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="space-y-8 border-t border-gray-200 dark:border-gray-800 pt-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="max-w-xl text-gray-600 dark:text-gray-400">
        Interested in working together or have a project in mind? Feel free to
        reach out.
      </p>
      <div className="flex flex-wrap gap-6">
        <a
          href="mailto:att560112@gmail.com"
          className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
        >
          <FaEnvelope className="w-5 h-5" />
          att560112@gmail.com
        </a>
        <a
          href="https://github.com/ar-ju-n"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
        >
          <FaGithub className="w-5 h-5" />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/arjunthapa25"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
        >
          <FaLinkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
