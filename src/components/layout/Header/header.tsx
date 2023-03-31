import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLogin } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderBar } from "./HeaderBar";
import MobileMenu from "./MobileMenu";
import Logo from "../assets/Logo";
import axios from "axios";
import MenuUL from "../assets/MenuUL/MenuUL";
import ThemeToggle from "../assets/ThemeToggle";
import { ThemeContext } from "../../../App";
import CurrencySelect from "../../Buttons&Selects/CurrencySelect";

const Header: React.FC = () => {
  const { currency, setCurrency } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["global"],
    queryFn: async () => {
      return axios
        .get("https://api.coingecko.com/api/v3/global/")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  if (isLoading) {
    return <div></div>;
  }
  return (
    <>
      <header className="lg:grid lg:grid-areas-headerDesktop shadow-sm z-0 dark:bg-dark-800">
        <div className="flex lg:grid-in-headerNav items-center justify-between py-2 px-5 border-b border-b-gray-200 dark:border-b-gray-700">
          <div className="flex items-center">
            <Logo />
            <div className="hidden lg:block">
              <MenuUL />
            </div>
          </div>
          <div className="flex items-center gap-4 dark:text-white">
            <HiMagnifyingGlass className="header-icon" />
            <AiOutlineLogin className="header-icon" />
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="lg:hidden"
            >
              <RxHamburgerMenu className="header-icon" />
            </button>
          </div>
        </div>
        <HeaderBar
          cryptos={data?.data?.active_cryptocurrencies}
          exchanges={data?.data?.markets}
          totalVolume={data?.data?.total_market_cap?.[currency]}
          dayVolume={data?.data?.total_volume?.[currency]}
          marketDominance={data?.data?.market_cap_percentage}
        />
        <CurrencySelect />
      </header>
      <MobileMenu toggleMenu={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
