import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-extrabold text-gray-800 hover:text-blue-600 transition duration-300">
              KRISHNA PUBLIC SCHOOL
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition duration-300"
            >
              <FaUserAlt className="text-lg" />
              Login
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 py-4 px-6 transition duration-300">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="block text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/services"
              className="block text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
