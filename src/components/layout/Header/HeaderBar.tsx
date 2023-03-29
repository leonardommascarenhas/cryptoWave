import React from "react";
import { useEffect } from "react";

interface Props {
  cryptos: number;
  exchanges: number;
  totalVolume: number;
  dayVolume: number;
  marketDominance: { [key: string]: number };
}

export const HeaderBar = ({ cryptos, exchanges, totalVolume, dayVolume, marketDominance }: Props) => {
  return (
    <div className="flex py-4 lg:grid-in-headerBar items-center dark:border-b dark:border-b-gray-800 overflow-x-auto w-full whitespace-nowrap text-xs text-zinc-400 font-bold gap-2">
      <p>
        Criptomoedas: <span className="text-blue-500">{cryptos}</span>
      </p>
      <p>
        Exchanges: <span className="text-blue-500">{exchanges}</span>
      </p>
      <p>
        Volume Total: <span className="text-blue-500">R$: {totalVolume.toLocaleString()}</span>
      </p>
      <p>
        24h: <span className="text-blue-500">R$: {dayVolume.toLocaleString()}</span>
      </p>
      <div className="flex gap-1">
        Dominance:
        <>
          {Object.entries(marketDominance)
            .splice(0, 2)
            .map(([coin, percentage]) => (
              <div key={coin} className="flex text-blue-500">
                {coin.toUpperCase()}:<span className="ml-1">{percentage.toFixed(2)}</span>%
              </div>
            ))}
        </>
      </div>
    </div>
  );
};
