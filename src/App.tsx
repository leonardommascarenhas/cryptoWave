import { createContext, useState } from "react";
import ThemeToggle from "./components/Buttons&Selects/ThemeToggle";
import Header from "./components/layout/Header/header";

interface AppContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currencySymbol: string;
  setCurrencySymbol: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  currency: "brl",
  setCurrency: () => {},
  currencySymbol: "R$",
  setCurrencySymbol: () => {},
});

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [currency, setCurrency] = useState<string>("brl");
  const [currencySymbol, setCurrencySymbol] = useState<string>("R$");

  return (
    <AppContext.Provider
      value={{ theme, setTheme, currency, setCurrency, currencySymbol, setCurrencySymbol }}
    >
      <div className={`flex flex-col min-h-screen font-roboto ${theme}`}>
        <Header />
        <div className="dark:bg-gradient-to-b from-dark-600 to-dark-800 flex-1">
          <ThemeToggle />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
