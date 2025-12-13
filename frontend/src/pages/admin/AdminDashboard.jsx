import React from "react";
import { FaUserAlt, FaChalkboardTeacher } from "react-icons/fa";
import { MdClass, MdPersonAdd } from "react-icons/md";
import AdminLayout from "../../layout/adminlayout/AdminLayout";

const statsData = [
  {
    id: 1,
    title: "Total Students",
    value: 1500,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    icon: <FaUserAlt />,
  },
  {
    id: 2,
    title: "Total Teachers",
    value: 100,
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 3,
    title: "Classes in Session",
    value: 20,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    icon: <MdClass />,
  },
  {
    id: 4,
    title: "Active Sections",
    value: 35,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    icon: <MdPersonAdd />,
  },
];

const recentActivities = [
  { title: "New Student Registration", time: "Just now" },
  { title: "New Assignment Submitted", time: "2 hours ago" },
  { title: "Parent-Teacher Meeting Scheduled", time: "1 day ago" },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-10 p-6 bg-white min-h-screen">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to the School Management System
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bgColor} flex items-center gap-4 p-6 rounded-xl shadow-sm
                hover:shadow-md transform hover:-translate-y-1 transition`}
            >
              <div className="bg-white p-4 rounded-full flex items-center justify-center shadow">
                {React.cloneElement(stat.icon, { className: `text-3xl ${stat.iconColor}` })}
              </div>

              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <MdPersonAdd className="text-2xl text-indigo-500" />
            Recent Activities
          </h2>

          <ul className="space-y-4">
            {recentActivities.map((activity, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 rounded-lg
                bg-gray-50 hover:bg-gray-100 shadow-sm transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    {activity.title.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>

                <button className="text-indigo-600 text-sm hover:text-indigo-700 font-medium">
                  View
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
