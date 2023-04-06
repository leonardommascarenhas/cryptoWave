import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Import Swiper navigation module

interface Props {
  slideAutoPlayDelay: number;
}

const CardBase = ({ slideAutoPlayDelay }: Props) => {
  return (
    <article className="h-52 w-1/3 flex items-center">
      <Swiper
        pagination={{ clickable: true }} // make pagination clickable
        navigation={true} // enable navigation buttons
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: slideAutoPlayDelay }}
        allowSlideNext={true} // enable slide next
        allowSlidePrev={true} // enable slide prev
        allowTouchMove={true} // enable touch move
        className="mySwiper"
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </article>
  );
};
export default CardBase;
