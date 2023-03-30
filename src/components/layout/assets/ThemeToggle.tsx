import { ThemeContext } from "../../../App";
import { useState, useContext } from "react";
import { HiSun } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={toggleDarkMode} className="w-12 h-12 bg-white">
      {theme === "dark" ? <HiSun /> : <IoMoonSharp />}
    </button>
  );
};

export default ThemeToggle;
