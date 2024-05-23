import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CommonBanner from "../../../components/shared/CommonBanner/CommonBanner";
import MenuItem from "../MenuItem/MenuItem";
const MenuCategory = ({ items, title }) => {
  return (
    <div>
      {title && (
        <CommonBanner
          bgColor="#15151599"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          textColor="#FFF"
          title={title}
        />
      )}
      <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button
            className="uppercase btn bg-[#fff] hover:bg-[#fff]  mx-auto text-center"
            style={{ borderBottom: "3px solid #151515" }}
          >
            Ordered {title} Food
          </button>
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default MenuCategory;
