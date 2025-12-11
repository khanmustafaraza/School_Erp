import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useClass } from "../../../store/admincontext/classcontext/ClassContext";
import { FaIcons } from "../../../components/icons/Icons";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";

const ClassList = () => {
  const { state, getClassList } = useClass();
  const { FaChalkboardTeacher } = FaIcons;

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Class List</h1>
            <p className="text-gray-500 text-sm mt-1">
              Overview of all classes registered in the school
            </p>
          </div>

          <NavLink
            to="/admin/class-register"
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md shadow-sm text-sm font-medium transition-all"
          >
            + Add New Class
          </NavLink>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {state?.classList?.map((curEle, index) => (
            <NavLink
              key={index}
              className="
                bg-white border border-gray-200 rounded-lg shadow-sm p-4
                hover:shadow-md transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #4e73df 0%, #3759c9 100%)",
                  }}
                >
                  <FaChalkboardTeacher className="text-xl" />
                </div>
              </div>

              {/* Class Name */}
              <h2 className="text-lg font-semibold text-gray-900 text-center uppercase">
                {curEle.name}
              </h2>

              {/* Section */}
              <p className="text-center text-gray-600 text-xs mt-1">
                Section{" "}
                <span className="text-gray-800 font-semibold text-sm">
                  {curEle.section}
                </span>
              </p>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-gray-200 text-center">
                <span className="text-xs text-blue-600 font-medium">
                  View Details →
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Empty State */}
        {state?.classList?.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No classes found.
            <NavLink
              to="/admin/class-register"
              className="text-blue-700 font-semibold underline ml-1"
            >
              Add a class
            </NavLink>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ClassList;
