import { useState, useRef, useEffect, useContext } from "react";
import { QueryContext } from "../../../../App";
import Item from "./Item";

const MainTable = () => {
  const { coinData } = useContext(QueryContext);
  const [itemsToShow, setItemsToShow] = useState(50);
  const lastItemRef = useRef<HTMLTableRowElement>(null);
  const [isAscending, setIsAscending] = useState<boolean>();
  const [sortedData, setSortedData] = useState(coinData);

  function handleSort(objectKey: string) {
    const sortedArr = [...sortedData].sort((a, b) => {
      if (a[objectKey] < b[objectKey]) return isAscending ? 1 : -1;
      if (a[objectKey] > b[objectKey]) return isAscending ? -1 : 1;
      return 0;
    });
    setSortedData(sortedArr);
    setIsAscending(!isAscending);
  }

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
    <div className="w-full flex justify-center items-center">
      <div className=" w-[95%] md:px-6 md:py-6 mt-4 overflow-x-auto font-poppins text-xs lg:text-sm bg-white dark:bg-dark-600 rounded-md">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="font-medium">
              <th className="py-3 text-left" onClick={() => handleSort("name")}>
                Name
              </th>
              <th className="py-3" onClick={() => handleSort("current_price")}>
                Price
              </th>
              <th className="py-3" onClick={() => handleSort("price_change_percentage_1h_in_currency")}>
                1h%
              </th>
              <th className="py-3" onClick={() => handleSort("price_change_percentage_24h_in_currency")}>
                24h%
              </th>
              <th className="py-3" onClick={() => handleSort("price_change_percentage_7d_in_currency")}>
                7d%
              </th>
              <th className="py-3" onClick={() => handleSort("market_cap")}>
                Market Cap
              </th>
              <th className="py-3" onClick={() => handleSort("market_cap_change_24h")}>
                Volume(24h)
              </th>
              <th className="py-3" onClick={() => handleSort("total_supply")}>
                Circulating Supply
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.slice(0, itemsToShow).map((coin: any, index: number) => (
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
    </div>
  );
};

export default MainTable;
