import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return { theme, toggleTheme };
};
