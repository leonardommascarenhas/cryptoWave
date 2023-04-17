import { useQueries } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import DisplayPercentage from "./DisplayPercentage";
import axios from "axios";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CardMainContent {
  item: {
    small?: string; //algumas moedas não tem um simbolo na API
    name: string;
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
}

const CardBase = ({ trendingArray, gainersLosersArray }: Props) => {
  return (
    <article className="h-52 w-1/3 flex items-center dark:text-white text-base font-semibold  ">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        <SwiperSlide className="trendingSlides">
          <div className="-ml-2 flex items-center gap-1">
            <span className="text-xl">🔥</span>
            <h3 className="text-xl">Trending</h3>
          </div>
          <ul className="flex flex-col gap-3">
            {trendingArray.map(({ item: { small, name } }, index) => (
              <li className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-semibold">{index + 1}</span>
                <div className="flex items-center gap-2">
                  <img src={small} alt="" className="w-4 h-4 rounded-full" />
                  <h3>{name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
        <SwiperSlide className="trendingSlides">
          <div className="-ml-2 flex items-center gap-1">
            <span className="text-xl">🚀</span>
            <h3 className="text-xl">Gainers</h3>
          </div>
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
          <div className="-ml-2 flex items-center gap-1">
            <span className="text-xl">📉</span>
            <h3 className="text-xl">Losers</h3>
          </div>
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

const CardsDisplay = ({ trending, coinData }: any) => {
  return (
    <div className="hidden lg:flex items-center justify-center gap-2 mt-4">
      <CardBase trendingArray={trending} gainersLosersArray={coinData} />
    </div>
  );
};

export default CardsDisplay;
