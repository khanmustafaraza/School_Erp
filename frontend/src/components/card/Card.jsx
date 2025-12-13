import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ curEle }) => {
  const { bgColor, icon, link, title, subTitle, subIcon, subColor } = curEle;

  return (
    <NavLink to={link}>
      <div
        className="flex items-center justify-between w-[260px] h-[120px]
          p-2 rounded-sm shadow-sm hover:shadow-md
          transition-all duration-300 bg-[#ffeecc]"
      >
        {/* Left Section */}
        <div className="flex items-center gap-2">
          {/* Main Icon */}
          <div
            className={`w-14 h-14 flex justify-center items-center rounded-xl text-3xl shadow-sm`}
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>

          {/* Text */}
          <div>
            <h5 className="text-base font-semibold text-gray-900 capitalize">
              {title}
            </h5>
            <p className="text-gray-500 text-sm mt-1">{subTitle}</p>
          </div>
        </div>

        {/* Right Sub Icon */}
        {subIcon && (
          <div
            className="w-10 h-10 flex justify-center items-center rounded-full text-base shadow"
            style={{
              backgroundColor: subColor || "#e0f2f1",
              color: "#00897b",
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
