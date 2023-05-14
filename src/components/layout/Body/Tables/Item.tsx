import { useContext, useState, useEffect } from "react";
import DisplayPercentage from "../../assets/Reusables/DisplayPercentage";
import { AppContext, QueryContext } from "../../../../App";

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { currency, currencySymbol } = useContext(AppContext);
  const { btcToExchange } = useContext(QueryContext);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1240);
    }

    // Set initial value on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function usdToCurrency(num: number) {
    return (num / btcToExchange.rates.usd.value) * btcToExchange.rates[currency].value;
  }

  function formatWithMagnitude(num: number): string {
    const absNum = Math.abs(num);
    const sign = Math.sign(num) === -1 ? "-" : "";

    if (absNum >= 1000000000) {
      return sign + (absNum / 1000000000).toFixed(2) + "B";
    }
    if (absNum >= 1000000) {
      return sign + (absNum / 1000000).toFixed(2) + "M";
    }
    if (absNum >= 1000) {
      return sign + (absNum / 1000).toFixed(2) + "K";
    }
    return sign + absNum.toString();
  }

  function formatNumber(num: number) {
    const convertedNumber = usdToCurrency(num);
    return isSmallScreen
      ? formatWithMagnitude(convertedNumber)
      : convertedNumber > 1
      ? parseFloat(convertedNumber.toFixed(2)).toLocaleString()
      : parseFloat(convertedNumber.toFixed(8)).toLocaleString();
  }

  function formatPrice(num: number) {
    const convertedNumber = usdToCurrency(num);
    return convertedNumber > 1
      ? parseFloat(convertedNumber.toFixed(2)).toLocaleString()
      : convertedNumber.toFixed(7).toLocaleString();
  }

  return (
    <tr className=" text-sm md:text-base font-medium cursor-pointer">
      <td className="dark:bg-dark-650 py-4 md:py-6">
        <div className="flex items-center gap-3">
          <img src={icon} className="w-8 h-8" />
          <span>{name}</span>
          <span>{coinAcronym.toUpperCase()}</span>
        </div>
      </td>
      <td>{`${currencySymbol}: ${formatPrice(price)}`}</td>
      <td>
        <DisplayPercentage num={hourPercentage} />
      </td>
      <td>{<DisplayPercentage num={dayPercentage} />}</td>
      <td>
        <DisplayPercentage num={weekPercentage} />
      </td>
      <td>{`${currencySymbol}: ${formatNumber(marketCap)}`}</td>
      <td>
        {currencySymbol}
        {formatNumber(volume24h)}
      </td>
      <td>{circulatingSupply ? `${circulatingSupply + " " + coinAcronym.toUpperCase()}` : "sem acesso"}</td>
    </tr>
  );
};

export default Item;
