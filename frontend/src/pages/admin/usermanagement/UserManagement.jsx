import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FaChalkboardTeacher, FaRegRegistered } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { TbArrowBadgeRight } from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";
import Card from "components/card/Card";

const UserManagement = () => {
  const data = [
    {
      id: 0,
      link: "/admin/user-management/user-register",
      icon: <FaRegRegistered />,
      title: "Add User",
      subTitle: 2000,
      bgColor: "#c6e4c8",
      subIcon: <TbArrowBadgeRight />,
    },
    {
      id: 1,
      link: "/admin/user-management/admin-list",
      icon: <MdAdminPanelSettings />,
      title: "Admin List",
      subTitle: 2000,
      bgColor: "#26cad9",
      subIcon: <TbArrowBadgeRight />,
    },
    {
      id: 2,
      link: "/admin/user-management/teacher-list",
      icon: <FaChalkboardTeacher />,
      title: "Teacher List",
      subTitle: 2000,
      bgColor: "#7fd6b6",
      subIcon: <TbArrowBadgeRight />,
    },
    {
      id: 3,
      link: "/admin/user-management/student-list",
      icon: <PiStudentDuotone />,
      title: "Student List",
      subTitle: 2000,
      bgColor: "#d59cd6",
      subIcon: <TbArrowBadgeRight />,
    },
  ];

  return (
    <AdminLayout>
      <div className="p-2">
        {/* Elegant Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-400 tracking-wide">
            User Management
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Manage users, admins, teachers, and students with ease.
          </p>
          <div className="mt-4 h-[1px] w-full bg-gray-200"></div>
        </div>

        {/* Modern Card Grid */}
        <div
          className="
            grid
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 
            gap-6
            place-items-stretch
          "
        >
          {data?.map((curEle) => (
            <div className="transition-transform hover:-translate-y-1">
              <Card key={curEle.id} curEle={curEle} />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
