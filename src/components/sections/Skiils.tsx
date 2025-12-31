import { skills } from "@/data/skills";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiDotnet,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiDjango,
  SiFigma,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaPalette } from "react-icons/fa";

// Icon mapping for skills
const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Languages
  Python: SiPython,
  Java: SiOpenjdk,
  "C#": SiDotnet,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: SiPostgresql,
  // Frontend
  "Next.js": SiNextdotjs,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  // Backend
  "Node.js": SiNodedotjs,
  Django: SiDjango,
  MongoDB: SiMongodb,
  // Design
  Figma: SiFigma,
  "Affinity Designer": FaPalette,
  GIMP: FaPalette,
  // Tools
  Git: SiGit,
  Linux: SiLinux,
};

function SkillItem({ skill }: { skill: string }) {
  const IconComponent = skillIcons[skill] || FaPalette;
  
  return (
    <li className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300">
      <IconComponent className="w-4 h-4 flex-shrink-0" />
      <span>{skill}</span>
    </li>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="space-y-10">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="space-y-10">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frontend" items={skills.frontend} />
        <SkillGroup title="Backend" items={skills.backend} />
        <SkillGroup title="Design" items={skills.design} />
        <SkillGroup title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}
