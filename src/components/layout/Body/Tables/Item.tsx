import React from "react";
import DisplayPercentage from "../../assets/Reusables/DisplayPercentage";

interface Props {
  icon: string;
  name: string;
  symbol: string;
  price: number;
  hourPercentage: number;
  dayPercentage: number;
  weekPercentage: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
}

const Item = ({
  icon,
  name,
  symbol,
  price,
  hourPercentage,
  dayPercentage,
  weekPercentage,
  marketCap,
  volume24h,
  circulatingSupply,
}: Props) => {
  return (
    <tr className="text-lg]">
      <td className="w-1/4 min-w-[122px] p-5">
        <div className="flex items-center gap-3">
          <img src={icon} className="w-6 h-6" />
          <div className="flex flex-col">
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
          </div>
        </div>
      </td>
      <td className="">{price}</td>
      <td className="text-center">
        <DisplayPercentage num={hourPercentage} />
      </td>
      <td>{<DisplayPercentage num={dayPercentage} />}</td>
      <td>
        <DisplayPercentage num={weekPercentage} />
      </td>
      <td>{marketCap}</td>
      <td>{volume24h}</td>
      <td>{circulatingSupply ? circulatingSupply : "sem acesso"}</td>
    </tr>
  );
};

export default Item;
