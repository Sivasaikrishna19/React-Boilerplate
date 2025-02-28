import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useContext } from "react";
import useTheme from "./hooks/useTheme";
import LandingPage from "./pages/LandingPage";
import Features from "./pages/Features";

const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
} | null>(null);

export function useThemeContext() {
  return useContext(ThemeContext)!;
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        } transition-all`}
      >
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
