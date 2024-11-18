import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from '../../assets/1684853593469.png'
import banner2 from '../../assets/Career-Counselling-After-12th-1024x576.jpg'
import banner3 from '../../assets/fjPkcobO-Career-Counselling-Workshop-Education2-1440-x-720.jpg'
import banner4 from '../../assets/1690638297937.jfif'
import banner5 from '../../assets/career-counseling.webp'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner5} alt="" />
        </SwiperSlide>
       
       
      </Swiper>
    </div>
  );
};

export default Banner;
