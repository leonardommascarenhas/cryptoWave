import { createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { getTrendingCoins, getCoinData, getExchangeRates } from "./services/ApiCalls";
import Header from "./components/layout/Header/header";
import Body from "./pages/Body";
import ContactMeIcon from "./components/Buttons&Selects/CoinContactMe/ContactMeIcon";
import HiImage from "../src/assets/Images/Hi.png";
import CoolImage from "../src/assets/Images/Cool.png";
import { AppContext } from "./services/AppContextProvider";

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
  const [hasScrolled, setHasScrolled] = useState(false); // Initialize hasScrolled state

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollAmount = 80;

      if (scrollPosition > scrollAmount) {
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

  const { theme } = useContext(AppContext);

  return (
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
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
            </Routes>
            {hasScrolled && <ContactMeIcon image1={HiImage} image2={CoolImage} />}
          </Router>
        </div>
      )}
    </QueryContext.Provider>
  );
}

export default App;
