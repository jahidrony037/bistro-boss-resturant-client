import PropTypes from "prop-types";

const PopularMenuCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-2 items-center">
      <div>
        <img
          src={image}
          alt={`${name} image`}
          className="rounded-tr-full rounded-br-full rounded-bl-full w-[118px] h-[104px] bg-[#D9D9D9] object-cover"
        />
      </div>
      <div>
        <div className="flex gap-4 justify-between">
          <p className="text-[#151515] text-[20px] font-normal">
            {name}--------
          </p>{" "}
          <p className="text-[#BB8506] text-[20px] font-normal">---${price}</p>
        </div>
        <p className="text-[#737373] text-[16px] font-normal">{recipe}</p>
      </div>
    </div>
  );
};

PopularMenuCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PopularMenuCard;
