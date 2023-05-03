import { createContext, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { getTrendingCoins, getCoinData, getExchangeRates } from "./services/ApiCalls";
import Header from "./components/layout/Header/header";
import CardsDisplay from "./components/Cards/CardBase";
import Body from "./components/layout/Body/Body";

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

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  currency: "brl",
  setCurrency: () => {},
  currencySymbol: "R$",
  setCurrencySymbol: () => {},
  BTCToCurrency: 0,
  setBTCToCurrency: () => {},
});

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [currency, setCurrency] = useState<string>("brl");
  const [currencySymbol, setCurrencySymbol] = useState<string>("R$");
  const [BTCToCurrency, setBTCToCurrency] = useState<number>(0);

  //API consumption that is going to be globally used
  const [trending, coinData, btcToExchange] = useQueries({
    queries: [
      {
        queryKey: ["trending"],
        queryFn: getTrendingCoins,
        staleTime: 30000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["coinData"],
        queryFn: getCoinData,
        staleTime: 100000,
      },
      {
        queryKey: ["btcToExchange"],
        queryFn: getExchangeRates,
      },
    ],
  });
  if (trending.isLoading || coinData.isLoading || btcToExchange.isLoading) {
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
        BTCToCurrency,
        setBTCToCurrency,
      }}
    >
      <div className={`flex flex-col min-h-screen font-roboto ${theme}`}>
        <Header />
        <div className="px-4 bg-gray-200  dark:bg-gradient-to-b from-dark-600 to-dark-800 flex-1 ">
          <CardsDisplay
            trending={trending.data}
            coinData={coinData.data}
            btcToExchange={btcToExchange.data}
          />
          <Body />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
