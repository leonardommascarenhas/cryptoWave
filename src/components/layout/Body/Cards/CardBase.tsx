import React, { useContext, useMemo } from "react";
import { AppContext } from "../../../../services/AppContextProvider";
import { QueryContext } from "../../../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import DisplayPercentage from "../../assets/Reusables/DisplayPercentage";
import CardTitle from "./CardTitle";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface TrendingItem {
  item: {
    small?: string; //algumas moedas não tem um simbolo na API
    name: string;
    price_btc: number;
  };
}

interface gainersLosers {
  image?: string; //algumas moedas não tem um simbolo na API
  id: string;
  price_change_percentage_24h: number;
}

const CardsDisplay = () => {
  return (
    <div className="hidden w-full lg:flex mt-4 px-2 lg:w-[95%] xl:w-[90%] min-w-[920px] max-w-[1840px]">
      <CardBase />
      <CardBase />
      <CardBase />
    </div>
  );
};

const CardBase = React.memo(() => {
  const { currency, currencySymbol } = useContext(AppContext);
  const { trending, coinData, btcToExchange } = useContext(QueryContext);

  function gainersByPercentageSorting(coinData: any) {
    const gainersLosers = useMemo(
      () =>
        [...coinData].sort((a: any, b: any) => b.price_change_percentage_24h - a.price_change_percentage_24h),
      [coinData]
    );
    return gainersLosers;
  }

  const gainersLosersArray = gainersByPercentageSorting(coinData);

  return (
    <article className="px-1 h-52 w-1/3 flex items-center dark:text-white font-medium">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="🔥" title="Trending" />
          <ul className="flex flex-col gap-3">
            {trending.map(({ item: { small, name, price_btc } }: TrendingItem, index: number) => (
              <li className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 ">{index + 1}</span>
                  <img src={small} alt="" className="w-4 h-4 rounded-full" />
                  <h3>{name}</h3>
                </div>
                <div className="text-xs font-semibold">{`${currencySymbol}: ${parseFloat(
                  (price_btc * btcToExchange.rates[currency].value).toFixed(6)
                )}`}</div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="🚀" title="Gainers" />
          <ul className="flex flex-col gap-3">
            {gainersLosersArray
              .map(({ image, id, price_change_percentage_24h }: gainersLosers, index: number) => (
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 ">{index + 1}</span>
                    <img src={image} alt="" className="w-4 h-4 rounded-full" />
                    <h3>{id}</h3>
                  </div>
                  <DisplayPercentage num={price_change_percentage_24h} />
                </li>
              ))
              .slice(0, 3)}
          </ul>
        </SwiperSlide>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="📉" title="Losers" />
          <ul className="flex flex-col gap-3">
            {gainersLosersArray
              .slice(-3)
              .reverse()
              .map(({ image, id, price_change_percentage_24h }: gainersLosers, index: number) => (
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 ">{index + 1}</span>
                    <img src={image} alt="" className="w-4 h-4 rounded-full" />
                    <h3>{id}</h3>
                  </div>
                  <DisplayPercentage num={price_change_percentage_24h} />
                </li>
              ))}
          </ul>
        </SwiperSlide>
      </Swiper>
    </article>
  );
});

export default CardsDisplay;
