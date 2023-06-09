import { useState, useRef, useEffect, useContext } from "react";
import { QueryContext } from "../../../../App";
import Item from "./Item";
import TableHeader from "./TableHeader";

/* 
Make sure the first child of every row to match the exact color of the table
for the sticky effect be cover the other cells on smaller devices 
*/

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

  console.log(sortedData);

  return (
    <div className="w-full lg:w-[95%] xl:w-[90%] px-3">
      <div className="mt-4 overflow-x-auto font-poppins text-xs xl:text-sm bg-white dark:bg-dark-600 rounded-md">
        <table className="w-full min-w-[920px] max-w-[1840px]">
          <TableHeader handleSort={handleSort} />
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
