import { useQueries } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { AiTwotoneFire } from "react-icons/ai";
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

interface Props {
  iconStyle?: string;
  secondArray: CardMainContent[];
  third?: any[];
}

const CardBase = ({ secondArray, third }: Props) => {
  console.log(third);
  return (
    <article className="h-52 w-1/3 flex items-center dark:text-white">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        <SwiperSlide className="trendingSlides">
          <div className="-ml-2 flex items-center gap-1">
            <span className="bg-red-600">
              <AiTwotoneFire size={28} />
            </span>
            <h2 className="text-xl">Trending</h2>
          </div>
          {secondArray.map(({ item: { small, name } }, index) => (
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-semibold">{index + 1}</span>
              <div className="flex items-center gap-2">
                <img src={small} alt="" className="w-4 h-4 rounded-full" />
                <h2>{name}</h2>
              </div>
            </div>
          ))}
        </SwiperSlide>
        <SwiperSlide className="trendingSlides">
          <div className="-ml-2 flex items-center gap-1">
            <span className="bg-red-600">
              <AiTwotoneFire size={28} />
            </span>
            <h2 className="text-xl"></h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

const CardsDisplay = () => {
  const [trending, gainers] = useQueries({
    queries: [
      {
        queryKey: ["trending"],
        queryFn: async () =>
          axios
            .get("https://api.coingecko.com/api/v3/search/trending")
            .then((res) => res.data.coins.splice(0, 3)),
        staleTime: 300000,
        refetchOnWindowFocus: false,
      },

      {
        queryKey: ["gainers"],
        queryFn: async () =>
          axios
            .get("https://api.coingecko.com/api/v3/coins/markets", {
              params: {
                vs_currency: "usd",
              },
            })
            .then((res) =>
              res.data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
            ),
      },
    ],
  });

  if (trending.isLoading) return <div></div>;
  if (gainers.isLoading) return <div></div>;
  return (
    <div className="hidden lg:flex items-center justify-center gap-2 mt-4">
      <CardBase secondArray={trending.data} third={gainers.data} />
    </div>
  );
};

export default CardsDisplay;
