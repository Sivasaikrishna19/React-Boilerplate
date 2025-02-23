import { Card } from "antd";
import { FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAntdesign,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaCopyright } from "react-icons/fa";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400 text-6xl" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-6xl" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400 text-6xl" />,
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign className="text-red-400 text-6xl" />,
  },
  { name: "NPM", icon: <FaNpm className="text-red-600 text-6xl" /> },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
      >
        🚀 React Boilerplate with Vite, TypeScript & TailwindCSS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-300 text-lg text-center max-w-lg mb-6"
      >
        This boilerplate includes an optimized folder structure and is fully
        responsive, ensuring seamless usage across mobile and tablet devices.
      </motion.p>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-xl">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg shadow-purple-500/50 flex flex-col items-center text-center border border-gray-700">
              {tech.icon}
              <p className="mt-3 text-lg font-semibold">{tech.name}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 text-gray-400 text-center"
      >
        Clone the{" "}
        <a
          href="https://github.com/Sivasaikrishna19/React-Boilerplate"
          style={{ cursor: "pointer" }}
          className="underline"
        >
          repo
        </a>
        {" and run "}
        <code className="bg-gray-700 px-2 py-1 rounded">npm i</code> to get
        started!
      </motion.p>
      <footer className="mt-10 text-gray-500 text-sm flex flex-col items-center">
        <p className="flex items-center">
          <FaCopyright className="mr-1" /> NSSK
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/sivasaikrishna19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href="https://sivasaikrishna19.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Portfolio
          </a>
        </p>
      </footer>
    </div>
  );
}
