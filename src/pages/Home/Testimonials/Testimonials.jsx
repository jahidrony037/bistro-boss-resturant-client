import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitles from "../../../components/shared/SectionTitles/SectionTitles";
const Testimonials = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/reviews");
      setRatings(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <SectionTitles
        heading="---What Our Clients Say---"
        subHeading="TESTIMONIALS"
      />

      <div>
        {
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {ratings?.map((rating) => (
              <SwiperSlide key={rating._id}>
                {" "}
                <Rating
                  style={{ maxWidth: 180 }}
                  value={rating.rating}
                  readOnly
                  className="mx-auto"
                />
                <FaQuoteLeft className="mx-auto mt-5" size={50} />
                <div className="mb-9">
                  <p className="text-center text-[20px]">{rating.details}</p>
                  <p className="text-center text-[#CD9003] text-[32px] px-5">
                    {rating.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  );
};

export default Testimonials;
