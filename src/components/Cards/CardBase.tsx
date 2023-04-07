import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Props {
  slideContentArray: string[];
}

const CardBase = ({ slideContentArray }: Props) => {
  return (
    <article className="h-52 w-1/3 flex items-center">
      <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={true}>
        {slideContentArray.map((title) => (
          <SwiperSlide className="trendingSlides">{title}</SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

const CardsDisplay = () => {
  const arrayOfTitles = ["treding", "gainers", "losers"];
  return (
    <div className="hidden lg:flex items-center justify-center gap-2 mt-4">
      <CardBase slideContentArray={arrayOfTitles} />
      <CardBase slideContentArray={arrayOfTitles} />
      <CardBase slideContentArray={arrayOfTitles} />
    </div>
  );
};

export default CardsDisplay;
