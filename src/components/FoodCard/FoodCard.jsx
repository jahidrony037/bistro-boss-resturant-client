import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  //   console.log(image);
  const { user } = useAuth() || {};
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(user.email);

  const [, refetch] = useCart();

  const axiosSecure = useAxiosSecure();
  const handleAddToCart = () => {
    // console.log(food);

    if (user && user?.email) {
      const cartItem = {
        // eslint-disable-next-line no-const-assign
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post(`/carts`, cartItem)
        .then((response) => {
          // console.log(response);
          if (response.data?.insertedId) {
            toast.success(`${name} Food Added To the Cart`);
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Your are Not LoggedIn",
        text: "Please Login first to added the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={handleAddToCart}
            className="btn text-[#BB8506] uppercase"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FoodCard;
