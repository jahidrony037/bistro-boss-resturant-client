import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdPayment, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart, refetch] = useCart();
  refetch();
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/dashboard/userHome">
              <FaHome size={35} />
              User Home
            </NavLink>
          </li>
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/dashboard/userHome">
              <FaCalendarAlt size={35} />
              Reservation
            </NavLink>
          </li>
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/dashboard/userHome">
              <MdPayment size={35} />
              Payment History
            </NavLink>
          </li>
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart size={35} className="inline-flex gap-2" />
              My Cart : {cart.length}
            </NavLink>
          </li>
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/dashboard/addReview">
              <MdReviews size={35} />
              Add Review
            </NavLink>
          </li>
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/dashboard/myBookings">
              <FaCalendarCheck size={35} />
              My Booking
            </NavLink>
          </li>

          <div className="divider divider-horizontal border-2 border-gray-500 w-full -ml-1"></div>

          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/">
              <FaHome size={25} />
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer py-3 text-xl flex uppercase">
            <NavLink to="/menu">
              <FaHome size={25} />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
