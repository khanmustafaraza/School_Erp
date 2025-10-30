import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FaUser, FaChalkboardTeacher, FaRegRegistered } from "react-icons/fa";
import Card from "components/card/Card";
import { PiStudentDuotone } from "react-icons/pi";
import { TbArrowBadgeRight } from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";

const UserManagement = () => {
  const data = [
    {
      id: 0,
      link: "/admin/user-register", // ✅ fixed typo
      icon: <FaRegRegistered />,
      title: "Add User",
      subTitle: 2000,

      bgColor: "#c6e4c8",
      subIcon: <TbArrowBadgeRight />,
    },
    {
      id: 1,
      link: "/admin/admin-list", // ✅ fixed typo
      icon: <MdAdminPanelSettings />,
      title: "Admin List",
      subTitle: 2000,
      subIcon: <TbArrowBadgeRight />,

      bgColor: "#26cad9",
    },
    {
      id: 2,
      link: "/admin/teacher-list", // ✅ fixed typo
      icon: <FaChalkboardTeacher />,
      title: "Teacher List",
      subTitle: 2000,

      bgColor: "#7fd6b6",
      subIcon: <TbArrowBadgeRight />,
    },
    {
      id: 3,
      link: "/admin/student-list", // ✅ fixed typo
      icon: <PiStudentDuotone />,
      title: "Student List",
      subTitle: 2000,

      bgColor: "#d59cd6",
      subIcon: <TbArrowBadgeRight />,
    },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-4">
        {data?.map((curEle) => {
          return <Card key={curEle.id} curEle={curEle} />; // ✅ proper return
        })}
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
