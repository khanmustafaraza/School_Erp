import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ curEle }) => {
  const { bgColor, icon, link, title, subTitle, subIcon, subColor } = curEle;

  return (
    <NavLink to={link}>
      <div className="flex items-center justify-between w-[300px] h-[150px] p-5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Main Icon */}
          <div
            className="w-[70px] h-[70px] flex justify-center items-center rounded-lg text-white text-3xl"
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>

          {/* Text */}
          <div>
            <h5 className="text-xl font-semibold text-gray-700 capitalize">
              {title}
            </h5>
            <p className="text-gray-500 text-sm mt-1">{subTitle}</p>
          </div>
        </div>

        {/* Right Sub Icon */}
        {subIcon && (
          <div
            className="w-[36px] h-[36px] flex justify-center items-center rounded-full text-lg font-bold"
            style={{
              backgroundColor: subColor || "#f3f4f6",
              color: `green`,
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
