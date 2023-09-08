import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        loopAdditionalSlides={1}
        navigation={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "716px", width: "100%" }} //calc(100vh - 107px) - fo full size
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top"
            src="https://i.ibb.co/vHgxv7J/Shop-hero-1-product-slide-1.jpg"
            alt="image1"
          />
          <div className=" w-[440px] absolute text-white left-[193px] top-[129px]">
            <p className=" text-[32px] mb-[40px] ">T-Shirt / Tops</p>
            <h1 className=" mb-[40px] text-[78px] font-bold leading-[93.622px] tracking-[0.315px] ">Summer Value Pack</h1>
            <p className="mb-[40px] text-[32px] ">cool / colorful / comfy</p>
            <button className=" hover:text-[#032F6E]   font-semibold  bg-[white] p-[16px_72px]  text-[24px] text-[#3C4242] rounded-md">
              Shop Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            className="w-full h-full object-cover object-top"
            src="https://img.freepik.com/fotos-gratis/linda-garota-ruiva-com-roupa-de-verao-segurando-o-buldogue-frances-jovem-atraente-de-chapeu-rindo-durante-a-sessao-de-retratos-com-o-cachorrinho_197531-11089.jpg?w=1380&t=st=1693913364~exp=1693913964~hmac=9835bd75fe959ed6c7119abd9cfcf9f98de13723799119a97f8582be6db61d4b"
            alt="image2"
          />
           <div className=" w-[440px] absolute text-white right-[193px] top-[129px]">
            <p className=" text-[32px] mb-[40px] ">T-Shirt / Tops</p>
            <h1 className=" mb-[40px] text-[78px] font-bold leading-[93.622px] tracking-[0.315px] ">Autumn Value Pack</h1>
            <p className="mb-[40px] text-[32px] ">cool / colorful / comfy</p>
            <button className=" hover:text-[#FFAB31]   font-semibold  bg-[white] p-[16px_72px]  text-[24px] text-[#3C4242] rounded-md">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="  ">
          <img
            className="w-full h-full object-cover object-top "
            src="https://images.pexels.com/photos/6500170/pexels-photo-6500170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image3"
          />
          <div className=" w-[440px] absolute text-white right-[193px] top-[129px]">
            <p className=" text-[32px] mb-[40px] ">T-Shirt / Tops</p>
            <h1 className=" mb-[40px] text-[78px] font-bold leading-[93.622px] tracking-[0.315px] ">Winter Value Pack</h1>
            <p className="mb-[40px] text-[32px] ">cool / colorful / comfy</p>
            <button className=" hover:text-[#2D5565]   font-semibold  bg-[white] p-[16px_72px]  text-[24px] text-[#3C4242] rounded-md">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
