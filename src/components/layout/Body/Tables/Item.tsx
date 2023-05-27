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
  // Declare and initialize state
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Use context hooks to access data from parent components
  const { currency, currencySymbol } = useContext(AppContext);
  const { btcToExchange } = useContext(QueryContext);

  // Effect hook to update state when screen size changes
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1240);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Convert a number from USD to the selected currency
  function usdToCurrency(num: number) {
    return (num / btcToExchange.rates.usd.value) * btcToExchange.rates[currency].value;
  }

  // Format a large number with magnitude (K, M, B, T, Q)
  function formatWithMagnitude(num: number) {
    const absNum = Math.abs(num);

    // Check if the number is negative to give the sign
    const sign = Math.sign(num) === -1 ? "-" : "";

    if (absNum >= 1000000000000000) {
      return sign + (absNum / 1000000000000000).toFixed(0) + "Q";
    }
    if (absNum >= 1000000000000) {
      return sign + (absNum / 1000000000000).toFixed(1) + "T";
    }
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

  // Format a number to a string with commas and/or decimal points
  function formatNumber(num: number | null) {
    if (num === null || isNaN(num)) {
      return "sem acesso";
    }

    const convertedNumber = usdToCurrency(num);

    if (isSmallScreen || convertedNumber >= 10000000000000) {
      return formatWithMagnitude(convertedNumber);
    } else {
      if (convertedNumber > 1) {
        return parseFloat(convertedNumber.toFixed(2)).toLocaleString();
      } else {
        return parseFloat(convertedNumber.toFixed(8)).toLocaleString();
      }
    }
  }

  // Format a price as a string with commas and decimal points
  function formatPrice(num: number | null) {
    if (num === null || isNaN(num)) {
      return "sem acesso";
    }

    const convertedNumber = usdToCurrency(num);

    if (convertedNumber > 1) {
      return parseFloat(convertedNumber.toFixed(2)).toLocaleString();
    } else {
      return convertedNumber.toFixed(8).toLocaleString();
    }
  }

  return (
    <tr className="group font-medium cursor-pointer bg-white dark:bg-dark-600 hover:bg-slate-200 dark:hover:bg-dark-500 [&>*:first-child]:pl-4 [&>*:last-child]:pr-4 [&>*]:dark:border-b [&>*]:dark:border-gray-700 ">
      <td className="py-4 md:py-6 bg-white group-hover:bg-slate-200 dark:bg-dark-600 dark:group-hover:bg-dark-500">
        <div className="flex items-center gap-3">
          <img src={icon} className="w-8 h-8" />
          <div className="flex flex-col gap-2 items-start">
            <span>{name}</span>
            <span>{coinAcronym.toUpperCase()}</span>
          </div>
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
      <td>
        {circulatingSupply
          ? `${formatNumber(circulatingSupply) + " " + coinAcronym.toUpperCase()}`
          : "sem acesso"}
      </td>
    </tr>
  );
};

export default Item;
