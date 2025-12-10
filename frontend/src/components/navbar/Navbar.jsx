import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
          >
            School ERP
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-1 text-sm font-medium px-4 py-2 bg-black text-white rounded shadow hover:bg-blue-700 transition"
            >
              <FaUserAlt className="text-base" />
              Login
            </Link>

            <Link
              to="/enquiry"
              className="text-sm font-medium px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
            >
              Enquiry
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col py-4 px-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="block text-white bg-blue-600 px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="block text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-50 transition"
            >
              Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
