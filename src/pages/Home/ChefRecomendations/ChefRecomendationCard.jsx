import PropTypes from "prop-types";
const ChefRecomendationCard = ({ item }) => {
  const { image, name, ingredients } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-2">
        <img
          src={image}
          alt={`${name} image`}
          className="rounded-xl h-[300px] w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{ingredients}</p>
        <div className="card-actions">
          <button className="btn text-[#BB8506] uppercase">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

ChefRecomendationCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ChefRecomendationCard;
