import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useClass } from "../../../store/admincontext/classcontext/ClassContext";
import { FaChalkboardTeacher } from "react-icons/fa";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";

const cardColors = [
  "bg-blue-50 text-blue-700",
  "bg-green-50 text-green-700",
  "bg-yellow-50 text-yellow-700",
  "bg-pink-50 text-pink-700",
  "bg-purple-50 text-purple-700",
];

const buttonColors = [
  "bg-blue-100 hover:bg-blue-200 text-blue-800",
  "bg-green-100 hover:bg-green-200 text-green-800",
  "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
  "bg-pink-100 hover:bg-pink-200 text-pink-800",
  "bg-purple-100 hover:bg-purple-200 text-purple-800",
];

const ClassList = () => {
  const { state, getClassList } = useClass();

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Class List</h1>
            <p className="text-gray-500 text-sm mt-1">
              Overview of all classes registered in the school
            </p>
          </div>

          <NavLink
            to="/admin/class-register"
            className="px-6 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg shadow transition-all duration-300 text-sm font-medium"
          >
            + Add New Class
          </NavLink>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state?.classList?.map((cls, index) => {
            const cardColor = cardColors[index % cardColors.length];
            const btnColor = buttonColors[index % buttonColors.length];

            return (
              <div
                key={index}
                className={`rounded-lg p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer ${cardColor}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-xl shadow-sm">
                    <FaChalkboardTeacher className={`text-xl ${cardColor.split(" ")[1]}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{cls.name}</h3>
                    <span className="text-sm text-gray-700">Section: {cls.section}</span>
                  </div>
                </div>

                <div className="text-gray-700 mb-4">
                  <span className="text-sm">Teacher: </span>
                  <span className="font-medium">{cls.teacher || "—"}</span>
                </div>

                <NavLink
                  to={`/admin/class/${cls.id}`}
                  className={`self-start px-4 py-2 rounded-md font-medium transition ${btnColor}`}
                >
                  View Details
                </NavLink>
              </div>
            );
          })}

          {/* Empty State */}
          {state?.classList?.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No classes found.
              <NavLink
                to="/admin/class-register"
                className="text-indigo-600 font-semibold underline ml-1 hover:text-indigo-800"
              >
                Add a class
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassList;
