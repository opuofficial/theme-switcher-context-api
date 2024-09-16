import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  const value = {
    theme,
    lightTheme,
    darkTheme,
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");

    if (theme == "light") {
      htmlElement.classList.add("light");
    } else {
      htmlElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
