import PropTypes from "prop-types";
const SectionTitles = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto mb-[48px] mt-[79px]">
      <h2 className="text-[#D99904] font-normal text-[20px] text-center italic mb-4">
        {heading}
      </h2>
      <div className="h-[4px] border-[4px] border-[#e8e8e8] border-solid w-3/4  md:w-[422px] mx-auto rounded-full"></div>
      <h2 className="text-[#151515] text-[40px] text-center font-normal py-6">
        {subHeading}
      </h2>
      <div className="h-[4px] border-[4px] border-[#e8e8e8] border-solid w-3/4 md:w-[422px] mx-auto rounded-full"></div>
    </div>
  );
};

SectionTitles.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitles;
