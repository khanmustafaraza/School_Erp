import { FaUserAlt, FaChalkboardTeacher } from "react-icons/fa";
import { MdClass, MdPersonAdd } from "react-icons/md";
import AdminLayout from "../../layout/adminlayout/AdminLayout";

const statsData = [
  {
    id: 1,
    title: "Total Students",
    value: 1500,
    icon: <FaUserAlt className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Total Teachers",
    value: 100,
    icon: <FaChalkboardTeacher className="text-4xl text-green-500" />,
  },
  {
    id: 3,
    title: "Classes in Session",
    value: 20,
    icon: <MdClass className="text-4xl text-purple-500" />,
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
      <div className="flex flex-col gap-8 p-6 text-gray-800">

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome to the School Management System
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 p-4 border border-gray-200 
              rounded-md bg-white hover:bg-gray-50 transition-colors"
            >
              <div>{stat.icon}</div>

              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-5 rounded-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MdPersonAdd className="text-xl text-gray-700" />
            Recent Activities
          </h2>

          <ul className="space-y-3">
            {recentActivities.map((activity, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 rounded-md
                border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center 
                    text-white font-semibold text-sm">
                    {activity.title.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium text-gray-700">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>

                <button className="text-blue-600 text-sm hover:underline">
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
