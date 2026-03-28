import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                ASFintaccx Solutions
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === "/"
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === "/about"
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              About
            </Link>
            {/* <Link
              to="/services"
              className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === "/services"
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Services
            </Link> */}

<div className="relative group">
              <button
                className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname.startsWith("/services")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                Services 
                <span className="text-xs"> ▼ </span>
              </button>

              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <Link
                  to="/services/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Account
                </Link>
                <Link
                  to="/services/loans"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Loans
                </Link>
                <Link
                  to="/services/taxation"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Taxation
                </Link>
                <Link
                  to="/services/risk-assessment"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Risk Assessment
                </Link>
                <Link
                  to="/services/advisory"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Advisory
                </Link>
                <Link
                  to="/services/business-auxiliary"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Business Auxiliary
                </Link>
                <Link
                  to="/services/finance"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Finance
                </Link>
                <Link
                  to="/services/business-setup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Business Setup
                </Link>
                <Link
                  to="/services/corporate-compliance"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Corporate Compliance
                </Link>
                <Link
                  to="/services/payroll"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Payroll
                </Link>

              </div>
            </div>

            {/* <Link to="/calculators" className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
              location.pathname === '/calculators' ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600'
            }`}>
              Calculators
            </Link> */}
            <div className="relative group">
              <button
                className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname.startsWith("/calculators")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                Calculators
                <span className="text-xs"> ▼ </span>
              </button>

              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <Link
                  to="/calculators/gst"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  GST
                </Link>
                <Link
                  to="/calculators/emi"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  EMI
                </Link>
                <Link
                  to="/calculators/income-tax"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Income Tax
                </Link>
                <Link
                  to="/calculators/sip"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  SIP
                </Link>
                <Link
                  to="/calculators/tds"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  TDS
                </Link>
                <Link
                  to="/calculators/hra"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  HRA Exemption
                </Link>{" "}
              </div>
            </div>

            {/* <Link
              to="/knowledge-bank"
              className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === "/knowledge-bank"
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Knowledge Bank
            </Link> */}

              <div className="relative group">
              <button
                className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname.startsWith("//knowledge-bank")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                Knowledge Bank
                <span className="text-xs"> ▼ </span>
              </button>

              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <Link
                  to="/knowledge-bank/bulletins"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Bulletins
                </Link>
                <Link
                  to="/knowledge-bank/blogs"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blogs
                </Link>
                <Link
                  to="/knowledge-bank/rules"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Rules
                </Link>
                <Link
                  to="/knowledge-bank/acts"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Acts
                </Link>
                <Link
                  to="/knowledge-bank/links"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Links
                </Link>
                <Link
                  to="/knowledge-bank/utilities"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Utilities
                </Link>
                <Link
                  to="/knowledge-bank/forms"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Forms
                </Link>
                
              </div>
            </div>

            <Link
              to="/contact"
              className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === "/contact"
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/client-portal"
                  className="py-2 px-3 text-sm font-medium rounded-md transition-colors text-primary-600 bg-primary-50"
                >
                  Client Portal
                </Link>
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="py-2 px-4 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600"
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              Services
            </Link>
            <Link
              to="/calculators"
              className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              Calculators
            </Link>
            <Link
              to="/knowledge-bank"
              className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              Knowledge Bank
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary-600"
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/client-portal"
                  className="block py-2 px-3 text-base font-medium text-primary-600"
                >
                  Client Portal
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 px-3 text-base font-medium text-primary-600 hover:bg-primary-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block py-2 px-3 text-base font-medium text-primary-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
