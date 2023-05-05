import { useContext } from "react";
import { AppContext } from "../../../../App";
import { QueryContext } from "../../../../App";
import Item from "./Item";

const MainTable = () => {
  const { currency, currencySymbol } = useContext(AppContext);
  const { coinData } = useContext(QueryContext);
  return (
    <div className="overflow-x-scroll">
      <table>
        <thead>
          <tr>
            <th className="bg-white py-2">name</th>
            <th className="bg-red-500 ">Price</th>
            <th className="min-w-100px]">1h%</th>
            <th className="min-w-100px]">24h%</th>
            <th className="min-w-100px]">7d%</th>
            <th className="min-w-100px]">Market</th>
            <th className="min-w-100px]">Volume(24h)</th>
            <th className="min-w-100px]">Circulating</th>
            <th className="min-w-100px]">Circulating</th>
            <th className="min-w-100px]">Circulating</th>
            <th className="min-w-100px]">Circulating</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((coin: any) => (
            <Item
              icon={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              hourPercentage={coin.price_change_percentage_1h_in_currency}
              dayPercentage={coin.price_change_percentage_24h_in_currency}
              weekPercentage={coin.price_change_percentage_7d_in_currency}
              marketCap={coin.market_cap}
              volume24h={coin.market_cap_change_24h}
              circulatingSupply={coin.total_supply}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
