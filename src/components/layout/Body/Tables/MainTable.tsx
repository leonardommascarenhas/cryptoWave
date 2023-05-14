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
    <div className="overflow-x-auto font-poppins ">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="text-sm font-medium">
            <th className="py-3 text-left">Name</th>
            <th className="py-3">Price</th>
            <th className="py-3">1h%</th>
            <th className="py-3">24h%</th>
            <th className="py-3">7d%</th>
            <th className="py-3">Market Cap</th>
            <th className="py-3">Volume(24h)</th>
            <th className="py-3">Circulating Supply</th>
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
