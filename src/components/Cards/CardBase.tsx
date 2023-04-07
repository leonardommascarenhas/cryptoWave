import { useQuery } from "@tanstack/react-query";
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
  slideContentArray: string[];
  secondArray: CardMainContent[];
}

const CardBase = ({ icon: Icon, slideContentArray, secondArray }: Props) => {
  return (
    <article className="h-52 w-1/3 flex items-center">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        {slideContentArray.map((title) => (
          <SwiperSlide className="trendingSlides">
            <h2>
              <span>
                <Icon size={24} />
              </span>
              {title}
            </h2>
            {secondArray.map(({ item: { small, name } }, index) => (
              <div className="flex items-center">
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
  const { isLoading, isError, data } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      return axios.get("https://api.coingecko.com/api/v3/search/trending").then((res) => {
        return res.data.coins.splice(0, 3);
      });
    },
  });
  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="hidden lg:flex items-center justify-center gap-2 mt-4">
      <CardBase icon={AiTwotoneFire} slideContentArray={arrayOfTitles} secondArray={data} />
    </div>
  );
};

export default CardsDisplay;
