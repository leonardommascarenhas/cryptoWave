import { AppContext } from "../../App";
import { useState, useContext } from "react";
import { HiSun } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(AppContext);
  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={toggleDarkMode} className="w-8 h-8">
      {theme === "dark" ? <HiSun className="w-full h-full text-gray-400 bg-dark-600" /> : <IoMoonSharp />}
    </button>
  );
};

export default ThemeToggle;
