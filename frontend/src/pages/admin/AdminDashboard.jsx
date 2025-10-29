import { FaUserAlt, FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { MdClass, MdPersonAdd } from "react-icons/md";
import AdminLayout from "../../layout/adminlayout/AdminLayout";

const statsData = [
  {
    id: 1,
    title: "Total Students",
    value: 1500,
    icon: <FaUserAlt className="text-5xl text-blue-500" />,
    color: "from-blue-100 to-blue-300",
  },
  {
    id: 2,
    title: "Total Teachers",
    value: 100,
    icon: <FaChalkboardTeacher className="text-5xl text-green-500" />,
    color: "from-green-100 to-green-300",
  },
  {
    id: 3,
    title: "Classes in Session",
    value: 20,
    icon: <MdClass className="text-5xl text-purple-500" />,
    color: "from-purple-100 to-purple-300",
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
      <div className="flex flex-col gap-10 p-6 text-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome to the School Management System
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`flex items-center gap-4 p-6 rounded-xl shadow-lg bg-gradient-to-r ${stat.color} transform hover:scale-105 transition-transform duration-300`}
            >
              {stat.icon}
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {stat.title}
                </p>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MdPersonAdd className="text-2xl text-gray-700" />
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {recentActivities.map((activity, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {activity.title.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline font-medium">
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
