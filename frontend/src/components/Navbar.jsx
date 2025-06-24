import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";
import logo from  "../assets/logo.png";
import { navItems } from "../constants";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-black border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
           <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight text-white">AS Fintaccx solution</span>
           </div>
           <ul className="hidden lg:flex ml-14 space-x-12">
           {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-orange-600 pb-1 text-orange-700 font-semibold"
                      : "hover:text-orange-700 transition-colors text-white"
                  }
                  end={item.href === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
           </ul>
           <div className="hidden lg:flex justify-center space-x-12 items-center">
            {!isAuthenticated && location.pathname !== "/signin" && (
              <Link to="/signin" className="py-2 px-3 border rounded-md text-white border-orange-600">
                Sign In
              </Link>
            )}
            {!isAuthenticated && location.pathname !== "/signup" && (
              <Link
                to="/signup"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
              >
                Create an account
              </Link>
            )}
            {isAuthenticated && (
              <Link to="/profile" className="flex items-center">
                <img
                  src={user?.avatar || logo}
                  alt="Profile"
                  className="h-10 w-10 rounded-full border-2 border-orange-500 object-cover hover:scale-105 transition"
                />
              </Link>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X/> :<Menu/>}
            </button>

          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-orange-600 pb-1 text-orange-700 font-semibold"
                        : "hover:text-orange-700 transition-colors text-white"
                    }
                    end={item.href === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 items-center mt-4">
              {!isAuthenticated && location.pathname !== "/signin" && (
                <Link to="/signin" className="py-2 px-3 border rounded-md text-white border-orange-600">
                  Sign In
                </Link>
              )}
              {!isAuthenticated && location.pathname !== "/signup" && (
                <Link
                  to="/signup"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
                >
                  Create an account
                </Link>
              )}
              {isAuthenticated && (
                <Link to="/profile" className="flex items-center">
                  <img
                    src={user?.avatar || logo}
                    alt="Profile"
                    className="h-10 w-10 rounded-full border-2 border-orange-500 object-cover hover:scale-105 transition"
                  />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      </nav>
    </>
  );
};

export default Navbar;
