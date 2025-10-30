import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
// import { LockClosedIcon } from "@heroicons/react/24/solid";

const UnAuthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-600 rounded-full shadow-lg">
            <IoLockClosed className="h-12 w-12 text-white animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2">Access Denied</h1>
        <p className="text-gray-300 mb-6">
          You don’t have permission to view this page. Please log in with the
          correct account or return to the dashboard.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-xl font-medium shadow-md"
        >
          Go to Login
        </button>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} School ERP System
      </footer>
    </div>
  );
};

export default UnAuthorized;
