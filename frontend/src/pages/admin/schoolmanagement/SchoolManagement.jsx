import React from "react";
import AdminLayout from "adminLayout/AdminLayout";
import { FaChalkboardTeacher, FaRegRegistered } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { TbArrowBadgeRight } from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";
import Card from "components/card/Card";

const SchoolManagement = () => {
  const data = [
    {
      id: 0,
      link: "/admin/school-management/school-register",
      icon: <FaRegRegistered />,
      title: "Add School",
      subTitle: 2000,
      bgColor: "#e6f4ea",
      iconColor: "#2f855a",
      subIcon: <TbArrowBadgeRight />,
      subColor: "#d1f0d6",
    },
    {
      id: 1,
      link: "/admin/school-management/school-list",
      icon: <MdAdminPanelSettings />,
      title: "School List",
      subTitle: 2000,
      bgColor: "#e0f7fa",
      iconColor: "#0097a7",
      subIcon: <TbArrowBadgeRight />,
      subColor: "#b2ebf2",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Header */}
        <div className="my-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight p-1">
            School Management
          </h2>
        </div>

        {/* Card Grid */}
        <div className="flex gap-2 flex-wrap">
          {data?.map((curEle) => (
            <div key={curEle.id}>
              <Card curEle={curEle} />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolManagement;
