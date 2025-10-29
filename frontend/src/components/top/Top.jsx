import React from "react";
import { FaIcons } from "../icons/Icons";
import { useAuth } from "../../context/admincontext/authcontext/AuthContext";

const Top = () => {
  const { FaBell, FaSearch } = FaIcons;
  const { state } = useAuth();
  console.log(state?.user?.userName);
  return (
    <div className="flex items-center justify-between px-4 py-1 md:px-8  w-full">
      {/* Logo */}

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 mx-4">
        <div className="relative w-full max-w-lg">
          <strong className="text-2xl">School Erp</strong>
        </div>
      </div>
      <div className="search border flex-1 flex items-center px-2 rounded-md">
        <FaSearch />
        <input
          type="text"
          className="border-0 p-[8px] w-full"
          placeholder="Search"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center  flex-1 justify-center">
        <button className="relative focus:outline-none hover:text-indigo-600 mx-5">
          <FaBell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 shadow">
            3
          </span>
        </button>
        <button className="flex items-center space-x-2 focus:outline-none hover:text-indigo-600">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
          <span
            className="hidden md:block font-medium text-gray-800"
            title={`${state?.user?.userName}`}
          >
            {" "}
            {state?.user?.userName}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Top;
