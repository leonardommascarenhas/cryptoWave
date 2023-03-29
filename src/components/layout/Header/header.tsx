import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLogin } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderBar } from "./HeaderBar";
import MobileMenu from "./MobileMenu";
import Logo from "../assets/Logo";
import axios from "axios";
import MenuUL from "../assets/MenuUL/MenuUL";

const Header: React.FC = () => {
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
    return <div>loading</div>;
  }
  return (
    <>
      <header className="lg:grid lg:grid-areas-headerDesktop px-7 shadow-sm z-0 dark:bg-dark-800">
        <div className="flex lg:grid-in-headerNav items-center justify-between py-2">
          <div className="flex items-center">
            <Logo />
            <div className="hidden lg:block">
              <MenuUL />
            </div>
          </div>
          <div className="flex items-center gap-4">
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
          totalVolume={data?.data?.total_market_cap?.brl}
          dayVolume={data?.data?.total_volume?.brl}
          marketDominance={data?.data?.market_cap_percentage}
        />
      </header>
      <MobileMenu toggleMenu={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
