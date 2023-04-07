import { useQueries } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { IconType } from "react-icons/lib";
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
  icon: IconType;
  iconStyle?: string;
  slideContentArray: string[];
  secondArray: CardMainContent[];
}

const CardBase = ({ icon: Icon, iconStyle, slideContentArray, secondArray }: Props) => {
  return (
    <article className="h-52 w-1/3 flex items-center">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        {slideContentArray.map((title) => (
          <SwiperSlide className="trendingSlides">
            <div className="flex items-center gap-3">
              <span className={iconStyle}>
                <Icon size={24} />
              </span>
              <h2>{title}</h2>
            </div>
            {secondArray.map(({ item: { small, name } }, index) => (
              <div className="flex items-center gap-3">
                <span>{index + 1}</span>
                <img src={small} alt="" className="w-4 h-4 rounded-full" />
                <h2>{name}</h2>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

const CardsDisplay = () => {
  const arrayOfTitles = ["trending", "gainers", "losers"];

  const [trending, teste] = useQueries({
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
        queryKey: ["users"],
        queryFn: async () => axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data),
      },
    ],
  });

  if (trending.isLoading) return "Loading Posts...";
  if (teste.isLoading) return "Loading Users...";
  return (
    <div className="hidden lg:flex items-center justify-center gap-2 mt-4">
      <CardBase
        icon={AiTwotoneFire}
        iconStyle="text-red-600"
        slideContentArray={arrayOfTitles}
        secondArray={trending.data}
      />
    </div>
  );
};

export default CardsDisplay;
