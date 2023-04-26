import { useContext } from "react";
import { AppContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import DisplayPercentage from "./DisplayPercentage";
import CardTitle from "./CardTitle";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CardMainContent {
  item: {
    small?: string; //algumas moedas não tem um simbolo na API
    name: string;
    price_btc: number;
  };
}

interface price_change_percentage_24h {
  image?: string; //algumas moedas não tem um simbolo na API
  id: string;
  price_change_percentage_24h: number;
}
interface Props {
  iconStyle?: string;
  trendingArray: CardMainContent[];
  gainersLosersArray: price_change_percentage_24h[];
  btcToExchange: number;
}

const CardsDisplay = ({ trending, coinData, btcToExchange }: any) => {
  const { currency } = useContext(AppContext);
  return (
    <div className="hidden lg:flex justify-center gap-2 mt-4 px-4">
      <CardBase
        trendingArray={trending}
        gainersLosersArray={coinData}
        btcToExchange={btcToExchange.rates[currency].value}
      />
      <CardBase
        trendingArray={trending}
        gainersLosersArray={coinData}
        btcToExchange={btcToExchange.rates[currency].value}
      />
      <CardBase
        trendingArray={trending}
        gainersLosersArray={coinData}
        btcToExchange={btcToExchange.rates[currency].value}
      />
    </div>
  );
};

const CardBase = ({ trendingArray, gainersLosersArray, btcToExchange }: Props) => {
  console.log(trendingArray);
  const { currencySymbol } = useContext(AppContext);

  return (
    <article className="h-52 w-1/3 flex items-center dark:text-white text-base font-semibold  ">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="🔥" title="Trending" />
          <ul className="flex flex-col gap-3">
            {trendingArray.map(({ item: { small, name, price_btc } }, index) => (
              <li className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-semibold">{index + 1}</span>
                  <img src={small} alt="" className="w-4 h-4 rounded-full" />
                  <h3>{name}</h3>
                </div>
                <div className="text-xs">{`${currencySymbol}: ${(price_btc * btcToExchange).toFixed(
                  10
                )}`}</div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
        <SwiperSlide className="trendingSlides">
          <CardTitle emoji="🚀" title="Gainers" />
          <ul className="flex flex-col gap-3">
            {gainersLosersArray
              .map(({ image, id, price_change_percentage_24h }, index) => (
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
            {gainersLosersArray
              .slice(-3)
              .reverse()
              .map(({ image, id, price_change_percentage_24h }, index) => (
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
