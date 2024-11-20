import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
          <img
            src="https://media.licdn.com/dms/image/D5612AQEnCvyDXPo2yw/article-cover_image-shrink_720_1280/0/1706457435383?e=2147483647&v=beta&t=NMMqyNVbKLBc3UXEwxbFAZuo0feMQLxSk_8Q3jpyUfQ"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mycareersaathi.com/wp-content/uploads/2023/02/Career-Counselling-After-12th-1536x864.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fairgaze.com/images/UploadedImages/thumbs/0295264_0295264_ikm.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://showmecourses.com/wp-content/uploads/2021/10/event-management-institute10.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQEQ2hN6chh0tA/article-cover_image-shrink_720_1280/0/1694089868897?e=2147483647&v=beta&t=s8H2cIcZ7PP0ufgC7oPA2at5CLRIAEzT3NItVJsLax8"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
