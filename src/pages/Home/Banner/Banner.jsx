import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel autoPlay="yes" infiniteLoop="yes" interval={3000}>
      <div>
        <img src="https://i.ibb.co/zfvGK5M/01.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/jhKM0xY/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/BTWjrLT/03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/frQ3CJf/04.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/3Tw4Lf8/05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/5jTSbyv/06.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
