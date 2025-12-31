import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="space-y-10">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.role + item.company} className="space-y-3">
            <h3 className="text-xl font-semibold">
              {item.role} -{" "}
              <span className="text-gray-600 dark:text-gray-400 font-normal">{item.company}</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {item.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
