import React from "react";

interface Props {
  cryptos: number;
  exchanges: number;
  totalVolume: number;
  dayVolume: number;
  marketDominance: { [key: string]: number };
}

export const HeaderBar = ({ cryptos, exchanges, totalVolume, dayVolume, marketDominance }: Props) => {
  const dominanceEntries = Object.entries(marketDominance).splice(0, 2);

  return (
    <div className="flex items-center h-8 border-b overflow-x-auto w-full whitespace-nowrap text-xs">
      <p>
        Criptomoedas: <span className="text-blue-400">{cryptos}</span>
      </p>
      <p>
        Exchanges: <span className="text-blue-400">{exchanges}</span>
      </p>
      <p>
        Volume Total: <span className="text-blue-400">R$:{totalVolume}</span>
      </p>
      <p>
        Volume em 24h: <span className="text-blue-400">{dayVolume}</span>
      </p>
      <div className="flex">
        Dominance:
        {dominanceEntries.map(([key, value]) => (
          <p key={key}>
            {key.toUpperCase()}: <span className="text-blue-400">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
