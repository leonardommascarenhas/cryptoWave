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
    <tr>
      <th className="flex items-center">
        <img src={icon} className="w-6 h-6" />
        <span>{name}</span>
        <span>{symbol}</span>
      </th>
      <td className="">{price}</td>
      <td>
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
