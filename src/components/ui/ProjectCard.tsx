import { Project } from "@/data/projects";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 pt-4">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition"
        >
          <FaGithub className="w-5 h-5" />
          Github
        </a>
      </div>
    </div>
  );
}
