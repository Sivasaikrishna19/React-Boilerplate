import { createContext, useContext } from "react";
import useTheme from "./hooks/useTheme";
import LandingPage from "./pages/LandingPage";

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
        }`}
      >
        <LandingPage />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
