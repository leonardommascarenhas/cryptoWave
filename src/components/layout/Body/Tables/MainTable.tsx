import { useContext } from "react";
import { QueryContext } from "../../../../App";
import Item from "./Item";

const MainTable = () => {
  const { coinData } = useContext(QueryContext);
  return (
    <div className="overflow-x-auto cursor-grab">
      <table className="w-full min-w-[1024px]">
        <thead>
          <tr>
            <th className="bg-white text-black">Name</th> {/*bg should be the same as the container   */}
            <th className="bg-red-500 ">Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market</th>
            <th>Volume(24h)</th>
            <th>Circulating</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((coin: any, index: number) => (
            <Item
              icon={coin.image}
              name={coin.name}
              coinAcronym={coin.symbol}
              price={coin.current_price}
              hourPercentage={coin.price_change_percentage_1h_in_currency}
              dayPercentage={coin.price_change_percentage_24h_in_currency}
              weekPercentage={coin.price_change_percentage_7d_in_currency}
              marketCap={coin.market_cap}
              volume24h={coin.market_cap_change_24h?.toFixed(0)}
              circulatingSupply={coin.total_supply?.toFixed(0)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
