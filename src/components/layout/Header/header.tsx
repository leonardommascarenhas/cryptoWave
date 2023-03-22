import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GiBigWave } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderBar } from "./HeaderBar";
import axios from "axios";

const Header: React.FC = () => {
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
    <header className="px-2 py-2">
      <div className="flex items-center justify-between border-b">
        <div>
          <a className="flex items-center font-roboto font-semibold text-lg cursor-pointer ">
            <GiBigWave className="text-blue-500 h-14 w-14 px-1.5 py-2 mb-1 rounded-full" />
            CryptoWave
          </a>
        </div>
        <div className="flex items-center gap-4">
          <HiMagnifyingGlass className="header-icon" />
          <AiOutlineLogin className="header-icon" />
          <RxHamburgerMenu className="header-icon" />
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
  );
};

export default Header;
