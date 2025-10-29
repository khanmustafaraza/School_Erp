import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useTheme } from "../../context/themecontext/ThemeContext";
import { FaPlus, FaHome } from "react-icons/fa";

const MainHeading = ({ isButton, btnTitle }) => {
  const location = useLocation();
  const { theme } = useTheme();

  // Split pathname safely
  const pathParts = location.pathname.split("/").filter(Boolean);
  console.log(location);
  const mainPath = pathParts[0] || "dashboard";
  const subPath = pathParts[1] || "";

  return (
    <div className="flex items-center justify-between mb-6 border-b">
      {/* 🏷️ Heading Section */}
      <div className="flex items-center gap-3">
        <div
          className={`p-3 rounded-full ${
            theme ? "bg-blue-100 text-blue-700" : "bg-gray-700 text-blue-400"
          }`}
        >
          <FaHome className="text-xl" />
        </div>
        <div>
          <h2
            className={`text-2xl font-semibold capitalize ${
              theme ? "text-blue-700" : "text-white"
            }`}
          >
            {mainPath}
            {subPath && <span className="text-gray-400"> / {subPath}</span>}
          </h2>
          <p
            className={`text-sm ${
              theme ? "text-gray-500" : "text-gray-400"
            } mt-1`}
          >
            Manage and organize your {mainPath} easily.
          </p>
        </div>
      </div>

      {/* ➕ Add Button */}
      {isButton && (
        <NavLink
          to={`${location.pathname}`}
          className="flex items-center gap-2 mr-1 bg-[#ddd2fd]  text-white px-5 py-2.5 rounded-sm shadow transition-all duration-200 hover:scale-[1.03]"
        >
          <span className="font-medium">{btnTitle}</span>
        </NavLink>
      )}
    </div>
  );
};

export default MainHeading;
