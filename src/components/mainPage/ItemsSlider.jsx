import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "/index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Title from "./Title";

const itemsSlider = ({ itemsType, itemsCategories }) => {
  return (
    <div className=" mini-slider mb-[100px] mt-[100px] ">
      <Title title={itemsType} />
      <Swiper
        freeMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // speed={6000}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        loop={true}
        centeredSlides={false}
        spaceBetween={-32}
        navigation={true}
      >
        {itemsCategories.map((item) => {
          const { id, title, img, link } = item;
          return (
            <SwiperSlide key={id} className="">
              <Link href={link} className=" w-[262px] h-[262px]  ">
                <img src={img} alt="" className="rounded-xl mb-[30px] " />
                <p className="mt-[3px] flex font-bold text-[#3C4242]">
                  {title}
                </p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default itemsSlider;
