import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Props {
  slideAutoPlayDelay: number;
}

const CardBase = ({ slideAutoPlayDelay }: Props) => {
  return (
    <article className="h-52 w-1/3 flex items-center bg-red">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: slideAutoPlayDelay }}
        className="mySwiper"
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </article>
  );
};
export default CardBase;
