import { AppContext } from "../../App";
import { useContext } from "react";
import { HiSun } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(AppContext);
  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={toggleDarkMode} className="w-12 h-full">
      {theme === "dark" ? <HiSun className="sun-icon" /> : <IoMoonSharp className="moon-icon" />}
    </button>
  );
};

export default ThemeToggle;
