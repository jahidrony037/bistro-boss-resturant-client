import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = useAuth() || {};
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "User LogOUT Successful",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
      })
      .catch((err) => console.log(err.message));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="uppercase ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="uppercase">
          Contact US
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="uppercase">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="uppercase">
          our menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salads" className="uppercase">
          our shop
        </NavLink>
      </li>
      {user ? (
        <div className="flex items-center gap-2">
          <>
            <button
              onClick={handleLogOut}
              className="uppercase text-white bg-none btn"
            >
              sign OUT
            </button>
          </>
          <div className="avatar">
            <div className="w-[44px] ring-2 rounded-full">
              <img src={user?.photoURL} alt={`${user?.displayName} image`} />
            </div>
          </div>
        </div>
      ) : (
        <li>
          <NavLink to="/login" className="uppercase">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#151515] fixed max-w-screen-xl mx-auto z-10 text-white bg-opacity-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 flex gap-3"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro-Boss</a>
      </div>
      <div className="navbar-end w-full hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
