import { useContext } from "react";
import DisplayPercentage from "../../assets/Reusables/DisplayPercentage";
import { AppContext } from "../../../../App";

interface Props {
  icon: string;
  name: string;
  coinAcronym: string;
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
  coinAcronym,
  price,
  hourPercentage,
  dayPercentage,
  weekPercentage,
  marketCap,
  volume24h,
  circulatingSupply,
}: Props) => {
  const { currency, currencySymbol } = useContext(AppContext);
  return (
    <tr className="text-md">
      <td className="py-4">
        <div className="flex items-center justify-start gap-3">
          <img src={icon} className="w-8 h-8" />
          <span>{name}</span>
          <span>{coinAcronym.toUpperCase()}</span>
        </div>
      </td>
      <td>
        {currencySymbol}
        {price}
      </td>
      <td className="text-center ">
        <DisplayPercentage num={hourPercentage} />
      </td>
      <td>{<DisplayPercentage num={dayPercentage} />}</td>
      <td>
        <DisplayPercentage num={weekPercentage} />
      </td>
      <td>{marketCap}</td>
      <td>
        {currencySymbol}
        {volume24h}
      </td>
      <td>{circulatingSupply ? circulatingSupply : "sem acesso"}</td>
    </tr>
  );
};

export default Item;
