import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="#" class="font-bold text-xl">
            My Brand
          </a>
          <ul class="hidden md:flex space-x-4">
            <li>
              <a href="#" class="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Contact
              </a>
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
