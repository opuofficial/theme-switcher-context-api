import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Switch = () => {
  const { theme, lightTheme, darkTheme } = useContext(ThemeContext);

  const handleSwitch = () => {
    if (theme == "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <input
      type="checkbox"
      className="toggle"
      onChange={handleSwitch}
      checked={theme == "dark"}
    />
  );
};

export default Switch;
