import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
const Cover = ({ title, description, image }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
      bgImageStyle={{ opacity: "1" }}
    >
      <div
        className="hero min-h-[700px]"
        //   style={{
        //     backgroundImage: `url(${image})`,
        //   }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="md:w-[750px] bg-[#15151599] md:py-[90px] py-14 px-20  rounded">
            <h1 className="mb-5 lg:text-[88px] text-[50px] font-bold">
              {title}
            </h1>
            <p className="mb-5 text-[24px]">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cover;
