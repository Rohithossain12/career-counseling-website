import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const links = (
    <div className="flex gap-5 font-bold ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allService">All Service</NavLink>

      {user?.email && <NavLink to="/profile">My Profile</NavLink>}
      <NavLink to="/about">About Us</NavLink>
    </div>
  );

  return (
    <div className="bg-[#6D8CA0]">
      <div className="navbar container mx-auto  pt-4 pb-4">
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
              className="menu menu-lg lg:hidden  dropdown-content bg-[#F1F0EA]  rounded-box z-[1] mt-5 pb-2 w-72  p-5 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" px-3 md:px-6 py-2 bg-white rounded-full md:font-extrabold  md:text-2xl">
            <p>
              <span className="text-purple-700">Quick</span>
              <span className="text-green-500">Career</span>
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user && (
            <p className=" ">
              <img
                title={user.displayName}
                className="w-12 h-12 border cursor-pointer object-cover rounded-full"
                src={user.photoURL}
                alt=""
              />
            </p>
          )}
          {user && user?.email ? (
            <button
              onClick={logout}
              className="px-4 py-2 font-semibold bg-white rounded-full"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-white rounded-full font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
