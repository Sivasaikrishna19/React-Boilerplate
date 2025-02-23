import { Card } from "antd";
import { FaReact, FaNpm, FaSun, FaMoon, FaCopyright } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAntdesign,
  SiVite,
  SiRedux,
  SiReact,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useThemeContext } from "../App";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400 text-6xl" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-6xl" />,
  },
  { name: "Redux", icon: <SiRedux className="text-cyan-400 text-6xl" /> },
  {
    name: "Ant Design",
    icon: <SiAntdesign className="text-red-400 text-6xl" />,
  },
  { name: "NPM", icon: <FaNpm className="text-red-600 text-6xl" /> },
  { name: "React Icons", icon: <SiReact className="text-blue-400 text-6xl" /> },

  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400 text-6xl" />,
  },
];

export default function LandingPage() {
  const { theme, toggleTheme } = useThemeContext();
  const users = useSelector((state: RootState) => state.user.users);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full border border-gray-600 bg-gray-800 text-white dark:bg-gray-300 dark:text-black transition"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-gray-800 text-xl" />
        )}
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
      >
        🚀 React Boilerplate with Redux & Theme Switcher
      </motion.h1>

      {/* Horizontal Scrollable Tech Stack */}
      <div className="w-full overflow-x-auto scroll-hidden whitespace-nowrap pb-4">
        <div className="flex gap-6 px-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <Card className="w-40 h-40 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-center rounded-xl shadow-lg dark:shadow-blue-500/50 shadow-purple-500/50 border border-gray-300 dark:border-gray-700">
                {tech.icon}
                <p className="mt-3 text-lg font-semibold">{tech.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="mt-10 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          👥 Users List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {users.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: user.id * 0.1 }}
            >
              <Card className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg dark:shadow-blue-500/50 shadow-purple-500/50 border border-gray-300 dark:border-gray-700">
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
              </Card>
            </motion.div>
          ))}
        </div>
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
          </a>{" "}
          |{" "}
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
