import { useContext } from "react";
import { AppContext, QueryContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import DisplayPercentage from "../layout/assets/Reusables/DisplayPercentage";
import CardTitle from "./CardTitle";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface trending {
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
    <div className="hidden lg:flex justify-center gap-2 mt-4 px-4">
      <CardBase />
      <CardBase />
      <CardBase />
    </div>
  );
};

const CardBase = () => {
  const { currency, currencySymbol } = useContext(AppContext);
  const { trending, coinData, btcToExchange } = useContext(QueryContext);

  return (
    <article className="h-52 w-1/3 flex items-center dark:text-white text-base font-semibold  ">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="🔥" title="Trending" />
          <ul className="flex flex-col gap-3">
            {trending.map(({ item: { small, name, price_btc } }: trending, index: number) => (
              <li className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-semibold">{index + 1}</span>
                  <img src={small} alt="" className="w-4 h-4 rounded-full" />
                  <h3>{name}</h3>
                </div>
                <div className="text-xs">{`${currencySymbol}: ${(
                  price_btc * btcToExchange.rates[currency].value
                ).toFixed(6)}`}</div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="🚀" title="Gainers" />
          <ul className="flex flex-col gap-3">
            {coinData
              .map(({ image, id, price_change_percentage_24h }: gainersLosers, index: number) => (
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-semibold">{index + 1}</span>
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
            {coinData
              .slice(-3)
              .reverse()
              .map(({ image, id, price_change_percentage_24h }: gainersLosers, index: number) => (
                <li className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-semibold">{index + 1}</span>
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
};

export default CardsDisplay;
