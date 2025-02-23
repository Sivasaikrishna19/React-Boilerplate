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
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
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

      <h2 className="text-2xl font-semibold mb-4 text-center">
        🔥 Technologies Included
      </h2>

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

      <button
        onClick={() => navigate("/features")}
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all"
      >
        🚀 Explore Features
      </button>

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
      <Footer />
    </div>
  );
}
