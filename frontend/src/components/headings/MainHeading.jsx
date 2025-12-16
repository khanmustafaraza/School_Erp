import React from "react";
import { useNavigate } from "react-router-dom";

const MainHeading = ({ title, path, btnTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="sp-1">
      <h1 className="text-sm lg:text-xl font-bold text-gray-400 text-center">
        {title}
      </h1>
      <div className="flex justify-end my-2">
        <div>
          <button
            onClick={() => navigate(`${path}`)}
            className=" px-2 py-1 lg:px-3  lg:py-2 bg-teal-400 text-white font-medium rounded-sm hover:bg-teal-500 transition"
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
