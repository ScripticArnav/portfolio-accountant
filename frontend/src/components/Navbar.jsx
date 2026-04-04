import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/features/authSlice";
import { megaMenu } from "../constants";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get auth state from Redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menuItems = [
    { label: "Business Registration", href: "/business-registration" },
    { label: "Tax & Compliance", href: "/tax-compliance" },
    { label: "Trademark & IP", href: "/trademark-ip" },
    { label: "Lawyer Services", href: "/lawyer-services" },
    { label: "Documentation", href: "/documentation" },
    { label: "Others", href: "/others" },
  ];

  return (
    <nav className="bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Consult Button */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-slate-900 font-bold text-xl">F</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:inline">
                ASFintaccx
              </span>
            </Link>
          </div>

          {/* "Consult an Expert" Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-yellow-400 text-slate-900 text-sm font-bold rounded-md hover:bg-yellow-300 transition-colors duration-200">
              Consult an Expert ▼
            </button>
          </div>

          {/* Desktop Menu with Mega Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.label)}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setHoveredItem(null);
                }}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                    hoveredMenu === item.label
                      ? "text-yellow-400 bg-slate-800"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-slate-800"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs">▼</span>
                </Link>

                {/* Mega Menu Dropdown */}
                {megaMenu[item.label] && (
                  <div className="absolute top-full mt-0 bg-white shadow-2xl rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 w-max max-w-4xl left-1/2 transform -translate-x-1/2">
                    <div className="flex p-6 gap-8">
                      {/* Left Panel */}
                      <div className="w-56 border-r border-gray-200">
                        <div className="space-y-3">
                          {megaMenu[item.label].left.map((leftItem, idx) => (
                            <button
                              key={idx}
                              onMouseEnter={() => setHoveredItem(leftItem.title)}
                              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors text-left ${
                                hoveredItem === leftItem.title
                                  ? "bg-blue-50 text-slate-900"
                                  : "text-slate-700 hover:bg-gray-50"
                              }`}
                            >
                              <span className="text-xl">{leftItem.icon}</span>
                              <span className="font-medium text-sm">{leftItem.title}</span>
                              <span className="text-gray-400 ml-auto">→</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right Panel */}
                      <div className="w-72 max-h-96 overflow-y-auto">
                        {hoveredItem && megaMenu[item.label].right[hoveredItem] && (
                          <div>
                            <h3 className="font-bold text-slate-900 mb-4 text-base sticky top-0 bg-white">
                              {hoveredItem}
                            </h3>
                            <div className="space-y-3">
                              {megaMenu[item.label].right[hoveredItem].map(
                                (subItem, idx) => (
                                  <Link
                                    key={idx}
                                    to="#"
                                    className="block py-2 text-sm text-slate-700 hover:text-slate-900 hover:font-medium transition-colors"
                                  >
                                    {subItem}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-blue-50 px-6 py-4 border-t border-gray-200 rounded-b-lg flex items-center space-x-2">
                      <span className="text-blue-600">👤</span>
                      <span className="text-sm text-slate-700">
                        Prefer to talk to a business advisor first?
                        <Link to="#" className="text-blue-600 hover:underline ml-1">
                          Book a call back
                        </Link>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/client-portal"
                  className="px-4 py-2 text-sm font-medium text-yellow-400 hover:text-white transition-colors"
                >
                  Portal
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-yellow-400 text-slate-900 text-sm font-bold rounded-md hover:bg-yellow-300 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 bg-yellow-400 text-slate-900 text-sm font-bold rounded-md hover:bg-yellow-300 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-yellow-400"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button className="w-full py-3 px-4 bg-yellow-400 text-slate-900 text-base font-bold rounded-md hover:bg-yellow-300 transition-colors">
              Consult an Expert ▼
            </button>

            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 px-4 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.href || location.pathname.startsWith(item.href)
                    ? "text-yellow-400 bg-slate-700"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="border-t border-slate-700 pt-3 mt-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/client-portal"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 px-4 text-base font-medium text-yellow-400 hover:text-white"
                  >
                    Client Portal
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="w-full text-left py-3 px-4 bg-yellow-400 text-slate-900 text-base font-bold rounded-md hover:bg-yellow-300 transition-colors mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-3 px-4 bg-yellow-400 text-slate-900 text-base font-bold rounded-md hover:bg-yellow-300 transition-colors text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
