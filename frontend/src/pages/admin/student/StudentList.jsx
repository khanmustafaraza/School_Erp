import React from "react";
import { RiAdminFill } from "react-icons/ri";
import AdminLayout from "adminLayout/AdminLayout";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../context/themecontext/ThemeContext";
import { useStudent } from "adminContext/studentcontext/StudentContext";

const Students = () => {
  const { state } = useStudent();
  const { theme } = useTheme();

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`text-xl flex items-center gap-2 ${
              theme ? "text-blue-600" : "text-white"
            }`}
          >
            <RiAdminFill className="text-xl" /> Student List
          </h2>

          <NavLink
            to="/admin/student-register"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition"
          >
            <span className="material-icons text-sm">add</span>
            Add Student
          </NavLink>
        </div>

        {/* Table */}
        <div
          className={`rounded-sm shadow overflow-x-auto border ${
            theme ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
          }`}
        >
          <table className="w-full text-center text-sm">
            <thead
              className={`uppercase ${
                theme
                  ? "bg-gray-100 text-gray-700"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Class Name</th>
                <th className="px-4 py-3">Section</th>
                <th className="px-4 py-3">Teacher Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* ✅ Handle Empty State */}
              {state?.studentList?.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="py-6 text-gray-400 italic text-center"
                  >
                    No students found. Click <b>Add Student</b> to create one.
                  </td>
                </tr>
              )}

              {/* ✅ Render Student Rows */}
              {state?.studentList?.map((cls, index) => (
                <tr
                  key={cls.student?._id || `${cls.user?._id}-${index}`} // ✅ Unique Key
                  className={`border-t ${
                    theme
                      ? "hover:bg-gray-100"
                      : "hover:bg-gray-800 hover:text-white"
                  } transition`}
                >
                  {/* Serial Number */}
                  <td className="px-4 py-2">{index + 1}</td>

                  {/* Class Name */}
                  <td className="px-4 py-2 capitalize flex items-center gap-2 justify-center">
                    <span className="material-icons text-blue-500">school</span>
                    {cls.class?.name || "N/A"}
                  </td>

                  {/* Section */}
                  <td className="px-4 py-2 capitalize">
                    {cls.class?.section || "N/A"}
                  </td>

                  {/* Teacher Name */}
                  <td className="px-4 py-2 capitalize flex items-center gap-2 justify-center">
                    <span className="material-icons text-green-500">
                      person
                    </span>
                    {cls.user?.userName || "N/A"}
                  </td>

                  {/* Email */}
                  <td className="px-4 py-2">{cls.user?.email || "N/A"}</td>

                  {/* Role */}
                  <td className="px-4 py-2 capitalize">
                    {cls.user?.role || "N/A"}
                  </td>

                  {/* Created Date */}
                  <td className="px-4 py-2">
                    {cls.classTeacher?.createdAt
                      ? new Date(
                          cls.classTeacher.createdAt
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                      <span className="material-icons text-sm">edit</span>
                      Edit
                    </button>

                    <button className="flex items-center gap-1 text-red-600 hover:text-red-800">
                      <span className="material-icons text-sm">delete</span>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Students;
