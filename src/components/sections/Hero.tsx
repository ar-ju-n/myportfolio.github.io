"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const quotes = [
  "I build and I Design",
  "Transforming ideas into digital reality",
  "Crafting pixel-perfect experiences",
  "Writing clean, elegant, and efficient code",
  "Bridging the gap between design and engineering",
];

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex flex-col justify-center min-h-[70vh]">
      <div className="space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          Arjun Thapa
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300">
          Developer | Designer
        </h2>
        <div className="flex items-center min-h-[3.5rem] sm:min-h-[1.75rem]">
          <p
            className={`max-w-2xl text-lg text-gray-600 dark:text-gray-400 transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            {quotes[quoteIndex]}
          </p>
        </div>
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
