export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "TelePsych Platform",
    description:
      "A full-stack tele-mental health platform enabling remote consultations with secure authenticaton and real-time commmunication",
    tech: ["AWS", "Django"],
    repoUrl: "https://github.com/ar-ju-n/telepsych",
  },
  {
    title: "Elderly Care and Mindful Hub",
    description:
      "Web applicatiom to manage elder care services, appointments and records with a user-friendly interface",
    tech: ["OpenAI", "Django"],
    repoUrl: "https://github.com/ar-ju-n/Elder_Care",
  },
  {
    title: "Online Retail Store",
    description:
      "E-commerce platform with product listings, cart functionality and order management ",
    tech: [".NET", "SSMS"],
    repoUrl: "https://github.com/ar-ju-n/Online_Retail_Stores",
  },
];
