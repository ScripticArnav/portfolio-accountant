import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="#" class="font-bold text-xl">
            AS Fintacxx Solutions
          </Link>
          <ul class="hidden md:flex space-x-6">
            <li>
              <NavLink to="/home" class="hover:text-gray-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" class="hover:text-gray-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" class="hover:text-gray-400">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" class="hover:text-gray-400">
                Contact
              </NavLink>
            </li>
          </ul>
          <button id="menu-toggle" class="md:hidden focus:outline-none">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H20M4 12H20M4 18H11z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
