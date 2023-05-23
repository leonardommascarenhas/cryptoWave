import React, { createContext, useState, useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { getTrendingCoins, getCoinData, getExchangeRates } from "./services/ApiCalls";
import Header from "./components/layout/Header/header";
import Body from "./components/layout/Body/Body";
import ContactMeIcon from "./components/Buttons&Selects/CoinContactMe/ContactMeIcon";
import HiImage from "../src/assets/Images/Hi.png";
import CoolImage from "../src/assets/Images/Cool.png";

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

interface QueryContextType {
  isLoading: boolean;
  trending: any;
  coinData: any;
  btcToExchange: any;
}

export const QueryContext = createContext<QueryContextType>({
  isLoading: true,
  trending: null,
  coinData: null,
  btcToExchange: null,
});

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [currency, setCurrency] = useState<string>("brl");
  const [currencySymbol, setCurrencySymbol] = useState<string>("R$");
  const [BTCToCurrency, setBTCToCurrency] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      //This checks the current position of the scroll
      const scrollPosition = window.scrollY;
      const scrollAmmount = 80;

      if (scrollPosition > scrollAmmount) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const queries = useQueries({
    queries: [
      {
        queryKey: ["trending"],
        queryFn: getTrendingCoins,
        staleTime: 65000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["coinData"],
        queryFn: getCoinData,
        staleTime: 65000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["btcToExchange"],
        queryFn: getExchangeRates,
        staleTime: 65000,
        refetchOnWindowFocus: false,
      },
    ],
  });

  const isLoading = queries.some((q) => q.isLoading);

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
      <QueryContext.Provider
        value={{
          isLoading,
          trending: queries[0].data,
          coinData: queries[1].data,
          btcToExchange: queries[2].data,
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={`flex flex-col min-h-screen font-roboto ${theme} dark:text-white overflow-auto`}>
            <Header />
            <Body />
            {hasScrolled && <ContactMeIcon image1={HiImage} image2={CoolImage} />}
          </div>
        )}
      </QueryContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
