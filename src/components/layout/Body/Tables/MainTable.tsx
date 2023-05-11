import { useState, useRef, useEffect, useContext } from "react";
import { QueryContext } from "../../../../App";
import Item from "./Item";

const MainTable = () => {
  const { coinData } = useContext(QueryContext);
  const [itemsToShow, setItemsToShow] = useState(30);
  const lastItemRef = useRef<HTMLTableRowElement>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && itemsToShow < coinData.length) {
      setItemsToShow(itemsToShow + 50);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [itemsToShow]);

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
          {coinData.slice(0, itemsToShow).map((coin: any, index: number) => (
            <Item
              key={coin.name}
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
          <tr ref={lastItemRef}></tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
