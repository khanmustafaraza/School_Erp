import React from "react";
import { FaIcons } from "../icons/Icons";
import useAuth from "../../store/authcontext/AuthContext";

const Top = () => {
  const { FaBell, FaSearch } = FaIcons;
  const { state } = useAuth();

  return (
    <div
      className="w-full bg-white border-b border-gray-200 px-4 py-2 
      flex items-center justify-between"
    >
      {/* Brand */}
      <h1 className="text-lg font-semibold text-blue-600 tracking-tight">
        School ERP
      </h1>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative p-1.5 hover:bg-gray-100 rounded transition">
          <FaBell className="w-5 h-5 text-gray-600" />
          <span
            className="absolute -top-1 -right-1 bg-red-600 text-white 
            text-[10px] rounded-full px-1"
          >
            3
          </span>
        </button>

        {/* User */}
        <button className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded transition">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden md:block text-gray-700 text-sm truncate max-w-[110px]">
            {state?.user?.userName}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Top;
