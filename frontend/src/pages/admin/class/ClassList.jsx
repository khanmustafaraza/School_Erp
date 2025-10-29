import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AdminLayout from "adminLayout/AdminLayout";
import { useClass } from "adminContext/classcontext/ClassContext";
import { FaIcons } from "components/icons/Icons";
import { Tooltip } from "flowbite-react";
import MainHeading from "components/headings/MainHeading";
import { useTheme } from "../../../context/themecontext/ThemeContext";

const ClassList = () => {
  const { state } = useClass();
  const { theme } = useTheme();
  const { FaChalkboardTeacher, FaUsers, FaEdit } = FaIcons;

  return (
    <AdminLayout>
      <div className="">
        {/* Header */}
        <MainHeading isButton={false} btnTitle="Add Class" />
        <div className="flex flex-wrap justify-between gap-4">
          {state?.classList?.map((curEle) => {
            return (
              <NavLink className="shadow-md flex-1 p-2 hover:bg-[#fab1a0] hover:text-white">
                <div className="icon bg-blue-300 w-[50px] h-[50px] flex justify-center items-center rounded my-2">
                  <FaChalkboardTeacher className="text-2xl text-white" />
                </div>
                <div className="title flex justify-between text-2xl uppercase">
                  <p className="font-bold">{curEle.name}</p>
                  <p className="font-bold">{curEle.section}</p>
                </div>
                <div className="flex justify-between">
                  <div></div>
                  <Tooltip content="View Students">
                    <div className="bg-yellow-500 rounded-full h-[30px] w-[30px] flex justify-center items-center">
                      <FaEdit className="text-xl text-white" />
                    </div>
                  </Tooltip>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassList;
