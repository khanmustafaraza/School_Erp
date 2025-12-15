import React from "react";
import { FaIcons } from "../icons/Icons";
import useAuth from "../../store/authcontext/AuthContext";

const Top = () => {
  const { FaBell } = FaIcons;
  const { state } = useAuth();

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Brand */}
      <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
        School
      </h1>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <FaBell className="w-5 h-5 text-slate-600" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white 
            text-[10px] font-semibold rounded-full px-1.5">
            3
          </span>
        </button>

        {/* User */}
        <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
            alt="User"
            className="w-9 h-9 rounded-full object-cover shadow-sm"
          />
          <span className="hidden md:block text-slate-700 text-sm truncate max-w-[120px]">
            {state?.user?.userName}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Top;
