import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ curEle }) => {
  const { bgColor, icon, link, title, subTitle, subIcon, subColor } = curEle;

  return (
    <NavLink to={link}>
      <div
        className="flex items-center justify-between w-[260px] h-[120px]
        p-4 border border-gray-200 rounded-md bg-white
        hover:bg-gray-50 transition-colors"
      >
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Main Icon */}
          <div
            className="w-[55px] h-[55px] flex justify-center items-center 
            rounded-md text-white text-2xl"
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>

          {/* Text */}
          <div>
            <h5 className="text-base font-semibold text-gray-700 capitalize">
              {title}
            </h5>
            <p className="text-gray-500 text-sm mt-0.5">{subTitle}</p>
          </div>
        </div>

        {/* Right Sub Icon */}
        {subIcon && (
          <div
            className="w-8 h-8 flex justify-center items-center rounded-full text-base"
            style={{
              backgroundColor: subColor || "#f3f4f6",
              color: "green",
            }}
          >
            {subIcon}
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default Card;
