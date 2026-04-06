import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
} from "react-icons/si";

import { FaChartBar, FaFileExcel } from "react-icons/fa";

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "Power BI", icon: FaChartBar, color: "text-yellow-500" },
  { name: "SQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Excel", icon: FaFileExcel, color: "text-green-600" },
];

export default function TechStack() {
  return (
    <div className="mt-6 shadow-md p-3 rounded-xl bg-white/70 mx-12">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
        🚀 Tech Stack
      </h3>

      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm hover:scale-105 transition duration-300"
            >
              <Icon className={`text-xl ${tech.color}`} />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
