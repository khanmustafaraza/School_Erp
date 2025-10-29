import React from "react";
import { RiAdminFill } from "react-icons/ri";
import AdminLayout from "adminLayout/AdminLayout";
import { NavLink } from "react-router-dom";
import { useClassTeacher } from "adminContext/classteachercontext/ClassTeacherContext";
import { useTheme } from "../../../context/themecontext/ThemeContext";

const ClassTeacherList = () => {
  const { state } = useClassTeacher();
  const { theme } = useTheme();
  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className={
              theme
                ? "text-xl text-blue-600 flex items-center gap-2"
                : "text-xl text-white flex items-center gap-2"
            }
          >
            <RiAdminFill
              className={theme ? "text-xl text-blue-600" : "text-xl text-white"}
            />{" "}
            Class List
          </h2>
          <button className="flex items-center gap-1 bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            <NavLink to="/admin/class-register">
              <span className="material-icons text-sm">add</span>
              Add Class
            </NavLink>
          </button>
        </div>

        {/* Table */}
        <div
          className={
            theme
              ? " bg-white border border-gray-200 rounded-sm shadow overflow-x-auto cursor-pointer p-1"
              : "bg-black border border-gray-200 rounded-sm shadow overflow-x-auto cursor-pointer p-1"
          }
        >
          <table className="w-full text-center">
            <thead className={theme ? "bg-gray-100" : "bg-black"}>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Class Name</th>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Teacher Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Created</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {state?.classTeacherList?.map((cls, index) => (
                <tr
                  key={cls.classTeacher._id}
                  className="border-t hover:bg-gray-400 hover:text-white transition-all"
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

                  {/* Created At */}
                  <td className="px-4 py-2">
                    {new Date(cls.classTeacher?.createdAt).toLocaleDateString()}
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

export default ClassTeacherList;
