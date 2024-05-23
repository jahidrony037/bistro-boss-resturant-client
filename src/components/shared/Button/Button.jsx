import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({ children, category }) => {
  return (
    <div>
      <Link to={`/order/${category}`}>
        <button
          className="uppercase btn bg-[#fff] hover:bg-[#fff] text-center mx-auto"
          style={{ borderBottom: "3px solid #151515" }}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Button;
