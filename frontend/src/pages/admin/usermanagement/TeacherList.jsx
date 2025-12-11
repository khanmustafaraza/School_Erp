import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../store/authcontext/AuthContext";

const TeacherList = () => {
  const location = useLocation();
  const [pagePath, setPagePath] = useState("");
  const { state, getUserList } = useAuth();
 const navigate =  useNavigate()

  useEffect(() => {
    setPagePath(location.pathname);
  }, [location]);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <AdminLayout>
      <div className="p-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-1">
          {pagePath
            .split("/")
            .filter(Boolean)
            .map((segment, i, arr) => (
              <span key={i} className="flex items-center capitalize">
                {segment.replace(/-/g, " ")}
                {i !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </span>
            ))}
        </div>

        {/* Header + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
            Teacher Register List
          </h2>

          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search admins..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 
                focus:ring-2 focus:ring-indigo-500 
                focus:border-indigo-500 outline-none text-sm transition"
            />
          </div>
          <div>
            <button className="py-2 px-8 bg-slate-500 text-white rounded" onClick={()=>navigate("/admin/user-management")}>User List</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr className="border-b">
                <th className="px-6 py-3 text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-sm font-semibold">Full Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-sm font-semibold">Role</th>
                <th className="px-6 py-3 text-sm font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {state?.userList
                ?.filter((user) => user.role === "teacher")
                .map((cur, index) => (
                  <tr
                    key={cur._id}
                    className={`border-b transition ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-indigo-50`}
                  >
                    <td className="px-6 py-3 text-gray-700">{index + 1}</td>
                    <td className="px-6 py-3 font-medium text-gray-800">
                      {cur.userName}
                    </td>
                    <td className="px-6 py-3 text-gray-800">{cur.email}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium 
      ${
        cur.role === "teacher"
          ? "bg-blue-100 text-blue-800"
          : cur.role === "teacher"
          ? "bg-green-100 text-green-800"
          : "bg-purple-100 text-purple-800"
      }`}
                      >
                        {cur.role}
                      </span>
                    </td>

                    <td className="px-6 py-3">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition shadow-sm"
                          title="View"
                        >
                          <FiEye size={18} />
                        </button>

                        <button
                          className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition shadow-sm"
                          title="Delete"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
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

export default TeacherList;
