import { createContext, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import Header from "./components/layout/Header/header";
import CardsDisplay from "./components/Cards/CardBase";

interface AppContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currencySymbol: string;
  setCurrencySymbol: React.Dispatch<React.SetStateAction<string>>;
  currencyToBtc: number;
  setCurrencyToBtc: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  currency: "brl",
  setCurrency: () => {},
  currencySymbol: "R$",
  setCurrencySymbol: () => {},
  currencyToBtc: 0,
  setCurrencyToBtc: () => {},
});

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [currency, setCurrency] = useState<string>("brl");
  const [currencySymbol, setCurrencySymbol] = useState<string>("R$");
  const [currencyToBtc, setCurrencyToBtc] = useState<number>(0);

  const [trending, coinData] = useQueries({
    queries: [
      {
        queryKey: ["trending"],
        queryFn: async () =>
          axios
            .get("https://api.coingecko.com/api/v3/search/trending")
            .then((res) => res.data.coins.splice(0, 3)),
        staleTime: 30000,
        refetchOnWindowFocus: false,
      },

      {
        queryKey: ["coinData"],
        queryFn: async () => {
          const res = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=desc&sort_by=price_change_percentage_24h&per_page=500&page=1"
          );
          return res.data.sort(
            (a: any, b: any) => b.price_change_percentage_24h - a.price_change_percentage_24h
          );
        },

        staleTime: 100000,
      },
      {
        queryKey: ["currencyToBtc"],
        queryFn: async () => {
          const res = await axios.get;
        },
      },
    ],
  });
  if (trending.isLoading) {
    return <div>Loading...</div>;
  }
  if (coinData.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        currency,
        setCurrency,
        currencySymbol,
        setCurrencySymbol,
        currencyToBtc,
        setCurrencyToBtc,
      }}
    >
      <div className={`flex flex-col min-h-screen font-roboto ${theme}`}>
        <Header />
        <div className="px-4 bg-gray-200  dark:bg-gradient-to-b from-dark-600 to-dark-800 flex-1 ">
          <CardsDisplay trending={trending.data} coinData={coinData.data} />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
