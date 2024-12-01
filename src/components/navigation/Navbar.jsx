import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userDefault } from "../../assets";
import AuthContext from "../../context/auth-context";

const link =
  "font-medium px-5 py-2 transition duration-300 rounded-md text-primary hover:text-color1";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState(false);

  const profilePicture = authCtx.profile.imageUrl;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
    <nav className=" fixed bg-gray-100 shadow-xl z-50 w-full px-5 py-2 flex justify-between items-center opacity-90">
      <div className="xl:max-w-[1280px] w-full flex justify-between items-center  ">
        <div className="flex items-center">
          <i
            className={`${
              expand ? "fa-x mr-[3px]" : "fa-bars"
            } fa-solid text-primary text-2xl cursor-pointer inline md:hidden mr-3`}
            onClick={() => setExpand((prev) => !prev)}
          />
          <Link to="/" className="text-color3 font-bold text-3xl">
            K<span class=" dark:text-orange-700">Y</span>N
          </Link>
        </div>
        <ul className="md:flex hidden md:space-x-4 text-primary ">
          <NavLink to="/" className={link}>
            Home
          </NavLink>
          <NavLink to="/stores" className={link}>
            Stores
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/contact" className={link}>
            Contact
          </NavLink>

          <NavLink to="/terms" className={link}>
            Terms & Conditions
          </NavLink>
        </ul>
        <ul
          className={`${
            expand
              ? "md:hidden flex flex-col justify-center items-center absolute z-10 top-[68px] left-0 right-0 bg-gray-100 space-y-10 py-10"
              : "hidden"
          } `}
        >
          <NavLink to="/" className={link}>
            Home
          </NavLink>
          <NavLink to="/stores" className={link}>
            Stores
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/contact" className={link}>
            Contact
          </NavLink>
          <NavLink to="/terms" className={link}>
            Terms & Conditions
          </NavLink>
        </ul>
        <ul>
          {isLoggedIn && (
            <div>
              <div
                className="flex items-center space-x-3 text-primary cursor-pointer hover:text-color1"
                onClick={() => setShow((prev) => !prev)}
              >
                <div className="object-cover rounded-full overflow-hidden w-[36px] h-[36px]">
                  <img
                    src={profilePicture ? profilePicture : userDefault}
                    alt="profile_picture"
                  />
                </div>
                <p className="font-inter">{authCtx.profile.name}</p>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              <div
                className={`w-[150px] absolute z-20 text-primary bg-gray-100 border border-color2 
              mt-2 py-3 px-3 rounded-md shadow-md ${show ? "" : "hidden"}`}
              >
                <Link
                  to="/profile"
                  className="block mb-3 ml-1 font-medium hover:text-color1"
                >
                  My Profile
                </Link>
                <Link
                  to="/stores/add"
                  className="block mb-3 ml-1 font-medium hover:text-color1"
                >
                  Add Store
                </Link>
                <button
                  className="w-full bg-primary py-2 rounded-md text-color2"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
          {!isLoggedIn && (
            <div className="space-x-3">
              <NavLink
                to="/login"
                className="font-medium px-3 md:px-5 py-2 transition duration-300 rounded-md border 
                border-primary text-primary  hover:opacity-70"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="font-medium px-3 md:px-5 py-2 transition duration-300 rounded-md border 
                border-secondary text-color2 bg-primary hover:opacity-80"
              >
                Register
              </NavLink>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
