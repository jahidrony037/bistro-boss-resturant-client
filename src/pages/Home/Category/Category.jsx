import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitles from "../../../components/shared/SectionTitles/SectionTitles";

const Category = () => {
  const heading = "---From 11:00am to 10:00pm---";
  const subHeading = "ORDER ONLINE";
  return (
    <div>
      <SectionTitles heading={heading} subHeading={subHeading} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-screen-xl mx-auto"
      >
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/KjDTLnnC/slide5.jpg"
            className="object-cover mr-0"
            alt="salads"
          />
          <h2 className="uppercase absolute bottom-4 text-[32px] font-normal text-[#FFFF] ml-[25%]">
            SALADS
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0hysRCV/slide2.jpg" alt="pizzas" />
          <h2 className="uppercase absolute bottom-4 text-[32px] font-normal text-[#FFFF] ml-[25%]">
            pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/cD8qHqC/slide3.jpg" alt="soups" />
          <h2 className="uppercase absolute bottom-4 text-[32px] font-normal text-[#FFFF] ml-[25%]">
            soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FVgRdm0/slide4.jpg" alt="desert" />
          <h2 className="uppercase absolute bottom-4 text-[32px] font-normal text-[#FFFF] ml-[25%]">
            desert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/KjDTLnnC/slide5.jpg" alt="salads" />
          <h2 className="uppercase absolute bottom-4 text-[32px] font-normal text-[#FFFF] ml-[25%]">
            SALADS
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
