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
      link: "/admin/attendance-management/class-list",
      icon: <FaCalendarDay />,
      title: "Daily Attendance",
      subTitle: 1200,
      bgColor: "#e6f4ea",
      iconColor: "#2f855a",
      subIcon: <FiArrowRight />,
      subColor: "#d1f0d6",
    },
    {
      id: 1,
      link: "/admin/attendance/class-attendance",
      icon: <FaChalkboardTeacher />,
      title: "Class Attendance",
      subTitle: 800,
      bgColor: "#e0f7fa",
      iconColor: "#0097a7",
      subIcon: <FiArrowRight />,
      subColor: "#b2ebf2",
    },
    {
      id: 2,
      link: "/admin/attendance/student-attendance",
      icon: <FaUserCheck />,
      title: "Student Attendance",
      subTitle: 2000,
      bgColor: "#fff4e6",
      iconColor: "#f59e0b",
      subIcon: <FiArrowRight />,
      subColor: "#ffe8b3",
    },
    {
      id: 3,
      link: "/admin/attendance/reports",
      icon: <FaChartLine />,
      title: "Attendance Reports",
      subTitle: 500,
      bgColor: "#f3e8ff",
      iconColor: "#9f7aea",
      subIcon: <FiArrowRight />,
      subColor: "#e9d8fd",
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
