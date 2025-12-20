import React from "react";
import {
  FaCalendarDay,
  FaChalkboardTeacher,
  FaUserCheck,
  FaChartLine,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi"; // subIcon
import Card from "components/card/Card";
import AdminLayout from "../../layout/adminlayout/AdminLayout";

const AttendanceManagement = () => {
  const data = [
    {
      id: 0,
      link: "/admin/attendance-management/mark-attendance",
      icon: <FaCalendarDay />,
      title: "Mark Student Attendance",
      subTitle: 1200,
      bgColor: "#e6f4ea",
      iconColor: "#2f855a",
      subIcon: <FiArrowRight />,
      subColor: "#d1f0d6",
    },
    {
      id: 1,
      link: "/admin/attendance-management/mark-attendance-list",
      icon: <FaChalkboardTeacher />,
      title: "Student Attendance List",
      subTitle: 800,
      bgColor: "#e0f7fa",
      iconColor: "#0097a7",
      subIcon: <FiArrowRight />,
      subColor: "#b2ebf2",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Header */}
        <div className="my-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight p-1">
            Attendance Management
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

export default AttendanceManagement;
