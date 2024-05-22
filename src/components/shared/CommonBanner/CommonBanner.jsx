import PropTypes from "prop-types";
const CommonBanner = ({ title, description, bgColor, textColor }) => {
  return (
    <div className="bg-[url('https://i.ibb.co/b5B3dyS/b32bc60bcd909b6c46c7cc29fa0aa2fc-Expires-1716768000-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-Kfa.jpg')] bg-no-repeat bg-center bg-cover h-[572px] flex items-center justify-center mt-[100px]">
      <div
        className={`bg-[${bgColor}]  mx-[18%] py-[60px] px-[45px] text-[${textColor}]`}
      >
        <h2 className=" font-normal text-[45px] text-center">{title}</h2>
        <p className="text-[16px] text-center font-normal  w-full mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

CommonBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
export default CommonBanner;
