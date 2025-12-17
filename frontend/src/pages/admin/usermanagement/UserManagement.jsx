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
      bgColor: "#e6f4ea",
      iconColor: "#2f855a",
      subIcon: <TbArrowBadgeRight />,
      subColor: "#d1f0d6",
    },
    {
      id: 1,
      link: "/admin/user-management/admin-list",
      icon: <MdAdminPanelSettings />,
      title: "Admin List",
      subTitle: 2000,
      bgColor: "#e0f7fa",
      iconColor: "#0097a7",
      subIcon: <TbArrowBadgeRight />,
      subColor: "#b2ebf2",
    },
    {
      id: 2,
      link: "/admin/user-management/teacher-list",
      icon: <FaChalkboardTeacher />,
      title: "Teacher List",
      subTitle: 2000,
      bgColor: "#fff4e6",
      iconColor: "#f59e0b",
      subIcon: <TbArrowBadgeRight />,
      subColor: "#ffe8b3",
    },
    {
      id: 3,
      link: "/admin/user-management/student-list",
      icon: <PiStudentDuotone />,
      title: "Student List",
      subTitle: 2000,
      bgColor: "#f3e8ff",
      iconColor: "#9f7aea",
      subIcon: <TbArrowBadgeRight />,
      subColor: "#e9d8fd",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Header */}
        <div className="my-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight p-1">
            User Management
          </h2>
        </div>

        {/* Card Grid */}
        <div className="flex gap-2 flex-wrap">
          {data?.map((curEle) => (
            <div key={curEle.id} title={`${curEle.title}`}>
              <Card curEle={curEle} />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
