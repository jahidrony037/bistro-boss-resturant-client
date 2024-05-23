import PropTypes from "prop-types";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  //   console.log(image);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-2">
        <img
          src={image}
          alt={`${name} image`}
          className="rounded-xl h-[300px] w-full object-cover"
        />
        <p className="py-3 px-2 bg-black rounded text-white absolute right-3 top-1">
          $ {price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn text-[#BB8506] uppercase">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FoodCard;
