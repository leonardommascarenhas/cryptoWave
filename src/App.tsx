import { createContext, useState } from "react";
import ThemeToggle from "./components/layout/assets/ThemeToggle";
import Header from "./components/layout/Header/header";

export const ThemeContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: "dark",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`flex flex-col h-screen font-roboto  ${theme}`}>
        <Header />
        <div className="dark:bg-gradient-to-b from-dark-600 to-dark-800 flex-1">
          <ThemeToggle />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
