import { createContext, useState } from "react";
import ThemeToggle from "./components/layout/assets/ThemeToggle";
import Header from "./components/layout/Header/header";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  currency: "brl",
  setCurrency: () => {},
});

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [currency, setCurrency] = useState<string>("brl");
  return (
    <ThemeContext.Provider value={{ theme, setTheme, currency, setCurrency }}>
      <div className={`flex flex-col h-screen font-roboto ${theme}`}>
        <Header />
        <div className="dark:bg-gradient-to-b from-dark-600 to-dark-800 flex-1">
          <ThemeToggle />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
