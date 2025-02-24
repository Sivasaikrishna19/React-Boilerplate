import { Card } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../App";

const featuresList = [
  {
    title: "🎨 Dark Mode & Theme Switching",
    description:
      "Built-in light/dark mode support using Tailwind & Context API.",
  },
  {
    title: "🔄 Redux for State Management",
    description:
      "Manages user data and global state efficiently using Redux Toolkit.",
  },
  {
    title: "⚡ Custom Hooks",
    description:
      "Reusability-focused hooks like `useTheme` & `useDateConverter`.",
  },
  {
    title: "🛠 Utility Functions",
    description:
      "Common helpers like `dateUtils.ts`, `stringUtils.ts`, and `numberUtils.ts`.",
  },
  {
    title: "🗺 Routing with React Router",
    description: "Seamless navigation between pages using React Router.",
  },
  {
    title: "📦 Modular Folder Structure",
    description:
      "Well-organized structure with separation of concerns for scalability.",
  },
  {
    title: "🚀 Performance Optimization",
    description: "Optimized with Vite for faster development and builds.",
  },
];

export default function Features() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  // Conditional styles based on theme
  const isDarkMode = theme === "dark";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const cardBg = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-300";
  const textMuted = isDarkMode ? "text-gray-400" : "text-gray-500";
  const btnBg = isDarkMode
    ? "bg-gray-700 hover:bg-gray-800"
    : "bg-gray-300 hover:bg-gray-400";
  const btnText = isDarkMode ? "text-white" : "text-black";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${bgColor} ${textColor} transition-all`}
    >
      <div className="w-full max-w-3xl flex">
        <button
          onClick={() => navigate("/")}
          className={`px-4 py-2 ${btnBg} ${btnText} rounded-lg shadow-md transition-all`}
        >
          ⬅ Back
        </button>
      </div>

      {/* Features Title */}
      <h1 className="text-4xl font-bold mt-4 mb-6 text-center">
        📝 Features Board
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
        {featuresList.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`${cardBg} p-4 rounded-xl shadow-lg border`}>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className={`${textMuted}`}>{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
