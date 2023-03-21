import React from "react";

interface Props {
  cryptos: number;
  exchanges: number;
  totalVolume: number;
  dayVolume: number;
  marketDominance: string;
}

export const HeaderBar = ({ cryptos, exchanges, totalVolume, dayVolume, marketDominance }: Props) => {
  return <div className="border-b"></div>;
};
