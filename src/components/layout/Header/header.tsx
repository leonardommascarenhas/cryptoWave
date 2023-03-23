import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLogin } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderBar } from "./HeaderBar";
import Menu from "./Menu";
import Logo from "../assets/Logo";
import axios from "axios";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["global"],
    queryFn: async () => {
      return axios
        .get("https://api.coingecko.com/api/v3/global")
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
      <header className="p-2 z-0">
        <div className="flex items-center justify-between border-b">
          <Logo />
          <div className="flex items-center gap-4">
            <HiMagnifyingGlass className="header-icon" />
            <AiOutlineLogin className="header-icon" />
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
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
      <Menu toggleMenu={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
