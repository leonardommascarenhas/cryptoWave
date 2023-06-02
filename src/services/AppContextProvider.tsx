import React, { createContext, useState, useContext } from "react";

interface AppContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currencySymbol: string;
  setCurrencySymbol: React.Dispatch<React.SetStateAction<string>>;
  BTCToCurrency: number;
  setBTCToCurrency: React.Dispatch<React.SetStateAction<number>>;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const [currency, setCurrency] = useState<string>("brl");
  const [currencySymbol, setCurrencySymbol] = useState<string>("R$");
  const [BTCToCurrency, setBTCToCurrency] = useState<number>(0);

  const appContextValue: AppContextType = {
    theme,
    setTheme,
    currency,
    setCurrency,
    currencySymbol,
    setCurrencySymbol,
    BTCToCurrency,
    setBTCToCurrency,
  };

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContextProvider not found");
  }
  return appContext;
};
