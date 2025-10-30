import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-yellow-500 rounded-full shadow-lg">
            <FaExclamationTriangle className="h-12 w-12 text-white animate-bounce" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 hover:bg-yellow-600 transition-colors px-6 py-3 rounded-xl font-medium shadow-md"
        >
          Go to Dashboard
        </button>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} School ERP System
      </footer>
    </div>
  );
};

export default NotFound;
